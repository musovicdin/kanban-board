import Badge from "./Badge"
import { ChatTearDrop, CheckCircleGrey } from "./icons/icons"
import Tag from "./Tag"

const ProgressCard = () => {
  return (
    <div className="flex h-[190px] w-[320px] flex-row gap-4 rounded-[24px] border border-gray-200 bg-white p-3">
      <div className="flex flex-col items-start gap-2">
        <Tag color="red">Shit</Tag>
        <span className="font-semibold text-[#1E293B]">Random text za neki ui ux nesto</span>
        <span className="text-[#475569]">
          Random text za neki ui ux nesto Random text za neki ui ux nest asdas
        </span>
        <div className="flex w-full flex-row justify-between pt-4">
          <div className="mt-auto flex items-center gap-1">
            <div className="flex -space-x-2">
              <img
                src="/images/Avatar.png"
                alt="Avatar"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
              <img
                src="/images/Avatar.png"
                alt="Avatar"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
              <img
                src="/images/Avatar.png"
                alt="Avatar"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
              <div className="flex flex-row items-center justify-center rounded-full bg-white p-1">
                <Badge value={3} />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 font-medium text-[#1E293B]">
            <div className="flex items-center gap-1">
              <ChatTearDrop />
              <span>32</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircleGrey />
              <span>54</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressCard
