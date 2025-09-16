"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { allProjects, Project } from ".contentlayer/generated";
import Halo from "@/components/ui/Halo";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { metadata } from "./metadata";
import Footer from "@/components/Footer";

const projectsPerPage = 5;

export default function Blog() {
  const projects = allProjects;
  const [currentPage, setCurrentPage] = useState(1);
  const totalProjects = projects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);
  

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1) {
      pageNumber = 1;
    }
    if (pageNumber > totalPages) {
      pageNumber = totalPages;
    }
    setCurrentPage(pageNumber);
  };

  const startProject = (currentPage - 1) * projectsPerPage;
  const endProject = Math.min(currentPage * projectsPerPage, totalProjects);
  const paginatedProjects = projects.slice(startProject, endProject);

  const [showAllProjects, setShowAllProjects] = useState(false);

// Function to toggle between paginated and all projects
  const toggleShowAllProjects = () => {
  setShowAllProjects(!showAllProjects);
};

// Render projects based on whether to show all or paginate
  const renderProjects = showAllProjects ? projects : paginatedProjects;
  

  return (
    <div className="max-w-[700px] mx-auto">
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
              Projects
            </h1>
            <p
              className="text-secondary animate-in"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Here are some of the projects I&apos;ve worked on.
            </p>       
          </div>
        </div>
        
        <ul
          className="animate-in flex flex-col animated-list"
          style={{ "--index": 3 } as React.CSSProperties}       
        >
        <div className="flex items-center">
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Total Projects: {projects.length} 
        </p>
  
        {/* Show All button */}
        <button
          className={`${
            showAllProjects ? "bg-zinc-900 text-white" : "text-dark-500"
          } flex items-center justify-center font-semibold px-1 py-1 rounded-md ml-2 ml-auto`}
          onClick={toggleShowAllProjects}
          title="Show All"
        >
          <ListBulletIcon className="h-8 w-8" />
        </button>
        </div>
          {renderProjects.length === 0 && <p>No projects found</p>}
          {renderProjects.map((project, i) => (
            
            <li
              key={project.slug}
              className={clsx(
                "py-6 flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity first:pt-0 last:pb-0"
              )}
              
            >
              
              <Link
                href={`/projects/${project.slug}`}
                className="w-full md:w-2/5 aspect-video bg-tertiary rounded-lg border border-secondary overflow-clip select-none"
              >
                <Halo strength={10}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full "
                  />
                </Halo>
              </Link>
              <div className="w-full md:w-3/5 space-y-2">
                <div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-primary font-medium hover:underline"
                  >
                    {project.title}
                  </Link>
                  <time className="text-secondary"> · {project.time}</time>
                  
                </div>
                {project.category && (
                    <>
                      <strong className="text-tertiary"> {project.category}</strong>
                    </>
                )}
                <p className="line-clamp-3 text-tertiary">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Pagination section */}
        <div className="flex items-center justify-center gap-4">
         
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white-900 hover:bg-gray-900/10 active:bg-gray-900/20 flex items-center gap-2"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || showAllProjects}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`${
                  currentPage === index + 1
                    ? "bg-zinc-900 text-white"
                    : "text-dark-500"
                } font-semibold px-3 py-2 rounded-md`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
             
          </div>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white-900 hover:bg-gray-900/10 active:bg-gray-900/20 flex items-center gap-2"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || showAllProjects}
          >
            Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}


