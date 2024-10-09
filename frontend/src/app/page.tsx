import { getCountries } from "@/utils/api"
import CountryCard from "./components/country-card"

export default async function CountryListPage() {
   const { countries } = await getCountries()

   return (
      <div className="container mx-auto p-4">
         <h1 className="text-2xl font-bold my-8">
            A list of all 256 countries in the world...
         </h1>

         <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {countries.map((country: { countryCode: string; name: string }) => {
               return (
                  <CountryCard country={country} key={country.countryCode} />
               )
            })}
         </ul>
      </div>
   )
}
