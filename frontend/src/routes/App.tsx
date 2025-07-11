import { Outlet } from "react-router-dom"
import { Provider, useAtomValue } from "jotai"
import { store, loadingAtom, userAtom } from "../lib/store"
import { useEffect } from "react"
import { LoadingIcon } from "../components/icons/icons"
import Layout from "../pages/Layout"

export default function App() {
  const loading = useAtomValue(loadingAtom)
  const user = useAtomValue(userAtom)

  // Simulate loading and onboarding logic
  useEffect(() => {
    // In a real app, fetch user data here and update atoms
    setTimeout(() => {
      store.set(loadingAtom, false)
      store.set(userAtom, { name: "Jane Doe", isOnboarded: true })
    }, 1200)
  }, [])

  if (loading || !user) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-1">
        <div role="status">
          <LoadingIcon />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <Provider store={store}>
      <Layout>
        <Outlet />
      </Layout>
    </Provider>
  )
}
