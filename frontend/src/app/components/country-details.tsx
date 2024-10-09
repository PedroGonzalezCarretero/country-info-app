import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { BorderingCountries } from "./bourdering-countries"

interface CountryDetailsProps {
   country: {
      countryInfo: {
         commonName: string
         officialName: string
         region: string
         countryCode: string
         borders: Array<{ countryCode: string; commonName: string }>
      }
      flagUrl: string
   }
}

export function CountryDetails({ country }: CountryDetailsProps) {
   return (
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
               <BorderingCountries borders={country.countryInfo.borders} />
            </div>
         </CardContent>
      </Card>
   )
}
