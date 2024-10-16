const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function getCountries() {
   const response = await fetch(`${API_BASE_URL}/countries`)
   if (!response.ok) {
      throw new Error("Failed to fetch countries")
   }
   const data = await response.json()

   console.log("DATA DEL SERVER", data)
   return {
      countries: data
   }
}

export async function getCountryByCode(code: string) {
   const response = await fetch(`${API_BASE_URL}/country/${code}`)
   if (!response.ok) {
      throw new Error("Failed to fetch country")
   }
   return response.json()
}
