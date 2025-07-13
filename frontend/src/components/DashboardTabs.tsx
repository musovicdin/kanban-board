import { SortByDropdown } from "./SortByDropdown"
import Board from "./Board"
import { useIsLgOrLarger } from "../hooks/useIsLgOrLarger"

type DashboardTabsProps = {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export const DashboardTabs = ({ activeTab, setActiveTab }: DashboardTabsProps) => {
  const tabs = [
    { key: "status", label: "By status" },
    { key: "total", label: "By total tasks (12)" },
    { key: "due", label: "Tasks due" },
    { key: "extra", label: "Extra tasks" },
    { key: "completed", label: "Tasks completed" },
  ]
  const isLgOrLarger = useIsLgOrLarger()
  return (
    <div className="max-w-full overflow-x-hidden lg:px-4">
      <div className="box-border w-[100vw] overflow-x-auto py-3 whitespace-nowrap md:w-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`inline-block border-b-2 px-4 pt-3 pb-[10px] text-sm font-medium ${
              activeTab === tab.key
                ? "border-[#4F46E5] text-[#4F46E5]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            } ${isLgOrLarger ? "lg:inline-flex lg:items-center" : ""}`}
          >
            {tab.label}
          </button>
        ))}

        <span
          className={`inline-block pl-6 align-middle ${isLgOrLarger ? "lg:ml-auto lg:pl-0" : ""}`}
        >
          <SortByDropdown />
        </span>
      </div>
    </div>
  )
}

export const ByStatus = () => {
  return (
    <div className="bg-white p-4 text-gray-700">
      This is the <strong>By Status</strong> tab.
    </div>
  )
}

interface ByTotalTasksProps {
  isNewTaskModalOpen?: boolean
  onCloseNewTaskModal?: () => void
}

export const ByTotalTasks = ({ isNewTaskModalOpen, onCloseNewTaskModal }: ByTotalTasksProps) => {
  return (
    <div className="flex-1 bg-[#f8fafc]">
      <Board isNewTaskModalOpen={isNewTaskModalOpen} onCloseNewTaskModal={onCloseNewTaskModal} />
    </div>
  )
}

export const TasksDue = () => {
  return (
    <div className="bg-white p-4 text-gray-700">
      This is the <strong>Tasks Due</strong> tab.
    </div>
  )
}

export const ExtraTasks = () => {
  return (
    <div className="bg-white p-4 text-gray-700">
      This is the <strong>Extra Tasks</strong> tab.
    </div>
  )
}

export const TasksCompleted = () => {
  return (
    <div className="bg-white p-4 text-gray-700">
      This is the <strong>Tasks Completed</strong> tab.
    </div>
  )
}
