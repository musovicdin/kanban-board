import { useState, useEffect } from "react"

export function useIsLgOrLarger() {
  const [isLgOrLarger, setIsLgOrLarger] = useState(() => window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => setIsLgOrLarger(window.innerWidth >= 1024)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isLgOrLarger
}
