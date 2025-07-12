import classNames from "classnames"

interface BadgeProps {
  value: number | string
}

const Badge: React.FC<BadgeProps> = ({ value }) => {
  const isSingleDigit = String(value).length === 1

  return (
    <span
      className={classNames(
        "flex items-center justify-center border border-[#A5B4FC] bg-[#EEF2FF] font-medium text-[#4F46E5]",
        isSingleDigit
          ? "h-6 w-6 rounded-full text-sm"
          : "h-6 min-w-[2rem] rounded-full px-1 text-sm",
      )}
    >
      {value}
    </span>
  )
}

export default Badge
