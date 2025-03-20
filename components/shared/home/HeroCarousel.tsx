"use client"

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
import Link from "next/link";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function HeroCarousel() {
  const autoPlay = useRef(
    Autoplay({
      delay: 7000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );
  return (
    <Carousel
      className="w-full"
      opts={{ loop: true }}
      plugins={[autoPlay.current]}
    >
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
              <Link href={carousel.url}>
                <Button className="text-base">{carousel.buttonCaption}</Button>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 md:left-12" />
      <CarouselNext className="right-0 md:right-12" />
    </Carousel>
  );
}
