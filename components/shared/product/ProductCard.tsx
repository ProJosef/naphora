import { Card, CardContent } from "@/components/ui/card";
import {
  getNewProducts,
} from "@/lib/actions/product.actions";
import Image from "next/image";

export default async function ProductCard() {
  const item = (await getNewProducts(1))[0];
  return (
    <Card>
      <CardContent>
        <Image
          src={item.images[0]}
          alt={item.name}
          width={300}
          height={300}
          className="object-scale-down max-w-full h-auto mx-auto"
        />
        <h2 className="text-xl font-bold">{item.name}</h2>
        
      </CardContent>
    </Card>
  );
}
