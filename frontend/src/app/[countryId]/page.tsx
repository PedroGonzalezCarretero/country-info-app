import { getCountryByCode } from "@/utils/api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import PopulationChart from "../components/population-chart"

export default async function Page({
   params
}: {
   params: { countryId: string }
}) {
   const country = await getCountryByCode(params.countryId)

    if(!country) return null
    
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

         <Card className="mb-8">
            <CardHeader className="flex flex-row items-center justify-between">
               <div>
                  <CardTitle className="text-3xl font-bold">
                     {country.countryInfo.commonName}
                  </CardTitle>
                  <p className="text-muted-foreground">
                     {country.countryInfo.officialName}
                  </p>
               </div>
               <Image
                  src={country.flagUrl}
                  alt={`Flag of ${country.countryInfo.commonName}`}
                  width={100}
                  height={60}
                  className="rounded-md shadow-sm"
               />
            </CardHeader>
            <CardContent>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <h3 className="text-xl font-semibold mb-2">
                        Country Information
                     </h3>
                     <p>
                        <strong>Region:</strong> {country.countryInfo.region}
                     </p>
                     <p>
                        <strong>Country Code:</strong>{" "}
                        {country.countryInfo.countryCode}
                     </p>
                  </div>
                  <div>
                     <h3 className="text-xl font-semibold mb-2">
                        Bordering Countries
                     </h3>
                     <div className="flex flex-wrap gap-2">
                        {country.countryInfo.borders.map(
                           (border: {
                              countryCode: string
                              commonName: string
                           }) => (
                              <Link
                                 href={`/${border.countryCode}`}
                                 key={border.countryCode}
                              >
                                 <Badge
                                    variant="secondary"
                                    className="cursor-pointer hover:bg-secondary-foreground hover:text-secondary transition-colors px-4 py-3 text-md"
                                 >
                                    {border.commonName}
                                 </Badge>
                              </Link>
                           )
                        )}
                     </div>
                  </div>
               </div>
            </CardContent>
         </Card>

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
