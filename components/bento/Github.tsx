import Card from "@/components/bento/CardTemplate";
import Link from "@/components/ui/Link";
import { FaGithub } from "react-icons/fa";

export default function Github() {
  return (
    <Link
      href="https://github.com/markdhelwebb"
      className="col-span-1 row-span-1 no-underline hidden md:block"
    >
      <Card className="flex aspect-square flex-col gap-1.5">
      <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-[#000000]">
        <FaGithub className="text-2xl text-white" />
      </div>
        <p className="text-secondary">Github</p>
        <p className="line-clamp-2">Just added my Github projects!</p>
      </Card>
    </Link>
  );
}
