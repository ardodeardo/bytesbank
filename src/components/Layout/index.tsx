import React from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Header from "../Header";
import Sidebar from "../Sidebar";
import SidebarToggle from "../SidebarToggle";

import { ToastContainer } from "react-toastify";

interface Layout {
  children: React.ReactNode;
}

function Layout(props: Layout) {
  const { children } = props;

  return (
    <>
      <Header />
      <Sidebar />
      <SidebarToggle />

      <main className="mt-[71px]">
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
          {children}
        </div>
      </main>
      
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick={false}
        pauseOnHover={false}
        draggable={false}
        theme="colored"
      />
    </>
  );
}

export default Layout;
