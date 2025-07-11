import type { ReactNode } from "react"
import Sidebar from "../components/Sidebar"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  )
}
