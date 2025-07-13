import { PrismaClient } from "@prisma/client"
import { Status, Priority } from "@prisma/client"
const prisma = new PrismaClient()

export const getTickets = async () => {
  return prisma.ticket.findMany()
}

export const getTicket = async (id: number) => {
  return prisma.ticket.findUnique({ where: { id } })
}

export const createTicket = async (data: {
  title: string
  description: string
  status: Status
  priority: Priority
}) => {
  return prisma.ticket.create({ data })
}

export const deleteTicket = async (id: number) => {
  return prisma.ticket.delete({ where: { id } })
}
