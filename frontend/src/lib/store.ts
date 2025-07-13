import { atom, getDefaultStore } from "jotai"
import type { Task } from "../data/dummyTasks"
import { fetchTasks } from "./api"
import type { Task as BackendTask } from "./api"
import { dummyTasks } from "../data/dummyTasks"

export const loadingAtom = atom<boolean>(true)
export const userAtom = atom<{ name: string; isOnboarded: boolean } | null>(null)

export const dummyTasksAtom = atom<Task[]>(dummyTasks)
export const backendTasksAtom = atom<BackendTask[]>([])

export const fetchTasksAtom = atom(null, async (_get, set) => {
  set(loadingAtom, true)
  try {
    const backendTasks = await fetchTasks()
    set(backendTasksAtom, backendTasks)
    console.log(backendTasks)
  } finally {
    set(loadingAtom, false)
  }
})

export const store = getDefaultStore()
