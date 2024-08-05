import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EnrollCard = () => {
  return (
    <Card className="w-full bg-card">
      <CardContent className="flex items-center h-[320px] gap-4 p-8">
        <img src="/user.jpg" className="w-[280px] h-full rounded-lg" />
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
          <Button variant={"default"} className="w-full text-foreground py-7">
            Enroll now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { EnrollCard };
