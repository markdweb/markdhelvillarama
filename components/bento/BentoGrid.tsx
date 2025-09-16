import Link from "@/components/ui/Link";
import Youtube from "@/components/bento/Youtube";
import Instagram from "@/components/bento/Instagram";
import Resume from "@/components/bento/Resume";
import Github from "@/components/bento/Github";
import Linkedin from "@/components/bento/Linkedin";

export default function BentoGrid() {
    return (
        <>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-6">
            <Youtube />
            <Instagram />
            <Resume />
            <Github />
            <Linkedin />
          </div>
        </>
      );
}