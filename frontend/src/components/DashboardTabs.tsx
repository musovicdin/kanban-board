import { SortByDropdown } from "./SortByDropdown"

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

  return (
    <div className="flex flex-row items-center justify-between border-b border-[#E2E8F0] px-4">
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`border-b-2 pt-3 pb-[10px] text-sm font-medium ${
              activeTab === tab.key
                ? "border-[#4F46E5] text-[#4F46E5]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <SortByDropdown />
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

export const ByTotalTasks = () => {
  return (
    <div className="bg-white p-4 text-gray-700">
      <div>25 In progress +</div>
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
