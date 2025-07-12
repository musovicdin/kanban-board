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
import ProgressCard from "../../components/ProgressCard"

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState("status")

  const renderTabContent = () => {
    switch (activeTab) {
      case "status":
        return <ByStatus />
      case "total":
        return <ByTotalTasks />
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
    <div className="min-h-screen border border-gray-200 bg-[#f8fafc]">
      <DashboardHeader />
      <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderTabContent()}

      <ProgressCard />
    </div>
  )
}
