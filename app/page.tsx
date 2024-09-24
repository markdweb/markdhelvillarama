import Image from "next/image";
import Link from "@/components/ui/Link";
import { allPosts } from ".contentlayer/generated";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Avatar from "@/public/picProfile.png";
import PostList from "./blog/components/ui/PostList";
import Footer from "@/components/Footer";
import BentoGrid from "@/components/bento/BentoGrid";


export default async function Home() {
  const posts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    // 3 most recent
    .filter((_, i) => i < 3);

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
            Mark Dhel Villarama
          </h1>
        </div>
        
        <p
          className="max-w-lg leading-relaxed text-secondary"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Hi Im Mark Dhel a software engineer who loves building cool things with code.
          In addition I am specializes at backends and front end stuff.
          Currently learning UX/UI design too.
        </p>
        
      </div>  
      <div
        className="animate-in"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <BentoGrid />
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
