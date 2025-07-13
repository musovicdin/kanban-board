import { useState } from "react"
import Modal from "./Modal"
import NewTaskForm from "./NewTaskForm"
import type { TaskType, TaskPriority } from "../data/dummyTasks"

interface NewTaskModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: {
    title: string
    description: string
    status: TaskType
    priority: TaskPriority
  }) => void
  initialStatus?: TaskType
}

const NewTaskModal = ({ isOpen, onClose, onSubmit, initialStatus }: NewTaskModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (data: {
    title: string
    description: string
    status: TaskType
    priority: TaskPriority
  }) => {
    setIsSubmitting(true)
    try {
      await onSubmit(data)
      onClose()
    } catch (error) {
      console.error("Error creating task:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Create New Task">
      <NewTaskForm
        onSubmit={handleSubmit}
        onCancel={handleClose}
        isSubmitting={isSubmitting}
        initialStatus={initialStatus}
      />
    </Modal>
  )
}

export default NewTaskModal
