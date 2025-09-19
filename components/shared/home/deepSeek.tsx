import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star } from "lucide-react";

interface ProductCardProps {
  brand: string;
  title: string;
  currentPrice: number;
  originalPrice: number;
  discountPercentage: number;
  isLimitedDeal: boolean;
  rating?: number;
  reviewCount?: number;
  imageUrl: string;
}

export function ProductCard({
  brand,
  title,
  currentPrice,
  originalPrice,
  discountPercentage,
  isLimitedDeal,
  rating = 4.5,
  reviewCount = 128,
  imageUrl,
}: ProductCardProps) {
  return (
    <Card className="w-full max-w-[320px] border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
      <CardHeader className="p-0 relative">
        <div className="aspect-square bg-gray-100 relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {discountPercentage > 0 && (
            <Badge className="absolute top-2 right-2 bg-red-600 text-white text-sm font-medium">
              {discountPercentage}% OFF
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-500">{brand}</h3>
            <h2 className="text-lg font-semibold text-gray-900 line-clamp-2" title={title}>
              {title}
            </h2>
          </div>
          
          {isLimitedDeal && (
            <Badge variant="outline" className="text-orange-600 border-orange-600 text-xs">
              Limited Deal
            </Badge>
          )}
        </div>
        
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-1">
            ({reviewCount})
          </span>
        </div>
        
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-2xl font-bold text-gray-900">
            ${currentPrice.toFixed(2)}
          </span>
          {originalPrice > currentPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {originalPrice > currentPrice && (
          <div className="text-xs text-green-600">
            You save ${(originalPrice - currentPrice).toFixed(2)} ({discountPercentage}%)
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-gray-900 hover:bg-gray-800 transition-colors duration-200 group-hover:bg-primary">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}