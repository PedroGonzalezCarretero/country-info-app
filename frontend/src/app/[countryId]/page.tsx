import { getCountryByCode } from "@/utils/api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import PopulationChart from "../components/population-chart"
import { CountryDetails } from "../components/country-details"

export default async function Page({
   params
}: {
   params: { countryId: string }
}) {
   const country = await getCountryByCode(params.countryId)

   if (!country) return null

   return (
      <div className="container mx-auto px-4 py-8">
         <Link href="/" className="mb-8 flex items-center gap-4">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               className="lucide lucide-chevron-left"
            >
               <path d="m15 18-6-6 6-6" />
            </svg>
            <span className="text-xl font-bold">Back to list</span>
         </Link>

         <CountryDetails country={country} />

         <Card>
            <CardHeader>
               <CardTitle className="text-2xl font-bold">
                  Population Over Time
               </CardTitle>
            </CardHeader>
            <CardContent>
               <div className="h-[400px]">
                  <PopulationChart data={country.population.populationCounts} />
               </div>
            </CardContent>
         </Card>
      </div>
   )
}
