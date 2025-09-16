import Image from "next/image";
import Link from "@/components/ui/Link";
import { allPosts, allProjects } from ".contentlayer/generated";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Avatar from "@/public/picProfile.png";
import PostList from "./blog/components/ui/PostList";
import Footer from "@/components/Footer";
import ProjectList from "./projects/components/ProjectList";

export default async function Home() {
  // Sorting posts by published date and selecting the 3 most recent
  const posts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .filter((_, i) => i < 3);

  // Fetch or use imported projects data and limit to 4
  const projects = allProjects.slice(0, 4);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8 animate-in">
        <div
          className="animate-in flex flex-col md:flex-row gap-6 text-secondary md:items-center"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={Avatar}
            width={85}
            height={85}
            alt="avatar"
            className="rounded-full bg-secondary"
          />
        </div>
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
            hey, Mark Dhel here!
          </h1>
        </div>

        <p
          className="max-w-lg leading-relaxed text-secondary"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Hi, I&apos;m Mark Dhel, a coder.
        </p>
        <div
          className="flex animate-in gap-3 text-sm"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Link
            href="./Villarama-MarkDhel_Resume.pdf"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Resume
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/markdhelvillarama/"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Linkedin
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            href="https://github.com/markdweb"
          >
            Github
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
        </div>
      </div>

     
      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <p className="tracking-tight text-secondary">Pinned Projects</p>
        <ProjectList projects={projects} />
      </div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <div className="space-y-4">
          <Link
            className="group flex items-center gap-2 text-xl font-semibold tracking-tight text-primary"
            href="/blog"
          >
            Latest Posts
            <ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
          </Link>
          <p className="max-w-lg leading-relaxed text-secondary">
            I occasionally write about programming, productivity, and more.
          </p>
        </div>
        <PostList posts={posts} /> 
      </div>

      <Footer />
    </div>
  );
}

