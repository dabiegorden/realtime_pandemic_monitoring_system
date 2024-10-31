import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
