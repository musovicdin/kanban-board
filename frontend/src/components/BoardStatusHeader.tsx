import { Plus } from "./icons/icons"
import type { TaskType } from "../data/dummyTasks"

interface BoardStatusHeaderProps {
  type: TaskType
  count: number
  onAddTask?: (status: TaskType) => void
}

const getStatusConfig = (type: TaskType) => {
  switch (type) {
    case "in-progress":
      return {
        label: "In Progress",
        bgColor: "bg-[#4F46E5]",
        textColor: "#4F46E5",
      }
    case "reviewed":
      return {
        label: "Reviewed",
        bgColor: "bg-[#F59E0B]",
        textColor: "#F59E0B",
      }
    case "completed":
      return {
        label: "Completed",
        bgColor: "bg-[#10B981]",
        textColor: "#10B981",
      }
    default:
      return {
        label: "Unknown",
        bgColor: "bg-gray-500",
        textColor: "#10B981",
      }
  }
}

const BoardStatusHeader = ({ type, count, onAddTask }: BoardStatusHeaderProps) => {
  const config = getStatusConfig(type)

  const handleAddClick = () => {
    if (onAddTask) {
      onAddTask(type)
    }
  }

  return (
    <div
      className={`flex items-center justify-between rounded-full px-4 py-3 ${config.bgColor} ${config.textColor} mb-4`}
    >
      <div className="flex items-center gap-2">
        <div
          className="bg-opacity-20 flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-medium"
          style={{ color: config.textColor }}
        >
          {count}
        </div>
        <span className="font-medium text-white">{config.label}</span>
      </div>
      <button
        onClick={handleAddClick}
        className="bg-opacity-20 hover:bg-opacity-30 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-colors"
      >
        <Plus />
      </button>
    </div>
  )
}

export default BoardStatusHeader
