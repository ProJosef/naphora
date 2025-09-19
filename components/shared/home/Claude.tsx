import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const FossilWatchCard = () => {
  return (
    <Card className="w-72 overflow-hidden">
      <div className="relative bg-gray-100 p-4 flex justify-center items-center">
        <Image 
          src="/api/placeholder/300/300" 
          alt="Fossil Men's Machine Stainless Steel Quartz Watch" 
          width={250} 
          height={250} 
          className="object-contain"
        />
        <Badge variant="destructive" className="absolute top-2 left-2">
          31% Off
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Fossil</h3>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-5 w-5 ${i < 4 ? 'fill-current' : 'stroke-current'}`} 
              />
            ))}
            <span className="text-gray-600 ml-2 text-sm">(20)</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          Fossil Mens Machine Stainless Steel Quartz Watch
        </p>
        <div className="flex items-center">
          <span className="text-xl font-bold text-primary mr-2">$158.21</span>
          <span className="text-sm text-gray-500 line-through">$229.00</span>
        </div>
        <p className="text-xs text-green-600 mt-1">Limited time deal</p>
      </CardContent>
    </Card>
  )
}

export default FossilWatchCard