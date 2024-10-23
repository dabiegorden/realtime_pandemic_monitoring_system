"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo, navbarLinks } from "@/constants";

import { IoMenuSharp } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [form, setForm] = useState("");

  const pathname = usePathname();
  console.log(pathname);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="bg-white flex justify-between items-center px-[4rem] py-[1.2rem] fixed w-full z-10 400:px-[2rem]">
      {Logo.map((logo) => (
        <div
          className="flex items-center text-[1.2rem] text-black"
          key={logo.name}
        >
          <Link href={logo.route} key={logo.name}>
            {/* <Image src={logo.imgUrl} width={100} height={100} alt="Logo" /> */}
          </Link>
          <Link href={logo.route} key={logo.name} className="font-bold text-xl">
            {logo.name}
          </Link>
        </div>
      ))}

      <div className="flex gap-12 300:gap-2 576:hidden">
        {navbarLinks.map((link) => {
          const isActive =
            pathname == link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.name}
              className={cn(
                "flex gap-4 items-center px-4 py-2  rounded-lg justify-start",
                {
                  "bg-orange-600 text-white": isActive,
                }
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <Link
          href={"/"}
          className="bg bg-orange-600 py-2 px-4 rounded-md text-white text-[1.1rem] cursor-pointer hover:bg-gradient-to-br hover:from-indigo-500 hover:to-orange-500 576:hidden"
        >
          Login
        </Link>
        {/* mobile screen */}
        <div className="hidden 576:block">
          <Sheet>
            <SheetTrigger asChild>
              <IoMenuSharp className="text-xl font-bold cursor-pointer" />
            </SheetTrigger>
            {/* Later profile management */}
            <SheetContent side="right" className="border-none bg-white">
              <SheetHeader>
                <SheetTitle className="text-center mb-4 text-xl capitalize">
                  Search for pandemic updates
                </SheetTitle>
                <form
                  onSubmit={handleSubmit}
                  className="flex justify-between items-center gap-2 "
                >
                  <input type="text" placeholder="Search for pandemics..." />
                  <button
                    type="submit"
                    className="bg-orange-600 text-white py-2 px-4 rounded-md"
                  >
                    Search
                  </button>
                </form>
              </SheetHeader>
              <div className="flex flex-col justify-center items-center pt-8 gap-12 300:gap-4 ">
                {navbarLinks.map((link) => {
                  const isActive =
                    pathname == link.route ||
                    pathname.startsWith(`${link.route}/`);
                  return (
                    <Link
                      href={link.route}
                      key={link.name}
                      className={cn(
                        "flex gap-2 items-center px-8 py-2 text-[1.1rem] rounded-lg justify-start ",
                        {
                          "bg-orange-600 text-white": isActive,
                        }
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <Link
                href={"/"}
                className="bg bg-orange-600 py-2 px-4 rounded-md text-white text-[1.1rem] cursor-pointer hover:bg-gradient-to-br hover:from-indigo-500 hover:to-orange-500 mt-8 flex items-center justify-center"
              >
                Login
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
