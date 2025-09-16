import Image from "next/image";
import type { Project } from ".contentlayer/generated";
import Link from "@/components/ui/Link";
import Halo from "@/components/ui/Halo";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="animated-list flex snap-x snap-mandatory grid grid-cols-1 md:grid-cols-2 flex-nowrap gap-9 overflow-x-scroll md:overflow-auto">
      {/* Display the first 3 pinned projects */}
      {projects.slice(0, 3).map((project) => (
        <li
          key={project.slug}
          className="col-span-1 min-w-72 snap-start transition-opacity pinned" // Add a "pinned" class for styling
        >
          <Link href={`/projects/${project.slug}`} className="space-y-4">
            <div className="aspect-video overflow-hidden rounded-md bg-secondary">
              <Halo strength={10}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="h-full w-full object-cover"
                />
              </Halo>
            </div>
            <div className="space-y-1">
              <p className="font-medium leading-tight">{project.title}</p>
              <p className="text-secondary">{project.description}</p>
            </div>
          </Link>
        </li>
      ))}

      {/* Display remaining projects after the pinned ones */}
      {projects.slice(3).map((project) => (
        <li
          key={project.slug}
          className="col-span-1 min-w-72 snap-start transition-opacity"
        >
          <Link href={`/projects/${project.slug}`} className="space-y-4">
            <div className="aspect-video overflow-hidden rounded-md bg-secondary">
              <Halo strength={10}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="h-full w-full object-cover"
                />
              </Halo>
            </div>
            <div className="space-y-1">
              <p className="font-medium leading-tight">{project.title}</p>
              <p className="text-secondary">{project.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
