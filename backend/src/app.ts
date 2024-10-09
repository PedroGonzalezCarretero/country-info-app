import express from "express"
import countryRoutes from "./routes/countries"

const app = express()

app.use(express.json())
app.use("/api", countryRoutes)

export default app
