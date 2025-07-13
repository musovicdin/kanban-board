import BoardStatusHeader from "./BoardStatusHeader"
import ProgressCard from "./ProgressCard"
import type { Task, TaskType } from "../data/dummyTasks"
import { useDroppable } from "@dnd-kit/core"

interface ReviewedBoardColumnProps {
  tasks: Task[]
  onDeleteTask?: (taskId: string) => void
  onAddTask?: (status: TaskType) => void
}

const ReviewedBoardColumn = ({ tasks, onDeleteTask, onAddTask }: ReviewedBoardColumnProps) => {
  const reviewedTasks = tasks.filter((task) => task.type === "reviewed")

  const { setNodeRef, isOver } = useDroppable({
    id: "reviewed",
    data: {
      type: "column",
      columnType: "reviewed",
    },
  })

  return (
    <div className="flex h-full flex-col">
      <BoardStatusHeader type="reviewed" count={reviewedTasks.length} onAddTask={onAddTask} />
      <div
        ref={setNodeRef}
        className={`flex-1 overflow-y-auto rounded-lg p-2 transition-colors ${
          isOver ? "border-2 border-dashed border-orange-300 bg-orange-50" : ""
        }`}
      >
        {reviewedTasks.map((task) => (
          <ProgressCard key={task.id} task={task} onDelete={onDeleteTask} />
        ))}
      </div>
    </div>
  )
}

export default ReviewedBoardColumn
