import dotenv from "dotenv"

dotenv.config()

export const config = {
   dateNagerApiUrl: process.env.DATE_NAGER_API_URL || "",
   countriesNowApiUrl: process.env.COUNTRIES_NOW_API_URL || "",
   port: process.env.PORT || 3000
}
