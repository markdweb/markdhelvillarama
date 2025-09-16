import { allProjects, Post as PostType } from ".contentlayer/generated";
import Image from "next/image";
import Mdx from "@/app/blog/components/ui/MdxWrapper";
import PostList from "@/app/blog/components/ui/PostList";
import Tags from "@/components/Tags";
import Link from "@/components/ui/Link";
import { formatDate } from "lib/formatdate";



type PostProps = {
  post: PostType;
  related: PostType[];
};



export default function Project({ params }: { params: any }) {
  // const post = allPosts.find((post) => post.slug === params.slug);
  const post = allProjects.find((post) => post.slug === params.slug);

  // Check if there is no post or the project is under maintenance
  const UnderMaintenance = !post || (post.url && post.url.includes("/undermaintenance"));

  if (UnderMaintenance) {
   // Redirect to the under maintenance page or handle it as needed
   return (
     <div className="flex flex-col items-center justify-center">
     {/* You can add an image here  */}
     <Image
        src="/404notfound.png"
        alt="Under Maintenance"
        layout="responsive"
        width={700}
        height={1276} // Adjust the height based on your image dimensions
      />
 
     <h1 className="text-xl font-bold mb-2">Under Maintenance</h1>
     {/* ... */}
      <p className="text-secondary">
        Sorry, the file is not yet uploaded, I apologize for the inconvenience. I&apos;ll let you know as soon as it&apos;s available. In the meantime, you can check back here or follow me on social media for updates.
      </p>
      {/* ... */}

   </div>
   );
 }

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div className="flex animate-in flex-col gap-3">
          <div className="flex gap-3 text-secondary">
            <p>{post.time}</p>
            <span>&middot;</span>
            {post.category && (
              <>

                <span>{post.category}</span>
              </>
            )}

            {post.url && (
              <>
                <span>&middot;</span>
                <Link href={post.url} className="hover:text-primary">
                  Visit Project
                </Link>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
            {post.title}
          </h1>
          <p
            className="animate-in text-lg leading-tight text-secondary md:text-xl"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {post.description}
          </p>
        </div>
        
        <div className="h-12" />
        <div
          className="project prose animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Mdx code={post.body.code} />
        </div>
      </article>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <h2>Tags</h2>
          <div className="flex flex-wrap gap-3 ">
            {post.tags.map((tag: string) => (
              <div
                key={tag}
                className="whitespace-nowrap rounded-lg bg-secondary px-4 py-1.5 text-sm text-secondary"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2>Contact</h2>
          <p className="max-w-lg text-secondary">
            Need more project details, or interested in working together? Reach
            out to me directly at{" "}
            <a href="mailto:markdhel.villarama29@gmail.com" className="text-primary underline">
              contact@me
            </a>
            . I&apos;d be happy to connect!{" "}
          </p>
        </div>

        <Link href="/projects" className="text-primary underline">
          ← All Projects
        </Link>
      </div>

      <div />
    </div>
  );
}
