import Header from "@/components/layout/Header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="main-layout flex-1">{children}</main>
    </div>
  );
};

export default MainLayout;
