// components/layout/Layout.tsx
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
