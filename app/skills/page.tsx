import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";
import Footer from "@/components/Footer";

import htmlLogo from "public/skills/html5.png";
import cssLogo from "public/skills/css3.png";
import javascriptLogo from "public/skills/jscript.png";
import bootstrapLogo from "public/skills/bootstrapp.png";
import reactjsLogo from "public/skills/reactJS.png";
import typescriptLogo from "public/skills/typescriptt.png";
import tailwindLogo from "public/skills/tailwindcss.png";
import nextjsLogo from "public/skills/nextJs.png";
import nodejsLogo from "public/skills/node.png";
import mysqlLogo from "public/skills/mysql.png";
import gitLogo from "public/skills/git.png";
import githubLogo from "public/skills/githubpic.png";
import npmLogo from "public/skills/npmm.png";
import vercelLogo from "public/skills/verceel.png"; 
import netlifyLogo from "public/skills/netlifyy.png";
import vsCodeLogo from "public/skills/vsCodee.png";
import vbnetLogo from "public/skills/vb.png";
import csharpLogo from "public/skills/csharp.png";
import sqlServerLogo from "public/skills/sqlServer.png";    
import cyrstalLogo from "public/skills/crystal.png";     
import vsCommunity from "public/skills/vsCommunity.png";
import photoshopLogo from "public/skills/pshop.png";     
import canvaLogo from "public/skills/canvaa.png";  
import gunaLogo from "public/skills/gunapic.png";  
import figmaLogo from "public/skills/figma.png";
import notionLogo from "public/skills/notion.png";
import wordLogo from "public/skills/word.png";
import excelLogo from "public/skills/excel.png";
import powerLogo from "public/skills/powerpoint.png";





export const metadata: Metadata = {
    title: "Skills | Mark Dhel Villarama",
    description:
      "These are the Tech Stack Tools I use as a developer in designing, creating and establishing development projects.",
  };

  interface ItemProps {
    title: string;
    image: string | StaticImageData;
  }

  const Item = ({ title, image }: ItemProps) => (
    <li className="flex justify-center mt-4 mr-3 transition duration-300 ease-in-out rounded-2xl w-36 hover:-translate-y-1 hover:scale-105 animate__animated animate__fadeIn"
    >
      <a
        className="relative w-[4rem] min-w-[4rem] h-[4rem]"
      >
        <Image
          src={image}
          alt={title}
          className="object-center object-cover w-full h-full"
          fill
        />
      </a>
      <div className="grow flex justify-between gap-1 items-center">
        <div className="space-y-1">
          {/* Your content here */}
        </div>
      </div>
    </li>
  );
  
  
  

export default function Skills() {
  const categories = skills.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  return (
    <>
      <div className="flex flex-col gap-8 md:gap-12"> {/* Adjusted gap values */}
        <div className="flex flex-col gap-4 animate-in"> {/* Adjusted gap values */}
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
              My Tech Stack
            </h1>
            <p className="animate-in text-secondary">
              These are the Tech Stack Tools I use as a developer in designing, creating and establishing development projects.
            </p>
          </div>
        </div>

        {categories.map((category, index) => (
          <section
            className="flex flex-col gap-8 animate-in"
            key={index}
          >
            <h2 className="text-secondary text-center">{category}</h2>
            <ul className="grid grid-cols-5 flex flex-wrap justify-center gap-x-3 gap-y-2 animated-list"> {/* Added gap-x-5 for horizontal gap */} {/* Adjusted gap value */}
              {skills.map((item, index) => {
                if (item.category === category) {
                  return (
                    <Item
                      key={index}
                      title={item.name}
                      image={item.image}
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






  const skills = [
    {
        name: "HTML5",
        category: "Web Development",
        image: htmlLogo   
      },
      
      {
        name: "CSS3",
        category: "Web Development",
        image: cssLogo   
      },
      {
        name: "JavaScript",
        category: "Web Development",
        image: javascriptLogo   
      },
      {
        name: "Bootstrap",
        category: "Web Development",
        image: bootstrapLogo   
      },
      {
        name: "ReactJS",
        category: "Web Development",
        image: reactjsLogo   
      },
      {
        name: "TypeScript",
        category: "Web Development",
        image: typescriptLogo   
      },
      {
        name: "Tailwind CSS",
        category: "Web Development",
        image: tailwindLogo   
      },
      {
        name: "NextJS",
        category: "Web Development",
        image: nextjsLogo
      }, 
      {
        name: "NodeJS",
        category: "Web Development",
        image: nodejsLogo
      },
      {
        name: "Git",
        category: "Web Development",
        image: gitLogo
      },
      {
        name: "NPM",
        category: "Web Development",
        image: npmLogo
      },
      {
        name: "VBNET",
        category: "Software Development",
        image: vbnetLogo
      }, 
      {
        name: "C#",
        category: "Software Development",
        image: csharpLogo
      }, 
      {
        name: "Sql Server",
        category: "Software Development",
        image: sqlServerLogo
      },
      {
        name: "Crystal Report",
        category: "Software Development",
        image: cyrstalLogo
      },
      {
        name: "Guna",
        category: "Software Development",
        image: gunaLogo
      },      
      {
        name: "Photoshop",
        category: "Technologies",
        image: photoshopLogo
      }, 
      {
        name: "Canva",
        category: "Technologies",
        image: canvaLogo
      }, 
      {
        name: "Figma",
        category: "Technologies",
        image: figmaLogo
      },
      {
        name: "MySQL",
        category: "Technologies",
        image: mysqlLogo
      },
      {
        name: "Xampp",
        category: "Technologies",
        image: "https://logosandtypes.com/wp-content/uploads/2020/08/xampp.svg"
      },
      {
        name: "Vercel",
        category: "Technologies",
        image: vercelLogo
      }, 
      {
        name: "Netlify",
        category: "Technologies",
        image: netlifyLogo
      },
      {
        name: "Visual Studio Code",
        category: "Technologies",
        image: vsCodeLogo
      },
      {
        name: "Visual Studio 2019",
        category: "Technologies",
        image: vsCommunity
      },
      {
        name: "Github",
        category: "Technologies",
        image: githubLogo
      },
      {
        name: "Notion",
        category: "Technologies",
        image: notionLogo
      },
      {
        name: "Word",
        category: "Technologies",
        image: wordLogo
      },
      {
        name: "Excel",
        category: "Technologies",
        image: excelLogo
      },
      {
        name: "Powerpoint",
        category: "Technologies",
        image: powerLogo
      },
  ];

  
