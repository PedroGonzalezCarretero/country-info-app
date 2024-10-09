import { Request, Response } from "express"
import {
   fetchAvailableCountries,
   fetchCountryInfo
} from "../services/countries"

export const getCountries = async (req: Request, res: Response) => {
   try {
      const countries = await fetchAvailableCountries()
      res.json(countries)
   } catch (error : any) {
      res.status(500).json({ message: error.message })
   }
}

export const getCountryByCode = async (req: Request, res: Response) => {
   const { code } = req.params
   try {
      const countryInfo = await fetchCountryInfo(code)
      res.json(countryInfo)
   } catch (error : any) {
      res.status(500).json({ message: error.message })
   }
}
