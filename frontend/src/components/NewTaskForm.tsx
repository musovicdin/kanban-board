import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import type { TaskType, TaskPriority } from "../data/dummyTasks"

interface NewTaskFormData {
  title: string
  description: string
  status: TaskType
  priority: TaskPriority
}

interface NewTaskFormProps {
  onSubmit: (data: NewTaskFormData) => void
  onCancel: () => void
  isSubmitting?: boolean
  initialStatus?: TaskType
}

const schema = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be less than 100 characters"),
  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be less than 500 characters"),
  status: yup
    .string()
    .oneOf(["in-progress", "reviewed", "completed"], "Please select a valid status")
    .required("Status is required"),
  priority: yup
    .string()
    .oneOf(["Important", "High", "Medium", "Low"], "Please select a valid priority")
    .required("Priority is required"),
})

const NewTaskForm = ({
  onSubmit,
  onCancel,
  isSubmitting = false,
  initialStatus = "in-progress",
}: NewTaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewTaskFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      status: initialStatus,
      priority: "Important",
    },
  })

  const handleFormSubmit = (data: NewTaskFormData) => {
    onSubmit(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* Title Field */}
      <div>
        <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">
          Title *
        </label>
        <input
          id="title"
          type="text"
          {...register("title")}
          className={`w-full rounded-lg border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
            errors.title ? "border-red-300 bg-red-50" : "border-gray-300"
          }`}
          placeholder="Enter task title"
        />
        {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
      </div>

      {/* Description Field */}
      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-700">
          Description *
        </label>
        <textarea
          id="description"
          rows={4}
          {...register("description")}
          className={`w-full resize-none rounded-lg border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
            errors.description ? "border-red-300 bg-red-50" : "border-gray-300"
          }`}
          placeholder="Enter task description"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      {/* Status Field */}
      <div>
        <label htmlFor="status" className="mb-2 block text-sm font-medium text-gray-700">
          Status *
        </label>
        <select
          id="status"
          {...register("status")}
          className={`w-full rounded-lg border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
            errors.status ? "border-red-300 bg-red-50" : "border-gray-300"
          }`}
        >
          <option value="in-progress">In Progress</option>
          <option value="reviewed">Reviewed</option>
          <option value="completed">Completed</option>
        </select>
        {errors.status && <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>}
      </div>

      {/* Priority Field */}
      <div>
        <label htmlFor="priority" className="mb-2 block text-sm font-medium text-gray-700">
          Priority *
        </label>
        <select
          id="priority"
          {...register("priority")}
          className={`w-full rounded-lg border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
            errors.priority ? "border-red-300 bg-red-50" : "border-gray-300"
          }`}
        >
          <option value="Important">Important</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        {errors.priority && <p className="mt-1 text-sm text-red-600">{errors.priority.message}</p>}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Creating..." : "Create Task"}
        </button>
      </div>
    </form>
  )
}

export default NewTaskForm
