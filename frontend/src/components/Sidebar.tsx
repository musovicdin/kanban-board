import { useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: "X",
  },
  { title: "Tasks", path: "/reports", icon: "L" },
  { title: "Users", path: "/settings", icon: "D" },
  { title: "Apis", path: "/settings", icon: "D" },
  { title: "Subscription", path: "/settings", icon: "D" },
  { title: "Settings", path: "/settings", icon: "D" },
  { title: "Help & Support", path: "/settings", icon: "D" },
]

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`text-grey relative flex h-screen flex-col bg-white transition-all duration-100 ${
        expanded ? "w-[312px]" : "w-[80px]"
      }`}
    >
      <div className="my-4 flex flex-col items-start gap-10" onClick={() => setExpanded(!expanded)}>
        <div className="flex w-full items-start justify-start p-2 text-xl">
          {expanded ? (
            <img src="/images/LogoLarge.svg" alt="Logo" />
          ) : (
            <img src="/images/LogoSmall.svg" alt="Logo" />
          )}
        </div>

        <SearchBar />
      </div>

      <ul className={`flex flex-col gap-2 ${expanded && "w-full items-start"}`}>
        {SidebarData.map((item, index) => (
          <li key={index} className="w-full">
            <Link
              to={item.path}
              className="flex w-full flex-row items-center justify-start gap-2 p-4 hover:bg-[#0099e5]"
            >
              <span className="flex items-center justify-center">{item.icon}</span>
              {expanded && <span className="text-left">{item.title}</span>}
            </Link>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-6 flex w-full justify-center text-white hover:bg-[#0099e5]">
        <Link to="/login" className="flex items-center gap-2 p-3">
          <span className="flex items-center justify-center">"Logout Icon"</span>
          {expanded && <span className="text-left">Logout</span>}
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
