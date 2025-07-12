import classNames from "classnames"

type TagColor = "blue" | "yellow" | "red" | "green" | "grey"

const colorCombos: Record<TagColor, { text: string; bg: string }> = {
  blue: { text: "text-[#4F46E5]", bg: "bg-[#EEF2FF]" },
  yellow: { text: "text-[#EAB308]", bg: "bg-[#FFFBEB]" },
  red: { text: "text-[#F43F5E]", bg: "bg-[#FFF1F2]" },
  green: { text: "text-[#22C55E]", bg: "bg-[#F0FDF4]" },
  grey: { text: "text-[#475569]", bg: "bg-white" },
}

interface TagProps {
  color: TagColor
  children: string
}

const Tag = ({ color, children }: TagProps) => {
  const { text, bg } = colorCombos[color] || colorCombos.grey

  return (
    <div
      className={classNames(
        "flex flex-row items-center justify-center rounded-full px-2 py-1 text-xs font-semibold",
        text,
        bg,
        color === "grey" && "border border-gray-200",
      )}
    >
      {children}
    </div>
  )
}

export default Tag
