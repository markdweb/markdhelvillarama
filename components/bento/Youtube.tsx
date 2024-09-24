import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import Link from "@/components/ui/Link";
import Card from "@/components/bento/CardTemplate";

// Define interface for video data
interface Video {
  url: string;
  thumbnail: string;
  title: string;
}

const additionalVideos: Video[] = [
  {
    url: "https://youtu.be/0qpZ-LyTDVk?si=1EJt9QRd0W6bxp3n",
    thumbnail: "/thumbnail/video1.png",
    title: "Video Title 1"
  },
  {
    url: "https://youtu.be/9AZ45F1R7Og?si=MM_mb31dxy6-2UJ_",
    thumbnail: "/thumbnail/video2.jpg",
    title: "Video Title 2"
  }
];

export default function YouTube({ videos }: { videos?: Video[] }) {
  // Check if videos is defined and is an array
  const allVideos: Video[] = videos && Array.isArray(videos) ? [...videos, ...additionalVideos] : additionalVideos;

  return (
    <Card className="col-span-2 row-span-1 flex justify-between gap-6">
      <div className="flex flex-col gap-1.5">
        <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-[#FF0000]">
          <FaYoutube className="text-xl text-white" />
        </div>
        <p className="text-secondary">@markdhelweb</p>
        <Link
          className="mt-auto flex items-center gap-1.5 rounded-full bg-tertiary px-4 py-1.5 text-sm no-underline"
          href="https://youtube.com/@markdhelweb?sub_confirmation=1"
        >
          <span className="font-medium text-primary">Subscribe</span>
        </Link>
      </div>
      <ul className="animated-list grid w-full grid-cols-2 grid-rows-2 gap-3">
        {allVideos.map((video, index) => (
          <Link
            href={video.url}
            key={index}
            className="relative col-span-1 row-span-1 overflow-hidden rounded-lg border border-secondary transition-opacity"
          >
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              quality={100}
              className="object-cover"
            />
          </Link>
        ))}
      </ul>
    </Card>
  );
}
