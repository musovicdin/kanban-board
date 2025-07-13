import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import ticketRoutes from "./routes/ticketRoutes"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/tickets", ticketRoutes)

export default app
