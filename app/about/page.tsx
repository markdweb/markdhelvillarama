import Image from "next/image";
import { Metadata } from "next";
import Footer from "@/components/Footer";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "../../components/ConnectLinks";
import Workplaces from "./components/Workplaces";
import Gallery from "./components/Gallery";

import dotnetLogo from "public/work/dotnet.png";
import straiveLogo from "public/work/straive.png";

import gradpic from "public/gallery/Image1.jpg";

export const metadata: Metadata = {
  title: "About | Mark Dhel Villarama",
  description:
    "I am a software engineer who basically just enjoys creating things.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          About Me
        </h1>
        <p
          className="text-secondary animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Hey there 👋
        </p>
      </div>
      <div className="lg:hidden mb-8">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
         <Image
            src={gradpic}
            alt={"grad pictorial"}
            width={324}
            height={50}
            layout="responsive" // Set layout to responsive
            className="relative object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl"
            priority
          />
        </div>


      </div>
      <div className="hidden lg:block">
        <Gallery />
      </div>
      <div
        className="flex flex-col gap-16 animate-in md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="My Story" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>My name is Mark Dhel Villarama, but you can call me mark for short. Early back in my senior high school days, I usually loved to explore and test programming during comlab activities, visual graphic. The passion behind this helped me find the right way to choose the program I like in college: Information Systems.</p>
            <p>
              I am an Information Systems Graduate at Dr. Filemon C. Aguilar Memorial College of Las Pinas Satellite Campus. I am grateful and happy in my growth and journey in the institution.
            </p>
            </div>
        </Section>

        <Section heading="My Tech Journey" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              I spend my time learning on technology especially in the design, front-end, back-end development and it helped me experience and see the opportunities at the tech sector. I consistently learn the concepts and tools behind and building projects around it.
            </p>
            </div>
        </Section>

        <Section heading="Highlights" headingAlignment="left">
          <div className="flex flex-col gap-6">
          <ul>
                <li>✅ Graduated at Bachelor of Science in Information System in Dr. Filemon C. Aguilar Memorial College of Las Pinas Satellite 2023</li>              
                <li>✅ Accomplished JavaScript Essential 1 Certificate 2023</li>
                <li>✅ Accomplished Web Developer Certificate 2021</li>
            </ul> 

            <p>
              In addition to browse certificates{" "}
              <Link
                className="underline"
                href="https://mycertificatesweb.vercel.app/"
              >
                See Certificates
              </Link>
            </p>
          </div>
        </Section>

         <Section heading="Hobbies" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              When I have free time, I enjoy playing playstation 4, coding, watching anime or movie, playing music
            </p>
            </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section heading="Work" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <p>
              {new Date().getFullYear() - 2022}+ years of professional
              development experience.
            </p>
            <p>
            Check out some of the works I made at freelancing and projects
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
}

const workplaces = [
  {
    title: ".NET Developer",
    company: "Freelance",
    time: "2022 - 2023",
    imageSrc: dotnetLogo,
    link: "/",
  },
  {
    title: "Human Resource Intern",
    company: "Straive",
    time: "2023",
    imageSrc: straiveLogo,
    link: "https://www.straive.com/",
  },

];