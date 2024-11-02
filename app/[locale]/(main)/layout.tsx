import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <main className="main-layout">{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;
