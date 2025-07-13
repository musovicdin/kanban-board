import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3001/api", // Adjust the port/path as needed
  headers: {
    "Content-Type": "application/json",
  },
})

// Example: Fetch all tasks
export const fetchTasks = async () => {
  const response = await api.get("/tasks")
  return response.data
}

// Example: Create a new task
export const createTask = async (task: any) => {
  const response = await api.post("/tasks", task)
  return response.data
}

// Add more API functions as needed
