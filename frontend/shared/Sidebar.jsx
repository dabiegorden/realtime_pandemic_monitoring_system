"use client";

import React from "react";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="">
      {sidebarLinks.map((link) => {
        // active link
        const isActive = pathname == link.route;

        return (
          <div className="pt-4 px-4" key={link.name}>
            <Link
              href={link.route}
              key={link.id}
              className={cn(
                "flex gap-4 items-center px-4 py-2 rounded-lg justify-start text-white",
                { "bg-white text-black": isActive }
              )}
            >
              <span key={link.icon} className="text-[1.5rem]">
                {link.icon}
              </span>
              <span key={link.name} className="hidden lg:block">
                {link.name}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
