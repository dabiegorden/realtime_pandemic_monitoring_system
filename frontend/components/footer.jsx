import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8 bg-white pt-4">
      <div className="px-[4rem]">
        {/* <div className="line"></div> */}
        <div className="grid grid-cols-4 pb-4 400:grid-cols-2 400:gap-4">
          {/* About section */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[#222] font-bold text-[1.2rem]">About</h1>
            <Link
              className="text-[#222] text-[0.9rem] hover:text-orange-600 hover:duration-300"
              href={"/"}
            >
              About Us
            </Link>
            <Link
              className="text-[#222] text-[0.9rem] hover:text-orange-600 hover:duration-300"
              href={"/"}
            >
              Our Mission
            </Link>
          </div>
          {/* Resources Section  */}
          <div className="flex flex-col gap-4 400:mb-4">
            <h1 className="text-[#222] font-bold text-[1.2rem]">Resources</h1>
            <Link
              className="text-[#222] text-[0.9rem] hover:text-orange-600 hover:duration-300"
              href={"/"}
            >
              Documentation
            </Link>
            <Link
              className="text-[#222] text-[0.9rem] hover:text-orange-600 hover:duration-300"
              href={"/"}
            >
              API
            </Link>
            {/* <Link
              className="text-[#222] text-[0.9rem] hover:text-orange-600 hover:duration-300"
              href={"/"}
            >
              FAQ
            </Link> */}
          </div>
          {/*  Legal Section */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[#222] font-bold text-[1.2rem]">Legal</h1>
            <Link
              className="text-[#222] text-[0.9rem] hover:text-orange-600 hover:duration-300"
              href={"/"}
            >
              Privacy Policy
            </Link>
            <Link
              className="text-[#222] text-[0.9rem] hover:text-orange-600 hover:duration-300"
              href={"/"}
            >
              Terms of Service
            </Link>
            {/* <Link
              className="text-[#222] text-[0.9rem] hover:text-orange-600 hover:duration-300"
              href={"/"}
            >
              Disclaimer
            </Link> */}
          </div>
          {/*  Contact Section*/}
          <div className="flex flex-col gap-4">
            <h1 className="text-[#222] font-bold text-[1.2rem]">Contact</h1>
            <Link
              className="text-[#222] text-[0.9rem] hover:text-orange-600 hover:duration-300"
              href={"/"}
            >
              Contact Us
            </Link>
            <Link
              className="text-[#222] text-[0.9rem] hover:text-orange-600 hover:duration-300"
              href={"/"}
            >
              Email Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
