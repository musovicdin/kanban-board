import { IoChevronDownOutline } from "react-icons/io5"

export const SortByDropdown = () => {
  return (
    <div className="flex items-center justify-center gap-2 self-center">
      <span className="text-sm font-medium text-gray-600">Sort by</span>

      <div className="relative inline-block">
        <select
          onChange={(e) => console.log(e.target.value)}
          className="appearance-none rounded-[16px] border border-[#CBD5E1] py-1 pr-8 pl-3 text-sm"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>

        <IoChevronDownOutline
          className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-gray-600"
          size={15}
        />
      </div>
    </div>
  )
}
