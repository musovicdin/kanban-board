export type TaskType = "in-progress" | "reviewed" | "completed"

export type TaskPriority = "Important" | "High" | "Medium" | "Low"

export interface Task {
  id: string
  title: string
  description: string
  type: TaskType
  priority: TaskPriority
  assignees: string[]
  comments: number
  checkmarks: number
  additionalAssignees?: number // for "+3" style display
}

export const dummyTasks: Task[] = [
  {
    id: "1",
    title: "UI/UX Design in the age of AI",
    description: "Lorem ipsum dolor sit amet, libre unst consectetur adipiscing elit.",
    type: "in-progress",
    priority: "Important",
    assignees: ["/images/Avatar.png", "/images/Avatar.png"],
    comments: 11,
    checkmarks: 187,
    additionalAssignees: 0,
  },
  {
    id: "2",
    title: "Responsive Website Design for 23 more clients",
    description: "Lorem ipsum dolor sit amet, libre unst consectetur adipiscing elit.",
    type: "in-progress",
    priority: "Medium",
    assignees: [
      "/images/Avatar.png",
      "/images/Avatar.png",
      "/images/Avatar.png",
      "/images/Avatar.png",
    ],
    comments: 32,
    checkmarks: 115,
    additionalAssignees: 3,
  },
  {
    id: "3",
    title: "Blog Copywriting (Low priority 😊)",
    description: "Lorem ipsum dolor sit amet, libre unst consectetur adipiscing elit.",
    type: "in-progress",
    priority: "Low",
    assignees: ["/images/Avatar.png", "/images/Avatar.png"],
    comments: 987,
    checkmarks: 21800,
    additionalAssignees: 0,
  },
  {
    id: "4",
    title: "Landing page for Azunyan senpai",
    description: "Lorem ipsum dolor sit amet, libre unst consectetur adipiscing elit.",
    type: "in-progress",
    priority: "Low",
    assignees: ["/images/Avatar.png", "/images/Avatar.png"],
    comments: 5,
    checkmarks: 11,
    additionalAssignees: 0,
  },
  {
    id: "5",
    title: "User flow confirmation for finance app",
    description: "Lorem ipsum dolor sit amet, libre unst consectetur adipiscing elit.",
    type: "reviewed",
    priority: "Important",
    assignees: ["/images/Avatar.png"],
    comments: 8,
    checkmarks: 112,
    additionalAssignees: 0,
  },
  {
    id: "6",
    title: "Healthcare app wireframe flow 😊",
    description: "Lorem ipsum dolor sit amet, libre unst consectetur adipiscing elit.",
    type: "reviewed",
    priority: "Important",
    assignees: ["/images/Avatar.png", "/images/Avatar.png", "/images/Avatar.png"],
    comments: 221,
    checkmarks: 87200,
    additionalAssignees: 3,
  },
  {
    id: "7",
    title: "UI/UX Design in the age of AI",
    description: "Lorem ipsum dolor sit amet, libre unst consectetur adipiscing elit.",
    type: "completed",
    priority: "High",
    assignees: ["/images/Avatar.png", "/images/Avatar.png"],
    comments: 108000,
    checkmarks: 997,
    additionalAssignees: 0,
  },
  {
    id: "8",
    title: "UI/UX Design in the age of AI",
    description: "Lorem ipsum dolor sit amet, libre unst consectetur adipiscing elit.",
    type: "completed",
    priority: "Low",
    assignees: ["/images/Avatar.png", "/images/Avatar.png", "/images/Avatar.png"],
    comments: 17,
    checkmarks: 0,
    additionalAssignees: 0,
  },
  {
    id: "9",
    title: "UI/UX Design in the age of AI",
    description: "Lorem ipsum dolor sit amet, libre unst consectetur adipiscing elit.",
    type: "completed",
    priority: "Medium",
    assignees: [
      "/images/Avatar.png",
      "/images/Avatar.png",
      "/images/Avatar.png",
      "/images/Avatar.png",
    ],
    comments: 888,
    checkmarks: 12,
    additionalAssignees: 0,
  },
  {
    id: "10",
    title: "UI/UX Design in the age of AI",
    description: "Lorem ipsum dolor sit amet, libre unst consectetur adipiscing elit.",
    type: "completed",
    priority: "High",
    assignees: ["/images/Avatar.png"],
    comments: 9,
    checkmarks: 487,
    additionalAssignees: 0,
  },
  {
    id: "11",
    title: "UI/UX Design in the age of AI",
    description: "Lorem ipsum dolor sit amet, libre unst consectetur adipiscing elit.",
    type: "completed",
    priority: "Medium",
    assignees: ["/images/Avatar.png", "/images/Avatar.png"],
    comments: 17,
    checkmarks: 55,
    additionalAssignees: 0,
  },
]
