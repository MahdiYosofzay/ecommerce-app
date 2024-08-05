import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-12 bg-background flex justify-between items-center px-16 py-10">
      <h1 className="flex flex-col leading-3 gap-2 font-bold text-lg">
        <span>ecommerce</span>
        <span>academy</span>
        <span></span>
      </h1>
      <div className="flex gap-8">
        <Link href="/">Courses</Link>
        <Link href="/">Instructors</Link>
        <Link href="/">About</Link>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary">Log in</Button>
        <Button variant="default" className="flex gap-2 py-6">
          <span>Sign up</span>
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
