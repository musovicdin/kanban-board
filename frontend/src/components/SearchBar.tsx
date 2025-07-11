import { useState } from "react"
import { Search } from "./icons/icons"

interface SearchBarProps {
  placeholder?: string
  className?: string
}

export default function SearchBar({
  placeholder = "Search...",

  className = "",
}: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div className={`mx-auto w-full max-w-2xl ${className}`}>
      <div className="relative flex items-center">
        <div className="absolute left-4">
          <Search />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 text-gray-700 focus:ring-0 focus:outline-none"
        />
      </div>
    </div>
  )
}
