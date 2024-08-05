import {
  PiChartLineUp,
  PiLaptopFill,
  PiNoteFill,
  PiThumbsUpFill,
} from "react-icons/pi";
import {
  CommentCarousel,
  EnrollCard,
  QuoteCard,
  WaitlistCard,
} from "./_components";
import { BsPatchCheckFill } from "react-icons/bs";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { InfoCard } from "./_components/info-card";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { IoIosList, IoIosPeople } from "react-icons/io";
import { RiArtboardFill } from "react-icons/ri";
import Image from "next/image";
import EnrollButton from "@/components/enroll-button";
import Footer from "@/components/footer";
import banner from "./assets/main.jpg";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-12 ">
      <section className="w-full">
        <div
          style={{ backgroundImage: `url(${banner.src})` }}
          className="relative w-full h-[90vh] rounded-3xl bg-cover bg-center overflow-hidden"
        >
          <div className="flex flex-col gap-16 h-full p-16">
            <h1 className="text-6xl font-extrabold text-white leading-[1.3] w-[35rem]">
              Make email Your #1 growth engine
            </h1>
            <EnrollButton className="w-fit z-20" />
            <Image
              src="/blob-pink.svg"
              alt=""
              width={700}
              height={700}
              className="absolute -bottom-72 -left-36 z-10"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full p-12 px-32">
          <Image
            src="/shopifyplus.png"
            alt="logo"
            width={500}
            height={500}
            className="w-40 "
          />
          <Image
            src="/brand2.png"
            alt="logo"
            width={500}
            height={500}
            className="w-40 "
          />
          <Image
            src="/brand3.png"
            alt="logo"
            width={500}
            height={500}
            className="w-40 "
          />
          <Image
            src="/brand4.png"
            alt="logo"
            width={500}
            height={500}
            className="w-40 "
          />
          <Image
            src="/brand5.png"
            alt="logo"
            width={500}
            height={500}
            className="w-40 "
          />
        </div>
      </section>

      <section className="w-full flex flex-col items-center px-32 gap-8">
        <div className="flex flex-col items-center">
          <p>8 hours worth of golden wisdom nuggets</p>
          <h2 className="text-4xl font-extrabold leading-relaxed">
            eCom Academy Course Library
          </h2>
        </div>
        <EnrollCard />
        <div className="grid grid-cols-2 gap-6">
          <WaitlistCard iconBgColor="#ffffff" Icon={BsPatchCheckFill} />
          <WaitlistCard iconBgColor="#99d2ff" Icon={PiThumbsUpFill} />
          <WaitlistCard
            iconBgColor="#99d2ff"
            Icon={BiSolidMessageRoundedDetail}
          />
          <WaitlistCard iconBgColor="#f0a9c9" Icon={PiChartLineUp} />
        </div>
      </section>

      <section className="w-full flex flex-col gap-12 items-center text-secondary py-20 px-8 xl:px-20 bg-[#99d2fd] rounded-3xl">
        <h1 className="text-4xl font-extrabold ">What our student say</h1>
        <CommentCarousel />
      </section>

      <section className="relative overflow-hidden flex rounded-lg bg-card p-8 lg:p-16 w-full">
        <div className="basis-1/2 flex flex-col gap-8">
          <p className="text-4xl font-bold sm:w-[80%]">
            Take a peek at what you'll get inside the course
          </p>
          <Button className="gap-2 text-foreground w-fit p-6 rounded-lg">
            <span>Our instructors</span>
            <FaArrowRightLong />
          </Button>
        </div>
        <div className="basis-1/2 grid grid-cols-2 gap-y-16">
          <InfoCard
            title="57 Video Lessons"
            text="Create visually stunning, high-conversion emails with our drag and
          drop builder."
            Icon={HiMiniVideoCamera}
          />
          <InfoCard
            title="12+ Hours of Interviews"
            text="Sparks conversations and drive revenue by adding personalized SMS messaging to your funnels."
            Icon={IoIosPeople}
          />
          <InfoCard
            title="11 Printable Checklists"
            text="Create visually stunning, high-conversion emails with our drag and
          drop builder."
            Icon={PiNoteFill}
          />
          <InfoCard
            title="30+ Case Studies"
            text="Sparks conversations and drive revenue by adding personalized SMS messaging to your funnels."
            Icon={RiArtboardFill}
          />
          <InfoCard
            title="Automation Demo"
            text="Design forms, capture emails, reduce browse abandonment, and drive more sales."
            Icon={PiLaptopFill}
          />
          <InfoCard
            title="10 Course Quizzes"
            text="Design forms, capture more emails, reduce browse abandonment, and drive more sales."
            Icon={IoIosList}
          />
        </div>
        <Image
          src="/blob.svg"
          alt="bg image"
          width={720}
          height={720}
          className="w-96 h-96 lg:w-[45rem] lg:h-[45rem] absolute -bottom-24 -left-32 lg:-bottom-80 lg:-left-[8rem]"
        />
      </section>
      <section className="relative flex p-8 lg:p-16 w-full">
        <div className="basis-1/3 flex flex-col gap-8">
          <p className="text-4xl font-bold sm:w-[80%]">
            Who is the courses for
          </p>
          <p className="text-sm text-paragraph pr-8">
            Get behavior-based, data-driven automation features proven to help
            turn email marketing into your #1 growth engine.
          </p>
        </div>
        <div className="basis-2/3 grid grid-cols-2 gap-y-16">
          <QuoteCard
            title="eCom Marketing Professionals"
            text="Expand your general knowledge or get insight on the newest, cutting
            edge strategies. Grow your career and advance your knowledge to
            email marketing expert."
            image="floyed-meyer.png"
            name="Floyed Meyer"
            profession="Director of Marketing"
          />
          <QuoteCard
            title="Founders & CEO's"
            text="Running a bussines is hard enough without worrying about sales and marketing.
                  Let us give you the crash course to professional email marketing in 8 hours or less!"
            image="jimmy-kim.png"
            name="Jimmy Kim"
            profession="CEO"
          />
          <QuoteCard
            title="Directors and VPs"
            text="Give your team the training they need, so you can stay focused
                  on strategy and execution."
            image="theresa.png"
            name="Theresa Webb"
            profession="Marketing Manager"
          />
          <QuoteCard
            title="Agency Owners"
            text="You're getting hired to be the export. This course will make your team 
                  the experts to win the business"
            image="esther.png"
            name="Esther Howard"
            profession="Director of Marketing"
          />
        </div>
      </section>
      <section className="flex justify-center items-center rounded-lg bg-primary w-full">
        <div className="relative flex flex-col justify-center items-center gap-8 py-24 px-36 xl:w-2/3 xl:px-12">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-secondary text-center">
            Become a certified eCommerce email marketer
          </h1>
          <EnrollButton />
          <Image
            src="/certificate.jpg"
            alt="cirtificate image"
            width={1000}
            height={1000}
            className="rounded-lg  z-10"
          />
          <Image
            src="/blob-blue.svg"
            alt="blob"
            width={500}
            height={500}
            className="absolute -bottom-16 -right-52 z-0"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
