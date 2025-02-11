import Link from "@/components/ui/Link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "404 | Mark Dhel Villarama",
  description: "Uh oh! This page does not exist",
};

const Custom404 = (): JSX.Element => (
  <div className="flex flex-col items-center justify-center h-screen">
    <Image
        src="/404notfound.png"
        alt="Not Found"
        layout="responsive"
        width={700}
        height={1276} // Adjust the height based on your image dimensions
      />
    <h1 className="text-xl font-bold mb-2">404 - Page not found</h1>
    <p className="text-secondary">
      Uh oh! This page does not exist, maybe you clicked an old link or
      misspelled. Please try again…
    </p>
    <div className="h-4" />
    <Link href="/" underline>
      <button className="bg-black text-white rounded-md px-4 py-2 transition duration-300">
        Return home
      </button>
    </Link>
  </div>
);

export default Custom404;
