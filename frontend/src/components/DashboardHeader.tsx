import { IoShareSocialOutline } from "react-icons/io5"
import { PiUploadThin } from "react-icons/pi"
import { FaPlus } from "react-icons/fa6"
import { GiCardJoker } from "react-icons/gi"
import { Search } from "./icons/icons"

interface DashboardHeaderProps {
  onNewTask?: () => void
}

export const DashboardHeader = ({ onNewTask }: DashboardHeaderProps) => {
  return (
    <div className="my-[15px] flex h-[104px] w-full flex-col justify-between gap-4 px-4 sm:p-0 sm:px-6 md:my-0 md:flex-row md:items-center lg:gap-0">
      <div className="flex items-center gap-2">
        <p className="text-[24px] font-bold md:text-[30px]">Kanban Dashboard</p>
        <GiCardJoker className="text-3xl text-[#4F46E5]" />
      </div>

      <div className="flex h-full flex-col justify-around">
        <div className="flex items-center gap-2">
          <Search />

          <button
            onClick={() => console.log("share")}
            className="flex h-[40px] items-center justify-center gap-1 rounded-[30px] bg-[#4F46E5] px-4 text-white"
          >
            Share
            <IoShareSocialOutline size={20} />
          </button>

          <button
            onClick={() => console.log("upload")}
            className="flex items-center justify-center rounded-full border border-[#CBD5E1] text-[#475569]"
            style={{ width: 40, height: 40 }}
          >
            <PiUploadThin size={20} />
          </button>

          <button
            onClick={() => onNewTask?.()}
            className="flex cursor-pointer items-center justify-center rounded-full border border-[#CBD5E1] text-[#475569] transition-colors hover:bg-gray-50"
            style={{ width: 40, height: 40 }}
          >
            <FaPlus size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
