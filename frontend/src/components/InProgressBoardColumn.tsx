import BoardStatusHeader from "./BoardStatusHeader"
import ProgressCard from "./ProgressCard"
import type { Task, TaskType } from "../data/dummyTasks"
import { useDroppable } from "@dnd-kit/core"

interface InProgressBoardColumnProps {
  tasks: Task[]
  onDeleteTask?: (taskId: string) => void
  onAddTask?: (status: TaskType) => void
  isNewTaskModalOpen?: boolean
  onCloseNewTaskModal?: () => void
}

const InProgressBoardColumn = ({ tasks, onDeleteTask, onAddTask }: InProgressBoardColumnProps) => {
  const inProgressTasks = tasks.filter((task) => task.type === "in-progress")

  const { setNodeRef, isOver } = useDroppable({
    id: "in-progress",
    data: {
      type: "column",
      columnType: "in-progress",
    },
  })

  return (
    <div className="flex h-full flex-col">
      <BoardStatusHeader type="in-progress" count={inProgressTasks.length} onAddTask={onAddTask} />
      <div
        ref={setNodeRef}
        className={`flex-1 overflow-y-auto rounded-lg p-2 transition-colors ${
          isOver ? "border-2 border-dashed border-blue-300 bg-blue-50" : ""
        }`}
      >
        {inProgressTasks.map((task) => (
          <ProgressCard key={task.id} task={task} onDelete={onDeleteTask} />
        ))}
      </div>
    </div>
  )
}

export default InProgressBoardColumn
