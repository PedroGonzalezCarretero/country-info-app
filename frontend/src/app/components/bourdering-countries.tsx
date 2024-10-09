import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function BorderingCountries({
   borders
}: {
   borders: Array<{ countryCode: string; commonName: string }>
}) {
   return (
      <div>
         <h3 className="text-xl font-semibold mb-2">Bordering Countries</h3>
         <div className="flex flex-wrap gap-2">
            {borders.map(
               (border: { countryCode: string; commonName: string }) => (
                  <Link
                     href={`/${border.countryCode}`}
                     key={border.countryCode}
                  >
                     <Badge
                        variant="secondary"
                        className="cursor-pointer hover:bg-secondary-foreground hover:text-secondary transition-colors"
                     >
                        {border.commonName}
                     </Badge>
                  </Link>
               )
            )}
         </div>
      </div>
   )
}
