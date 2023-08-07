import React, { useState } from "react";
import Link from "next/link";

function Sidebar() {
  const [active, setActive] = useState("files");

  return (
    <div
      id="application-sidebar"
      className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700 hidden"
    >
      <div className="px-6">
        <a
          className="flex-none text-xl font-semibold dark:text-white"
          href="#"
          aria-label="Brand"
        >
          BytesBank
        </a>
      </div>

      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap mt-24 pt-11"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5">
          <li>
            <Link
              className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900  ${
                active === "home"
                  ? "bg-gray-100 dark:bg-gray-900 dark:text-white"
                  : "dark:text-slate-400 dark:hover:text-slate-300"
              }`}
              href="/"
            >
              <i className="bi bi-house"></i>
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900  ${
                active === "files"
                  ? "bg-gray-100 dark:bg-gray-900 dark:text-white"
                  : "dark:text-slate-400 dark:hover:text-slate-300"
              }`}
              href="/files"
            >
              <i className="bi bi-file-earmark"></i>
              Files
            </Link>
          </li>

          {/* <li className="hs-accordion" id="projects-accordion">
            <a
              className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
              href="javascript:;"
            >
              <i className="bi bi-grid-1x2"></i>
              Projects
              <svg
                className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
              <svg
                className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </a>

            <div
              id="users-accordion-child"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
            >
              <ul
                className="hs-accordion-group pl-3 pt-2"
                data-hs-accordion-always-open
              >
                <li className="hs-accordion" id="users-accordion-sub-1">
                  <a
                    className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                    href="javascript:;"
                  >
                    Sub Menu 1
                    <svg
                      className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </a>

                  <div
                    id="users-accordion-sub-1-child"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                  >
                    <ul className="pt-2 pl-2">
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                          href="javascript:;"
                        >
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                          href="javascript:;"
                        >
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                          href="javascript:;"
                        >
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hs-accordion" id="users-accordion-sub-2">
                  <a
                    className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                    href="javascript:;"
                  >
                    Sub Menu 2
                    <svg
                      className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </a>

                  <div
                    id="users-accordion-sub-2-child"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-2"
                  >
                    <ul className="pt-2 pl-2">
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                          href="javascript:;"
                        >
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                          href="javascript:;"
                        >
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                          href="javascript:;"
                        >
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;