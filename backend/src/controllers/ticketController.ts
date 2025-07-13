import { Request, Response } from "express"
import { getTickets, getTicket, createTicket, deleteTicket } from "../services/ticketService"
import { Status, Priority } from "@prisma/client"

export const getAllTickets = async (req: Request, res: Response) => {
  const tickets = await getTickets()
  res.json(tickets)
}

export const getSingleTicket = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const ticket = await getTicket(id)
  if (ticket) {
    res.json(ticket)
  } else {
    res.status(404).json({ error: "Ticket not found" })
  }
}

export const newTicket = async (req: Request, res: Response) => {
  const data = req.body
  if (!Object.values(Status).includes(data.status)) {
    return res.status(400).json({ error: "Invalid status value" })
  }
  if (!Object.values(Priority).includes(data.priority)) {
    return res.status(400).json({ error: "Invalid priority value" })
  }
  const ticket = await createTicket(data)
  res.status(201).json(ticket)
}

export const removeTicket = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  await deleteTicket(id)
  res.json({ message: "Ticket deleted successfully" })
}
