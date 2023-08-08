import React from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Header from "../Header";
import Sidebar from "../Sidebar";
import SidebarToggle from "../SidebarToggle";

interface Layout {
  children: React.ReactNode;
}

function Layout(props: Layout) {
  const { children } = props;

  return (
    <main>
      <Header />
      <Sidebar />
      <SidebarToggle />

      <div className="flex">
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
          {children}
        </div>
        <div className="c-detail-bar sticky top-[71px] right-0 w-1/3 py-10 px-4 sm:px-6 md:px-8 bg-white">haii</div>
      </div>
    </main>
  )
}

export default Layout;
