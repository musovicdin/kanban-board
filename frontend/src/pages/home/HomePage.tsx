import { DashboardHeader } from "../../components/DashboardHeader"
import {
  ByStatus,
  ByTotalTasks,
  DashboardTabs,
  ExtraTasks,
  TasksCompleted,
  TasksDue,
} from "../../components/DashboardTabs"
import { useState } from "react"

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState("status")
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false)

  const openNewTaskModal = () => setIsNewTaskModalOpen(true)
  const closeNewTaskModal = () => setIsNewTaskModalOpen(false)

  const renderTabContent = () => {
    switch (activeTab) {
      case "status":
        return <ByStatus />
      case "total":
        return (
          <ByTotalTasks
            isNewTaskModalOpen={isNewTaskModalOpen}
            onCloseNewTaskModal={closeNewTaskModal}
          />
        )
      case "due":
        return <TasksDue />
      case "extra":
        return <ExtraTasks />
      case "completed":
        return <TasksCompleted />
      default:
        return null
    }
  }

  return (
    <div className="mt-[64px] flex h-[calc(100vh-64px)] flex-col bg-[#f8fafc] sm:mt-0 sm:h-screen">
      <DashboardHeader onNewTask={openNewTaskModal} />
      <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-y-auto">{renderTabContent()}</div>
    </div>
  )
}
