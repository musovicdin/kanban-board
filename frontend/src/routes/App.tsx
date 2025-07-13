import { Outlet } from "react-router-dom"
import { Provider, useAtomValue, useSetAtom } from "jotai"
import { store, loadingAtom, backendTasksAtom } from "../lib/store"
import { useEffect } from "react"
import { LoadingIcon } from "../components/icons/icons"
import Layout from "../pages/Layout"
import { fetchTasks } from "../lib/api"

export default function App() {
  const loading = useAtomValue(loadingAtom)
  const setBackendTasks = useSetAtom(backendTasksAtom)

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const tasks = await fetchTasks()
        setBackendTasks(tasks)
        store.set(loadingAtom, false)
        console.log("Tasks loaded at app level:", tasks)
      } catch (error) {
        console.error("Failed to load tasks:", error)
        store.set(loadingAtom, false)
      }
    }

    loadTasks()
  }, [setBackendTasks])

  if (loading) {
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
