import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";

const QuoteCard = ({
  image,
  title,
  text,
  name,
  profession,
}: {
  image: string;
  title: string;
  text: string;
  name: string;
  profession: string;
}) => {
  return (
    <Card className="border-none bg-secondary">
      <CardContent className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-xs text-paragraph leading-relaxed tracking-wider">
            {text}
          </p>
        </div>
        <div className="flex gap-2">
          <Image
            src={`/${image}`}
            alt="image"
            width={500}
            height={500}
            className="w-10 h-10 rounded-sm"
          />
          <div className="flex flex-col justify-between">
            <p className="font-bold text-xs">{name}</p>
            <p className="font-medium text-xs text-paragraph">{profession}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { QuoteCard };
