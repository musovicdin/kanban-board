import axios from "axios"
import { BASE_URL } from "../constants/enums"

export interface Task {
  id: string | number
  title: string
  description: string
  priority: string
  status: string
}

export interface NewTaskData {
  title: string
  description: string
  priority: string
  status: string
}

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await api.get("/")
  return response.data
}

export const createTask = async (task: NewTaskData): Promise<Task> => {
  const response = await api.post("/createTicket", task)
  return response.data
}

export const deleteTask = async (id: string | number): Promise<void> => {
  await api.delete(`/${id}`)
}
