import { DndContext, DragOverlay } from "@dnd-kit/core"
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core"
import { useState } from "react"
import ProgressCard from "./ProgressCard"
import type { Task, TaskType, TaskPriority } from "../data/dummyTasks"
import CompletedBoardColumn from "./CompletedBoardColumn"
import ReviewedBoardColumn from "./ReviewBoardColumn"
import InProgressBoardColumn from "./InProgressBoardColumn"
import { useTasks } from "../hooks/useTasks"
import NewTaskModal from "./NewTaskModal"

interface BoardProps {
  isNewTaskModalOpen?: boolean
  onCloseNewTaskModal?: () => void
  initialTaskStatus?: TaskType
}

const Board = ({
  isNewTaskModalOpen = false,
  onCloseNewTaskModal,
  initialTaskStatus,
}: BoardProps) => {
  const { moveTask, addTask, deleteTask, getTasksByType } = useTasks()
  const [activeTask, setActiveTask] = useState<Task | null>(null)
  const [modalInitialStatus, setModalInitialStatus] = useState<TaskType>(
    initialTaskStatus || "in-progress",
  )

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    const task = active.data.current?.task
    if (task) {
      setActiveTask(task)
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveTask(null)

    if (!over) return

    const taskId = active.id as string

    // Check if dropping over a column
    if (over.data.current?.type === "column") {
      const newColumnType = over.data.current.columnType
      const task = active.data.current?.task

      if (task && task.type !== newColumnType) {
        moveTask(taskId, newColumnType)
      }
    }
  }

  const handleNewTaskSubmit = (data: {
    title: string
    description: string
    status: TaskType
    priority: TaskPriority
  }) => {
    addTask(data)
  }

  const handleCloseModal = () => {
    if (onCloseNewTaskModal) {
      onCloseNewTaskModal()
    }
  }

  const handleAddTaskForStatus = (status: TaskType) => {
    setModalInitialStatus(status)
    // This would trigger opening the modal - the parent component should handle this
  }

  return (
    <>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex h-full min-h-[600px] gap-6 p-6">
          <div className="min-w-0 flex-1">
            <InProgressBoardColumn
              tasks={getTasksByType("in-progress")}
              onDeleteTask={deleteTask}
              onAddTask={handleAddTaskForStatus}
            />
          </div>
          <div className="min-w-0 flex-1">
            <ReviewedBoardColumn
              tasks={getTasksByType("reviewed")}
              onDeleteTask={deleteTask}
              onAddTask={handleAddTaskForStatus}
            />
          </div>
          <div className="min-w-0 flex-1">
            <CompletedBoardColumn
              tasks={getTasksByType("completed")}
              onDeleteTask={deleteTask}
              onAddTask={handleAddTaskForStatus}
            />
          </div>
        </div>

        <DragOverlay>
          {activeTask ? (
            <div className="rotate-5 opacity-95">
              <ProgressCard task={activeTask} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      <NewTaskModal
        isOpen={isNewTaskModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleNewTaskSubmit}
        initialStatus={modalInitialStatus}
      />
    </>
  )
}

export default Board
