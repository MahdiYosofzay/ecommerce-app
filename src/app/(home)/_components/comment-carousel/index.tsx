import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImQuotesRight } from "react-icons/im";
import Image from "next/image";

const CommentCarousel = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 flex justify-between gap-8 w-full">
              <div className="flex-1 flex flex-col h-full gap-8">
                <ImQuotesRight color="#f12d85" size={48} />
                <p className="text-2xl lg:text-3xl font-bold xl:w-[80%]">
                  "eCom Academy has been instrumental in helping our business
                  grow through email marketing strategy to help our business
                  grow from $0 to $30m in the last 24 months"
                </p>
                <div className="flex gap-4 items-center">
                  <Card className="overflow-hidden border-none md:hidden w-20 h-20 rounded-full">
                    <CardContent className="p-0">
                      <Image
                        src="/student.jpg"
                        alt="student image"
                        width={1000}
                        height={1000}
                        className="w-full h-full"
                      />
                    </CardContent>
                  </Card>
                  <div>
                    <p className="font-bold">Brandon Fishman</p>
                    <p className="text-sm">CEO @ vitacup</p>
                  </div>
                </div>
              </div>
              <Card
                className="overflow-hidden border-none hidden md:block md:w-[20rem]
                           md:max-h-[20rem] lg:w-[26rem] lg:max-h-[26rem]"
              >
                <CardContent className="p-0">
                  <Image
                    src="/student.jpg"
                    alt="student image"
                    width={1000}
                    height={1000}
                    className="w-full h-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="w-11 h-11 rounded-lg border-none top-auto -left-auto -bottom-20 right-16 bg-white text-black" />
      <CarouselNext className="w-11 h-11 rounded-lg border-none top-auto -right-auto -bottom-20 right-2 bg-white text-black" />
    </Carousel>
  );
};

export { CommentCarousel };
