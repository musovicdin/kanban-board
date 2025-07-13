import { useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import {
  CreditCard,
  Cube,
  Gear,
  HouseSimple,
  ListBullets,
  LogoutIcon,
  Message,
  UsersIcon,
  Warning,
} from "./icons/icons"
import { GoX } from "react-icons/go"
import Badge from "./Badge"

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HouseSimple />,
    badge: "10",
  },
  {
    title: "Tasks",
    path: "/",
    icon: <ListBullets />,
  },
  {
    title: "Users",
    path: "/",
    icon: <UsersIcon />,
    badge: "2",
  },
  {
    title: "Apis",
    path: "/",
    icon: <Cube />,
  },
  {
    title: "Subscription",
    path: "/",
    icon: <CreditCard />,
  },
  {
    title: "Settings",
    path: "/",
    icon: <Gear />,
  },
  {
    title: "Help & Support",
    path: "/",
    icon: <Message />,
  },
]

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false)

  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <div
        className={`text-grey hidden h-screen flex-col justify-between bg-white px-4 pt-6 transition-all duration-100 sm:flex ${
          expanded ? "w-[312px]" : "w-[80px]"
        }`}
      >
        <div>
          <div
            className="my-4 flex flex-col items-start gap-8"
            onClick={() => setExpanded(!expanded)}
          >
            <div className="flex w-full cursor-pointer items-start justify-start text-xl">
              {expanded ? (
                <img src="/images/LogoLarge.svg" alt="Logo" />
              ) : (
                <img src="/images/LogoSmall.svg" alt="Logo" />
              )}
            </div>
            {expanded && <SearchBar />}
          </div>

          <ul className={`flex flex-col gap-2 ${expanded && "w-full items-start"}`}>
            {SidebarData.map((item) => {
              return (
                <Link
                  to={item.path}
                  className="flex w-full flex-row items-center justify-between gap-2 px-4 py-2"
                >
                  <div className="flex flex-row items-center gap-2">
                    <span className="flex items-center justify-center">{item.icon}</span>
                    {expanded && <span className="text-left">{item.title}</span>}
                  </div>
                  {expanded && item.badge && <Badge value={item.badge} />}
                </Link>
              )
            })}
          </ul>
        </div>

        <div>
          {expanded && (
            <div className="mb-4 flex h-[168px] w-[280px] flex-col gap-4 rounded-lg bg-[#F8FAFC] p-4 text-sm text-[#475569]">
              <div className="flex flex-row justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E1E8EF]">
                  <Warning />
                </div>
                <div className="flex">
                  <GoX size={20} color="grey" />
                </div>
              </div>
              <p>Enjoy unlimited access to our app with only a small price monthly.</p>
              <div className="flex w-[124px] flex-row items-center justify-between">
                <p className="font-semibold">Dismiss</p>
                <p className="font-semibold text-[#4F46E5]">Go Pro</p>
              </div>
            </div>
          )}

          {expanded ? (
            <div className="mb-4 flex w-[280px] flex-row items-center gap-3 border-t border-gray-200 p-4">
              <div
                onClick={() => setExpanded(!expanded)}
                className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-300"
              >
                <img
                  src="/images/Avatar.png"
                  alt="User Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <p className="text-sm font-medium text-gray-900">Azunyan U. Wu</p>
                <p className="text-xs text-gray-500">Basic Member</p>
              </div>
              <div className="flex items-center justify-center">
                <LogoutIcon />
              </div>
            </div>
          ) : (
            <div
              onClick={() => setExpanded(!expanded)}
              className="mb-4 flex w-full cursor-pointer items-center justify-center border-t border-gray-200 pt-4 pb-4"
            >
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-300">
                <img
                  src="/images/Avatar.png"
                  alt="User Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="fixed top-0 left-0 z-50 flex h-[64px] w-full items-center justify-end bg-white px-4 shadow sm:hidden">
        <div className="flex w-full cursor-pointer items-center text-xl">
          <img
            src="/images/LogoLarge.svg"
            alt="Logo"
            className="block max-h-full"
            style={{ transform: "translateY(4px)" }}
          />
        </div>

        <button onClick={() => setMobileOpen(true)} className="text-2xl">
          ☰
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white p-6 sm:hidden">
          <div className="mb-4 flex w-full items-center justify-between">
            <div className="flex w-full cursor-pointer items-start justify-start text-xl">
              <img
                src="/images/LogoLarge.svg"
                alt="Logo"
                className="block max-h-full"
                style={{ transform: "translateY(4px)" }}
              />
            </div>

            <div className="flex w-full justify-end">
              <button onClick={() => setMobileOpen(false)} className="text-2xl">
                ✕
              </button>
            </div>
          </div>
          <SearchBar className="mb-4" />

          <ul className="flex flex-col gap-4">
            {SidebarData.map((item) => (
              <Link
                to={item.path}
                className="flex w-full flex-row items-center justify-between gap-4 px-2 py-2"
                key={item.title}
                onClick={() => setMobileOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                {item.badge && <Badge value={item.badge} />}
              </Link>
            ))}
          </ul>

          <div className="mt-auto">
            <div className="mt-6 flex h-[168px] flex-col gap-4 rounded-lg bg-[#F8FAFC] p-4 text-sm text-[#475569]">
              <div className="flex justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E1E8EF]">
                  <Warning />
                </div>
                <GoX size={20} color="grey" />
              </div>
              <p>Enjoy unlimited access to our app with only a small price monthly.</p>
              <div className="flex justify-between">
                <p className="font-semibold">Dismiss</p>
                <p className="font-semibold text-[#4F46E5]">Go Pro</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 border-t border-gray-200 pt-4">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-300">
                <img
                  src="/images/Avatar.png"
                  alt="User Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Azunyan U. Wu</p>
                <p className="text-xs text-gray-500">Basic Member</p>
              </div>
              <LogoutIcon />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar
