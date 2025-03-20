import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import data from "@/lib/data";

export default function HeroCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {data.carousels.map((carousel, index) => (
          <CarouselItem key={index} className="relative h-[80vh] w-full">
            <div className="absolute inset-0 z-0">
              <Image
                src={carousel.image}  
                alt={carousel.title}
                fill
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-center items-start gap-8 px-16 max-w-xl text-primary mx-4">
              <h2 className="text-xl md:text-6xl text-primary font-bold">
                {carousel.title}
              </h2>
              <Button className="text-base">
                {carousel.buttonCaption}
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 md:left-12" />
      <CarouselNext className="right-0 md:right-12" />
    </Carousel>
  );
}
