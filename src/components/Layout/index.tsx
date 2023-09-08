import React from "react";
import { useRouter } from "next/router";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Header from "../Header";
import Sidebar from "../Sidebar";
import SidebarToggle from "../SidebarToggle";
import Loader from "../Loader";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { useUser } from "@/hooks/user";

interface Layout {
  children: React.ReactNode;
}

function Layout(props: Layout) {
  const { children } = props;
  const { user, authenticated } = useUser();

  // if (!authenticated) {
  //   return <Loader></Loader>
  // }

  return (
    <>
      <Header user={user} />
      <Sidebar />
      <SidebarToggle />

      <main className="mt-[71px]">
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
          {authenticated && children}
        </div>
      </main>

      <ToastContainer
        position="bottom-left"
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
