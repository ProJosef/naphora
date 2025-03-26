import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

type ICard = {
  title: string;
  button: {
    caption: string;
    link: string;
  };
  items: {
    name: string;
    image: string;
    href: string;
  }[];
};

export default function HomeCard({ cards }: { cards: ICard[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2 md:gap-4 md:p-4">
      {cards.map((card) => (
        <Card key={card.title} className="gap-2">
          <CardHeader>
            <CardTitle className="text-xl font-bold">{card.title}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            {card.items.map((item) => (
              <Link href={item.href} key={item.name}>
                <Image
                  src={item.image}
                  className="aspect-square object-scale-down max-w-full h-auto mx-auto"
                  height={120}
                  width={120}
                  alt={item.name}
                />
                <p className="text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.name}
                </p>
              </Link>
            ))}
          </CardContent>
          <CardFooter>
            <Link href={card.button.link}>
              <Button variant="ghost">{card.button.caption}</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
