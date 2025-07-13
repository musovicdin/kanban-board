import { Router } from "express"
import { getAllTickets, newTicket, removeTicket } from "../controllers/ticketController"

const router = Router()

router.get("/", getAllTickets)
router.post("/createTicket", newTicket)
router.delete("/:id", removeTicket)

export default router
