import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { IconType } from "react-icons";

const InfoCard = ({
  Icon,
  title,
  text,
}: {
  Icon: IconType;
  title: string;
  text: string;
}) => {
  return (
    <Card className="border-none z-20 bg-transparent">
      <CardContent className="flex flex-col gap-2">
        <Icon className="size-10 text-[#99d2fd]" />
        <p className="text-xl font-bold">{title}</p>
        <p className="text-xs text-paragraph">{text}</p>
      </CardContent>
    </Card>
  );
};

export { InfoCard };
