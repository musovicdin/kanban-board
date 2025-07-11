import { atom, getDefaultStore } from "jotai"

export const loadingAtom = atom<boolean>(true)
export const userAtom = atom<{ name: string; isOnboarded: boolean } | null>(null)

export const store = getDefaultStore()
