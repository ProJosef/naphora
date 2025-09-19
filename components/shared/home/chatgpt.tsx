import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default function Chatgpt() {
  return (
    <Card className="w-80 bg-black text-white p-4 rounded-xl shadow-lg">
      <div className="relative w-full h-64">
        <Image
          src="/mnt/data/image.png"
          alt="Fossil Watch"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <CardContent className="mt-4 space-y-2">
        <h2 className="text-lg font-bold">Fossil</h2>
        <p className="text-sm text-gray-400">
          Fossil Men's Machine Stainless Steel Quartz Watch
        </p>
        <div className="flex items-center space-x-1">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="text-green-500 w-4 h-4" fill="currentColor" />
          ))}
          <Star className="text-gray-500 w-4 h-4" />
          <span className="ml-2 text-sm text-gray-300">(20)</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Badge className="bg-red-500 text-white px-2 py-1 rounded-md">
            31% Off
          </Badge>
          <span className="text-red-400 text-sm">Limited time deal</span>
        </div>
        <div className="mt-2">
          <p className="text-2xl font-bold">$158.21</p>
          <p className="text-sm line-through text-gray-500">Was: $229.00</p>
        </div>
      </CardContent>
    </Card>
  );
}
