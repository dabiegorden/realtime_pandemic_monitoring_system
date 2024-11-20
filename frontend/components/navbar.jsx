"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo, navbarLinks } from "@/constants";
import { IoMenuSharp } from "react-icons/io5";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const decodeToken = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (error) {
      console.error("Error decoding token", error);
      return null;
    }
  };

  const checkAndSetUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decodeToken(token);
      setUser(decodedToken);
    }
  };

  useEffect(() => {
    // Initial check on mount
    checkAndSetUser();

    // Listen for storage events to update user info across tabs/windows
    const handleStorageChange = (e) => {
      if (e.key === "token") {
        checkAndSetUser();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/sign-in");
  };

  return (
    <nav className="bg-white flex justify-between items-center px-[4rem] py-[1.2rem] fixed w-full z-10 400:px-[2rem] left-0 right-0 top-0">
      {Logo.map((logo) => (
        <div
          className="flex items-center text-[1.2rem] text-black"
          key={logo.name}
        >
          <Link href={logo.route} key={logo.name}>
            {/* Uncomment and use Image if needed */}
            {/* <Image src={logo.imgUrl} width={100} height={100} alt="Logo" /> */}
          </Link>
          <Link href={logo.route} key={logo.id} className="font-bold text-xl">
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
                "flex gap-4 items-center px-4 py-2 rounded-lg justify-start",
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
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span>{user?.name}</span>
              <span>{user?.email}</span>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Button onClick={() => router.push("/sign-in")}>Sign In</Button>
          )}
        </div>

        {/* Mobile screen */}
        <div className="hidden 576:block">
          <Sheet>
            <SheetTrigger asChild>
              <IoMenuSharp className="text-xl font-bold cursor-pointer" />
            </SheetTrigger>

            <SheetContent side="right" className="border-none bg-white">
              <SheetHeader>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex justify-between items-center gap-2 "
                >
                  <input
                    className="input__nav"
                    type="text"
                    placeholder="Search for pandemics..."
                  />
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
                    <SheetClose asChild key={link.id}>
                      <Link
                        href={link.route}
                        className={cn(
                          "flex gap-2 items-center px-8 py-2 text-[1.1rem] rounded-lg justify-start ",
                          {
                            "bg-orange-600 text-white": isActive,
                          }
                        )}
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
              <Link
                href={"/sign-in"}
                className="bg-orange-600 py-2 px-4 rounded-md text-white text-[1.1rem] cursor-pointer hover:bg-gradient-to-br hover:from-indigo-500 hover:to-orange-500 mt-8 flex items-center justify-center"
              >
                Sign In
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
