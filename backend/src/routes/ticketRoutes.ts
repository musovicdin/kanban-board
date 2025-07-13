import { Router } from "express"
import {
  getAllTickets,
  getSingleTicket,
  newTicket,
  removeTicket,
} from "../controllers/ticketController"

const router = Router()

router.get("/", getAllTickets)
router.get("/:id", getSingleTicket)
router.post("/createTicket", newTicket)
router.delete("/:id", removeTicket)

export default router
