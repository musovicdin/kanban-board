import { useState, useCallback } from "react"
import { dummyTasks } from "../data/dummyTasks"
import type { Task, TaskType, TaskPriority } from "../data/dummyTasks"

interface NewTaskData {
  title: string
  description: string
  status: TaskType
  priority: TaskPriority
}

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(dummyTasks)

  const moveTask = useCallback((taskId: string, newType: TaskType) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, type: newType } : task)),
    )
  }, [])

  const addTask = useCallback((newTaskData: NewTaskData) => {
    const newTask: Task = {
      id: Date.now().toString(), // Simple ID generation
      title: newTaskData.title,
      description: newTaskData.description,
      type: newTaskData.status,
      priority: newTaskData.priority,
      assignees: ["/images/Avatar.png"], // Default assignee
      comments: 0,
      checkmarks: 0,
      additionalAssignees: 0,
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
  }, [])

  const deleteTask = useCallback(
    (taskId: string) => {
      setTasks((prevTasks) => {
        const filteredTasks = prevTasks.filter((task) => task.id !== taskId)

        return filteredTasks
      })
    },
    [tasks],
  )

  const getTasksByType = useCallback(
    (type: TaskType) => {
      return tasks.filter((task) => task.type === type)
    },
    [tasks],
  )

  return {
    tasks,
    moveTask,
    addTask,
    deleteTask,
    getTasksByType,
  }
}
