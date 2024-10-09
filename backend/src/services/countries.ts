import axios from "axios"
import { config } from "../config/env"

export const fetchAvailableCountries = async () => {
   try {
      const response = await axios.get(
         `${config.dateNagerApiUrl}/AvailableCountries`
      )
      return response.data
   } catch (error) {
      throw new Error("Error fetching available countries")
   }
}

export const fetchCountryInfo = async (countryCode: string) => {
   try {
      const countryInfoResponse = await axios.get(
         `${config.dateNagerApiUrl}/CountryInfo/${countryCode}`
      )
      const countryName = countryInfoResponse.data.commonName

      const populationResponse = await axios.post(
         `${config.countriesNowApiUrl}/countries/population`,
         { country: countryName }
      )
      const flagResponse = await axios.post(
         `${config.countriesNowApiUrl}/countries/flag/images`,
         { country: countryName }
      )

      return {
         countryInfo: countryInfoResponse.data,
         population: populationResponse.data.data,
         flagUrl: flagResponse.data.data.flag
      }
   } catch (error) {
      throw new Error("Error fetching country information")
   }
}
