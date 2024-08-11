import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { IconType } from "react-icons";

interface WaitlistCardProps {
  iconBgColor: string;
  Icon: IconType;
}

const WaitlistCard: React.FC<WaitlistCardProps> = ({ iconBgColor, Icon }) => {
  return (
    <Card>
      <CardContent className="flex items-center h-[20rem] p-8">
        <div className="flex flex-col justify-between h-full">
          <p className="font-medium">John Doe</p>
          <p className="font-bold text-4xl">Email Marketing</p>
          <p className="text-sm w-[80%]">
            Get behavior-based, data-driven automation features proven to help
            turn email marketing. Get behavior-based, data-driven automation.
          </p>
          <div className="flex gap-2">
            <Badge className="rounded-md bg-badge text-foreground">
              Bignners
            </Badge>
            <Badge className="rounded-md bg-badge text-foreground">10h</Badge>
            <Badge className="rounded-md bg-badge text-foreground">
              Certificate
            </Badge>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 h-full">
          <div
            style={{ backgroundColor: iconBgColor }}
            className={`flex-1 flex justify-center items-center rounded-lg p-8 px-12`}
          >
            <Icon color="#000" className="w-20 h-20" />
          </div>
          <Button
            variant="secondary"
            className="w-full text-foreground py-6 rounded-lg bg-black"
          >
            Join the waitlist
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { WaitlistCard };
