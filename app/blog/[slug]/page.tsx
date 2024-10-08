import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { allPosts, Post as PostType } from ".contentlayer/generated";

import Tags from "@/components/Tags";
import Link from "@/components/ui/Link";
import Mdx from "@/app/blog/components/ui/MdxWrapper";
import PostList from "@/app/blog/components/ui/PostList";
import { formatDate } from "lib/formatdate";

import Avatar from "@/public/picProfile.png";

type PostProps = {
  post: PostType;
  related: PostType[];
};

type Props = {
  params: {
    slug: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    throw new Error("Post not found");
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;

  const ogImage = `https://markdhelweb.vercel.app/${image}`;

  const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
    title: `${title} | Mark Dhel Villarama`,
    description,
    openGraph: {
      title: `${title} | Mark Dhel Villarama`,
      description,
      type: "article",
      publishedTime,
      url: `https://markdhelweb.vercel.app/blog/${title}`,
      images: [
        {
          url: `https://markdhelweb.vercel.app/api/og?title=${title}`,
          alt: title,
        },
      ],
      
    },
  };

  return metadata;
}

export default async function Post({ params }: { params: any }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div
          className="flex animate-in flex-col gap-8"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <div className="max-w-xl space-y-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
              {post.title}
            </h1>
            <p className="text-lg leading-tight text-secondary md:text-xl">
              {post.summary}
            </p>
          </div>

          <div className="flex max-w-none items-center gap-4">
            <Image
              src={Avatar}
              width={40}
              height={40}
              alt="avatar"
              className="rounded-full bg-secondary"
            />
            <div className="leading-tight">
              <p className="font-medium text-primary">Mark Dhel Villarama</p>
              <p className="text-secondary">
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                {post.updatedAt
                  ? `(Updated ${formatDate(post.updatedAt)})`
                  : ""}
              </p>
            </div>
          </div>
        </div>

        {post.image && (
          <>
            <div className="h-8" />
            <Image
              src={post.image}
              alt={`${post.title} post image`}
              width={700}
              height={350}
              className="-ml-6 w-[calc(100%+48px)] max-w-none animate-in md:rounded-lg lg:-ml-16 lg:w-[calc(100%+128px)]"
              style={{ "--index": 2 } as React.CSSProperties}
              priority
              quality={100}
            />
          </>
        )}

        <div className="h-16" />
        <div
          className="prose prose-neutral animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <Mdx code={post.body.code} />
        </div>
      </article>

      <Tags tags={post.tags} />

      <Link href="/blog">← All Blogs</Link>
    </div>
  );
}
