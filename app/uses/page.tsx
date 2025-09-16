import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";
import Footer from "@/components/Footer";

import figmaLogo from "public/gear/figmaTool.png";
import vercelLogo from "public/gear/verceel.png";
import vsCodeLogo from "public/gear/vsCodee.png";
import vsCommunityLogo from "public/gear/vsCommunity.png";
import githubLogo from "public/gear/githubpic.png";
import canvaLogo from "public/gear/canvaa.png"
import notionLogo from "public/gear/notionpic.png"
import onlinemeetsLogo from "public/gear/onlineLogo.png"  


export const metadata: Metadata = {
  title: "Uses | Mark Dhel Villarama",
  description:
    "My toolbox. This is gear I actually own and recommend.",
};

interface ItemProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  sponsored?: boolean;
}

const Item = ({ title, description, image, link, sponsored }: ItemProps) => (
  <li className="flex gap-4 items-center transition-opacity">
    <a
      className="relative rounded-xl overflow-hidden bg-tertiary aspect-square w-[4rem] min-w-[4rem] h-[4rem] shadow"
      href={link}
      target="_blank"
    >
      <Image
        src={image}
        alt={title}
        className="object-center object-cover w-full h-full"
        fill
      />
    </a>
    <div className="grow flex justify-between gap-2 items-center">
      <div className="space-y-1">
        <h3 className="text-primary line-clamp-2 leading-tight font-medium">
          {title}
        </h3>
        <p className="text-secondary line-clamp-3 leading-tight text-sm">
          {description}
        </p>
      </div>
      <div>
        <a
          className="ml-auto text-sm rounded-full px-4 py-1 bg-secondary h-fit"
          href={link}
          target="_blank"
        >
          Get
        </a>
        {sponsored && (
          <p className="mt-1 text-center text-xs text-tertiary">Sponsored</p>
        )}
      </div>
    </div>
  </li>
);

export default function Gear() {
  const categories = gear.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-8 animate-in">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
            Software I use, gadgets I love, and other things I recommend.
            </h1>
            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
            I get asked a lot about the things I use to build software, stay productive. I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff
            </p>
          </div>
        </div>

        {categories.map((category, index) => (
          <section
            className="flex flex-col gap-8 animate-in"
            key={index}
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <h2 className="text-secondary">{category}</h2>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-8 animated-list">
              {gear.map((item, index) => {
                if (item.category === category) {
                  return (
                    <Item
                      key={index}
                      title={item.name}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                      sponsored={item.sponsored}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </section>
        ))}
      </div>
      <Footer />
    </>
  );
}

const gear = [
  {
    name: "Visual Studio Code",
    category: "Development Tools",
    image: vsCodeLogo,
    description: "Most of the time, I use visual studio code for development.",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Visual Studio 2019",
    category: "Development Tools",
    image: vsCommunityLogo,
    description: "I use to create desktop application for my projects and clients",
    link: "https://visualstudio.microsoft.com/vs/community/",
  },

  {
    name: "Figma",
    category: "Design",
    image: figmaLogo,
    description:
      "I use Figma for my design projects. I love the simplicity of the UI and the features.",
    link: "https://figma.com/",
  },
  {
    name: "Canva",
    category: "Design",
    image: canvaLogo,
    description:
      "I use Canva for random design. I also use this for my personal use",
    link: "https://www.canva.com/",
  },

  {
    name: "Github",
    category: "Platform",
    image: githubLogo,
    description: "I use GitHub to build projects and updating repositories. Sometimes, I use GitHub for my personal use.",
    link: "https://github.com/",
  },
  {
    name: "Vercel",
    category: "Platform",
    image: vercelLogo,
    description:
      "I use Vercel to deploy every websites I handled.",
    link: "https://vercel.com/",
  }, 
  {
    name: "Lenovo Laptop",
    category: "WorkStation",
    image: "https://m.media-amazon.com/images/I/71ZAqcnrl1L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description: "I use Lenovo (Type T420) Laptop (thinkpad) when I’m at Cafe or Mall.",
    link: "https://www.ebay.ph/itm/235159205473?hash=item36c094b661:g:9RwAAOSwSANk60L5&amdata=enc%3AAQAIAAAA0Cg8tzmv2MxUIyXmRtXPejbpkGyICTQJxIYbhElYoiZgN12RHVOSsCBt%2FQR7usEXuJeZytEj3J4HWGpnWHqKMvbf3jXyDrfC3NSBYUvrfRA6rNae%2BxDDvXoRcAUlhLs0WIwMvH0D2TH3k9j67TUPU7CDyBYSXtSoPeTTviKNKavecMLZt413T6gAr%2FXtJReZT6DCJfowvPmmsqeRMe3Ziznl9FeW5N2xo0HQKVGBXp4L3fPCNBWjGuvttJ3cKn%2FLN%2BERxLkGmGMPdsXo733WBt8%3D%7Ctkp%3ABFBM0oyxtO1i",
  },
  {
    name: "Realme Narzo50",
    category: "WorkStation",
    image: "https://m.media-amazon.com/images/I/81NqFw+QcEL._AC_SY300_SX300_.jpg",
    description: "High specs for taking pictures and video recording. I use this for my personal use.",
    link: "https://www.realme.com/ph/realme-narzo-50",
  },
  {
    name: "Alexa Echo Dot",
    category: "WorkStation",
    image:
      "https://m.media-amazon.com/images/I/71e3xpEsLFL._AC_SX425_.jpg",
    description:
      "I use for soundtrip, relax song, personal assistant.",
    link: "https://www.amazon.com/All-New-release-International-Version-Adaptor/dp/B09RX3YBSP/ref=sr_1_2?crid=TEIMMW1FSPT2&keywords=alexa&qid=1698312777&sprefix=ale%2Caps%2C635&sr=8-2",
    sponsored: true
  },  
  {
    name: "Notion",
    category: "Productivity",
    image: notionLogo,
    description:
      "I use Notion to record and organize my daily life.",
    link: "https://www.notion.so/",
  },
  {
    name: "Google Meet, Zoom, MS Teams",
    category: "Productivity",
    image: onlinemeetsLogo,
    description:
      "I use them whenever needed.",
    link: "https://resources.owllabs.com/blog/best-meeting-apps"
  },

];
