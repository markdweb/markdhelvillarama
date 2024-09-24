import Card from "@/components/bento/CardTemplate";
import Link from "@/components/ui/Link";
import { FaFileAlt } from "react-icons/fa";

export default function Resume() {
  return (
    <Link
    href="./Villarama-MarkDhel_Resume.pdf"
    className="col-span-1 row-span-1 no-underline hidden md:block"
  >
    <Card className="flex aspect-square flex-col gap-1.5">
    <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-[#002060]">
      <FaFileAlt className="text-2xl text-white" />
    </div>
      <p className="text-secondary">Resume</p>
      <p className="line-clamp-2">Download Resume</p>
    </Card>
  </Link>
  );
}
