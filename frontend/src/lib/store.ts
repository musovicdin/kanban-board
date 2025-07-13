import { atom, getDefaultStore } from "jotai"
import type { Task } from "../data/dummyTasks"
import { fetchTasks } from "./api"

export const loadingAtom = atom<boolean>(true)
export const userAtom = atom<{ name: string; isOnboarded: boolean } | null>(null)

export const tasksAtom = atom<Task[]>([])

export const fetchTasksAtom = atom(null, async (get, set) => {
  set(loadingAtom, true)
  try {
    const tasks = await fetchTasks()
    set(tasksAtom, tasks)
  } finally {
    set(loadingAtom, false)
  }
})

export const store = getDefaultStore()
