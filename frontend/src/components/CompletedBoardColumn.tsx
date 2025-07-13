import BoardStatusHeader from "./BoardStatusHeader"
import ProgressCard from "./ProgressCard"
import type { Task, TaskType } from "../data/dummyTasks"
import { useDroppable } from "@dnd-kit/core"

interface CompletedBoardColumnProps {
  tasks: Task[]
  onDeleteTask?: (taskId: string) => void
  onAddTask?: (status: TaskType) => void
}

const CompletedBoardColumn = ({ tasks, onDeleteTask, onAddTask }: CompletedBoardColumnProps) => {
  const completedTasks = tasks.filter((task) => task.type === "completed")

  const { setNodeRef, isOver } = useDroppable({
    id: "completed",
    data: {
      type: "column",
      columnType: "completed",
    },
  })

  return (
    <div className="flex h-full flex-col">
      <BoardStatusHeader type="completed" count={completedTasks.length} onAddTask={onAddTask} />
      <div
        ref={setNodeRef}
        className={`flex-1 overflow-y-auto rounded-lg p-2 transition-colors ${
          isOver ? "border-2 border-dashed border-green-300 bg-green-50" : ""
        }`}
      >
        {completedTasks.map((task) => (
          <ProgressCard key={task.id} task={task} onDelete={onDeleteTask} />
        ))}
      </div>
    </div>
  )
}

export default CompletedBoardColumn
