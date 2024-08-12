import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row p-8 w-full min-h-[22rem]">
      <div className="basis-[40%] flex flex-col justify-between lg:pl-24">
        <div
          className="flex flex-row justify-between md:justify-start
                   pb-8 md:pb-0 md:flex-col gap-6 "
        >
          <h1 className="flex flex-col font-bold tracking-wide leading-4">
            <span>eommerce</span>
            <span>academy</span>
          </h1>
          <div className="flex items-center gap-4">
            <AiFillLinkedin size={18} />
            <AiFillInstagram size={18} />
            <AiFillTwitterSquare size={18} />
            <AiFillFacebook size={18} />
            <AiFillYoutube size={18} />
          </div>
        </div>
        <p className="text-xs text-paragraph hidden md:block">
          Copyright &copy; 2024
        </p>
      </div>
      <div className="flex-1 flex justify-between md:justify-around py-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-primary pb-4">Courses</h3>
          <p className="text-sm">SMS Marketing</p>
          <p className="text-sm">Loyalty & Rewards</p>
          <p className="text-sm">Review & Feedback</p>
          <p className="text-sm">Popus & CRO</p>
          <p className="text-sm">General Business</p>
          <p className="text-sm">Paid Social</p>
          <p className="text-sm">Paid Search</p>
          <p className="text-sm">SEO</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-primary pb-4">Instructors</h3>
          <p className="text-sm ">Jimmy Kim</p>
          <p className="text-sm">Emily Wick</p>
          <p className="text-sm">John Doe</p>
          <p className="text-sm">Matthew Kim</p>
          <p className="text-sm">Amelia Wick</p>
          <p className="text-sm">Eugen Doe</p>
          <p className="text-sm">Bruce Stanley</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-primary pb-4">Company</h3>
          <p className="text-sm ">About Us</p>
          <p className="text-sm ">Contact Us</p>
          <p className="text-sm ">Pressroom</p>
          <p className="text-sm ">Legal</p>
        </div>
      </div>
      <p className="md:hidden text-xs text-paragraph pt-8 self-center">
        Copyright &copy; 2024
      </p>
    </footer>
  );
};

export default Footer;
