import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface AuthLayout {
  children: React.ReactNode;
}

function AuthLayout(props: AuthLayout) {
  const { children } = props;

  return (
    <>
      <main className="h-screen">
        <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
          <div className="w-full max-w-md mx-auto p-6">
            <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4 sm:p-7">
                {children}
              </div>
            </div>
          </div>
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

export default AuthLayout;
