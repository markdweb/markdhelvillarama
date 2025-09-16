"use client";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";

import NavLink from "@/components/ui/NavLink";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Uses", href: "/uses" },
  { label: "Blog", href: "/blog" },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic sub-pages

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="shrink-0 text-primary">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"  
            version="1.2"
          >
            <defs>
              <clipPath id="clip1">
                <path d="M 2.5,10.5 C 4.28801,10.2148 5.95467,10.5481 7.5,11.5C 8.17427,13.5165 9.34094,15.1832 11,16.5C 13.2378,10.9265 17.4045,8.92649 23.5,10.5C 24.7696,20.204 26.4363,20.5373 28.5,11.5C 29.6888,10.5713 31.0222,10.238 32.5,10.5C 31.3073,14.9106 29.8073,19.2439 28,23.5C 26.6439,24.3802 25.1439,24.7135 23.5,24.5C 22.3073,20.0894 20.8073,15.7561 19,11.5C 18.501,15.8206 18.3343,20.1539 18.5,24.5C 17.1667,24.5 15.8333,24.5 14.5,24.5C 14.6621,22.4727 14.4955,20.4727 14,18.5C 11.7752,22.4621 9.44182,22.4621 7,18.5C 6.50454,20.4727 6.33788,22.4727 6.5,24.5C 5.16667,24.5 3.83333,24.5 2.5,24.5C 2.5,19.8333 2.5,15.1667 2.5,10.5 Z" />
              </clipPath>
            </defs>
            <g id="surface1">
              <g clipPath="url(#clip1)" clipRule="nonzero">
                <path
                  fill="currentColor"
                  d="M 2.5,10.5 C 4.28801,10.2148 5.95467,10.5481 7.5,11.5C 8.17427,13.5165 9.34094,15.1832 11,16.5C 13.2378,10.9265 17.4045,8.92649 23.5,10.5C 24.7696,20.204 26.4363,20.5373 28.5,11.5C 29.6888,10.5713 31.0222,10.238 32.5,10.5C 31.3073,14.9106 29.8073,19.2439 28,23.5C 26.6439,24.3802 25.1439,24.7135 23.5,24.5C 22.3073,20.0894 20.8073,15.7561 19,11.5C 18.501,15.8206 18.3343,20.1539 18.5,24.5C 17.1667,24.5 15.8333,24.5 14.5,24.5C 14.6621,22.4727 14.4955,20.4727 14,18.5C 11.7752,22.4621 9.44182,22.4621 7,18.5C 6.50454,20.4727 6.33788,22.4727 6.5,24.5C 5.16667,24.5 3.83333,24.5 2.5,24.5C 2.5,19.8333 2.5,15.1667 2.5,10.5 Z"
                />
              </g>
            </g>
          </svg>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex h-8 w-8 items-center justify-center md:ml-0">
          <ThemeSwitcher />
        </div>

        <Popover className="relative md:hidden">
          <Popover.Button className="flex h-8 w-8 items-center justify-center rounded-lg text-secondary">
            <Bars3Icon className="h-5 w-5 cursor-pointer text-secondary transition-colors hover:text-primary" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-auto rounded-xl bg-contrast p-2 text-base shadow-md focus:outline-none sm:text-sm">
              <div className="grid">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "rounded-md px-4 py-2 transition-colors hover:text-primary",
                      pathname === link.href
                        ? "bg-secondary font-medium"
                        : "font-normal",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </nav>
    </header>
  );
}
