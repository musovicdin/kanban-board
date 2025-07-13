import { atom, getDefaultStore } from "jotai"

import type { Task as BackendTask } from "./api"

export const loadingAtom = atom<boolean>(true)

export const backendTasksAtom = atom<BackendTask[]>([])

export const store = getDefaultStore()
