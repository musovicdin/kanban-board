import Badge from "./Badge"
import { ChatTearDrop, CheckCircleGrey, Trash } from "./icons/icons"
import Tag from "./Tag"
import type { Task, TaskPriority } from "../data/dummyTasks"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import { useState } from "react"
import ConfirmModal from "./ConfirmModal"

interface ProgressCardProps {
  task: Task
  onDelete?: (taskId: string) => void
}

const getPriorityColor = (priority: TaskPriority): "blue" | "yellow" | "red" | "green" | "grey" => {
  switch (priority) {
    case "Important":
      return "blue"
    case "High":
      return "red"
    case "Medium":
      return "yellow"
    case "Low":
      return "green"
    default:
      return "grey"
  }
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k"
  }
  return num.toString()
}

const ProgressCard = ({ task, onDelete }: ProgressCardProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const priorityColor = getPriorityColor(task.priority)
  const displayedAssignees = task.assignees.slice(0, 3)
  const remainingAssignees =
    task.assignees.length - displayedAssignees.length + (task.additionalAssignees || 0)

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
    data: {
      type: "task",
      task,
    },
    disabled: showDeleteModal,
  })

  const style = {
    transform: CSS.Translate.toString(transform),
  }

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setShowDeleteModal(true)
  }

  const handleConfirmDelete = () => {
    if (onDelete) {
      onDelete(task.id)
    }
    setShowDeleteModal(false)
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(!showDeleteModal ? listeners : {})}
      {...(!showDeleteModal ? attributes : {})}
      className={`mb-4 flex w-full ${!showDeleteModal ? "cursor-grab" : "cursor-default"} flex-col gap-3 rounded-[24px] border border-gray-200 bg-white p-4 ${!showDeleteModal ? "active:cursor-grabbing" : ""} ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex flex-col items-start gap-2">
        <div className="flex w-full items-center justify-between">
          <Tag color={priorityColor}>{task.priority}</Tag>
          {onDelete && (
            <div
              onPointerDown={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              className="flex items-center justify-center"
            >
              <button
                onClick={handleDeleteClick}
                className="cursor-pointer rounded p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                aria-label="Delete task"
              >
                <Trash />
              </button>
            </div>
          )}
        </div>
        <span className="leading-tight font-semibold text-[#1E293B]">{task.title}</span>
        <span className="leading-relaxed text-[#475569]">{task.description}</span>
      </div>
      <div className="flex w-full flex-row justify-between pt-2">
        <div className="flex items-center gap-1">
          <div className="flex -space-x-2">
            {displayedAssignees.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt="Avatar"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
            ))}
            {remainingAssignees > 0 && (
              <div className="flex flex-row items-center justify-center rounded-full bg-white p-1">
                <Badge value={`+${remainingAssignees}`} />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 font-medium text-[#1E293B]">
          <div className="flex items-center gap-1">
            <ChatTearDrop />
            <span>{formatNumber(task.comments)}</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircleGrey />
            <span>{formatNumber(task.checkmarks)}</span>
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false)
        }}
        onConfirm={() => {
          handleConfirmDelete()
        }}
        title="Delete Task"
        message={`Are you sure you want to delete "${task.title}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        isDestructive={true}
      />
    </div>
  )
}

export default ProgressCard
