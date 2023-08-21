import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Sidebar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div
      id="application-sidebar"
      className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700 hidden"
    >
      <div className="px-6">
        <Link
          className="flex-none text-xl font-semibold dark:text-white"
          href="/upload"
          aria-label="Brand"
        >
          BytesBank
        </Link>
      </div>

      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap mt-24 pt-11"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5">
          <li>
            <Link
              className={`flex items-center justify-center gap-x-2 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-blue-600 ${
                pathname === "/upload"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white"
              }`}
              href="/upload"
            >
              <i className={`bi bi-plus-circle`}></i>
              Upload
            </Link>
          </li>

          <li>
            <Link
              className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900  ${
                pathname === "/files"
                  ? "bg-gray-100 dark:bg-gray-900 dark:text-white"
                  : "dark:text-slate-400 dark:hover:text-slate-300"
              }`}
              href="/files"
            >
              <i className={`bi bi-file-earmark${ pathname === "/files" ? '-fill' : ''}`}></i>
              Files
            </Link>
          </li>

          <li>
            <Link
              className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900  ${
                pathname === "/starred"
                  ? "bg-gray-100 dark:bg-gray-900 dark:text-white"
                  : "dark:text-slate-400 dark:hover:text-slate-300"
              }`}
              href="/starred"
            >
              <i className={`bi bi-star${ pathname === "/starred" ? '-fill' : ''}`}></i>
              Starred
            </Link>
          </li>

          <li>
            <Link
              className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900  ${
                pathname === "/removed"
                  ? "bg-gray-100 dark:bg-gray-900 dark:text-white"
                  : "dark:text-slate-400 dark:hover:text-slate-300"
              }`}
              href="/removed"
            >
              <i className={`bi bi-trash${ pathname === "/removed" ? '-fill' : ''}`}></i>
              Removed
            </Link>
          </li>

          <li>
            <Link
              className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900  ${
                pathname === "/users"
                  ? "bg-gray-100 dark:bg-gray-900 dark:text-white"
                  : "dark:text-slate-400 dark:hover:text-slate-300"
              }`}
              href="/users"
            >
              <i className={`bi bi-people${ pathname === "/users" ? '-fill' : ''}`}></i>
              Users
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
