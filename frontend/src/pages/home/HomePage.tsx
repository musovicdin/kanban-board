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

  // useEffect(()=>{

  // },[])

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
    <div className="flex min-h-screen flex-col border border-gray-200 bg-[#f8fafc]">
      <DashboardHeader onNewTask={openNewTaskModal} />
      <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1">{renderTabContent()}</div>
    </div>
  )
}
