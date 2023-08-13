import React from "react";
import Link from "next/link";

interface Breadcrumb {
    current: string;
}

function Breadcrumb(param: Breadcrumb) {
  const { current } = param;

  return (
    <ol
      className="flex items-center whitespace-nowrap min-w-0 mb-2"
      aria-label="Breadcrumb"
    >
      <li className="text-sm">
        <Link
          className="flex items-center text-blue-500 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-300"
          href="/"
        >
          Home
          <svg
            className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-blue-500 dark:text-blue-200"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </li>
      <li
        className="text-sm font-semibold text-blue-600 dark:text-blue-300 truncate"
        aria-current="page"
      >
        { current }
      </li>
    </ol>
  );
}

export default Breadcrumb;
