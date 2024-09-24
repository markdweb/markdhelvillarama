import Card from "@/components/bento/CardTemplate";
import Link from "@/components/ui/Link";
import { FaLinkedin } from "react-icons/fa";

export default function Linkedin() {
  return (
    <Link
      href="https://www.linkedin.com/in/markdhelvillarama/"
      className="col-span-1 row-span-1 no-underline hidden md:block"
    >
      <Card className="flex aspect-square flex-col gap-1.5">
      <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-[#007AB5]">
        <FaLinkedin className="text-2xl text-white" />
      </div>
        <p className="text-secondary">Linkedin</p>
        <p className="line-clamp-2">Connect with me</p>
      </Card>
    </Link>
  );
}
