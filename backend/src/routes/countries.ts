import { Router } from "express"
import {
   getCountries,
   getCountryByCode
} from "../controllers/countries"

const router = Router()

router.get("/countries", getCountries)
router.get("/country/:code", getCountryByCode)

export default router
