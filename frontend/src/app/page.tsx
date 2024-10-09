import Link from "next/link"
import { getCountries } from "@/utils/api"

export default async function CountryListPage() {

    const {countries} = await getCountries()
   return (
      <div className="container mx-auto p-4">
         <h1 className="text-2xl font-bold my-8">A list of all 256 countries in the world...</h1>

         <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {countries.map((country) => {
               return (
                     <li
                        key={country.countryCode}
                        className="border  rounded-lg hover:bg-primary/10"
                     >
                        <Link href={`/${country.countryCode}`} className="p-4 flex flex-wrap justify-between items-center group">
                       <p> {country.name}</p>
                       <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right hidden group-hover:block"><path d="m9 18 6-6-6-6"/></svg>
                        </Link>
                     </li>
               )
            })}
         </ul>
      </div>
   )
}
