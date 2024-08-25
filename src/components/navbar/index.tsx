"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav className="w-full bg-background mb-2 sticky top-0 left-0 z-30">
      <div className="relative flex flex-row-reverse md:flex-row justify-between items-center px-8 lg:px-16 py-4">
        <Link
          href="/"
          className="flex flex-col leading-3 gap-2 font-bold text-lg"
        >
          <span>ecommerce</span>
          <span>academy</span>
          <span></span>
        </Link>
        <div className="hidden md:flex gap-8">
          <Link href="/">Courses</Link>
          <Link href="/">Instructors</Link>
          <Link href="/">About</Link>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="secondary">
            <Link href="/auth/login">Log in</Link>
          </Button>
          <Button variant="default">
            <Link href="/auth/signup" className="flex items-center gap-2 py-6">
              Sign up
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <RxHamburgerMenu
          className="md:hidden"
          size={28}
          onClick={() => setOpenMenu(!openMenu)}
        />
        {openMenu && (
          <div className="md:hidden absolute top-16 left-0 bg-secondary w-full h-fit z-30">
            <ul className="flex flex-col gap-4 px-12 py-8">
              <li>
                <Link href="/">Courses</Link>
              </li>
              <li>
                <Link href="/">Instructors</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Sign up</Link>
              </li>
              <li>
                <Link href="/">Log in</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
