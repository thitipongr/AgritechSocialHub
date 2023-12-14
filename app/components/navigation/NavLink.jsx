"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const link = [
  { name: "Home", href: "/", icon: "", current: true },
  { name: "Chat", href: "/chat", icon: "", current: false },
];

const NavLink = () => {
  const pathname = usePathname();
  return (
    <>
      {link.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("px-4 py-2 text-xl text-slate-50", {
              "bg-emerald-900 rounded-full": pathname === link.href,
            })}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
      <Image
        width={500}
        height={500}
        class="inline-block h-8 w-8 rounded-full ring-2 ring-white flex ml-4 my-auto"
        src="https://avatars.githubusercontent.com/u/144009672"
        alt=""
      />
    </>
  );
};

export default NavLink;
