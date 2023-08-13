import React, { useState, useEffect } from "react";
import { ChevronDown } from "@/components/Icon";

interface Options {
  id: string;
  value: string;
  name: string;
}

interface Dropdown {
  // selected: number;
  position: string;
  options: Array<Options>;
}

function Dropdown(param: Dropdown) {
  const { position, options } = param;

  const [selected, setSelected] = useState({ ...options[0] });

  const handleSelected = (param: Options) => {
    setSelected(param);
  };

  const renderOptions = (list: Array<Options>) => {
    const items = list.map((item, index) => {
      const { id, value, name } = item;

      return (
        <li
          className={`
            flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm 
            text-gray-800 hover:bg-gray-100 
            focus:ring-2 focus:ring-blue-500 
            dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300
            hover:cursor-pointer`}
          key={value}
          onClick={() => handleSelected(options[index])}
        >
          {name}
        </li>
      );
    });

    return items;
  };

  return (
    <div
      className={`hs-dropdown relative inline-flex ${
        position === "right"
          ? "[--placement:bottom-right]"
          : "[--placement:bottom-left]"
      } `}
    >
      <button
        type="button"
        className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      >
        {selected.name}
        <ChevronDown />
      </button>

      <ol
        className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-auto hidden z-10 mt-2 min-w-[10rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
        aria-labelledby="hs-dropdown-default"
      >
        {renderOptions(options)}
      </ol>
    </div>
  );
}

export default Dropdown;
