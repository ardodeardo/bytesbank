import React from "react";
import Image from "next/image";
import * as dayjs from "dayjs";

import { ICard } from "@/interfaces/card";

function Card(param: ICard) {
  const {
    name,
    type,
    url,
    upload_date,
    uploader,
    size,
    action,
    shared,
    active,
  } = param;

  const renderThumbnail = (type: string) => {
    const thumbnail =
      type === "image" ? (
        <div className="aspect-w-4 aspect-h-2">
          <Image
            className="w-full h-full object-center object-cover rounded-t-xl"
            src={url}
            alt={name}
            width={400}
            height={300}
          />
        </div>
      ) : (
        <div className="aspect-w-4 aspect-h-2">
          <div className="flex items-end w-full h-full px-6 py-4 bg-red-600 rounded-t-xl">
            <i className="bi bi-filetype-pdf text-white text-[48px] 2xl:text-[64px]"></i>
          </div>
        </div>
      );

    return thumbnail;
  };

  return (
    <div
      className={`flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-700 dark:border-gray-700 dark:shadow-slate-700/[.7] cursor-pointer hover:border-blue-600 dark:hover:border-blue-300 ${
        active && "border-blue-600 dark:border-blue-300"
      }`}
      onClick={() => action && action()}
    >
      {renderThumbnail(type)}

      <div className="p-4 md:p-5">
        <h3 className="text-md font-bold text-gray-800 dark:text-white">
          {name}
        </h3>
        <time className="block mt-2 text-sm text-gray-500 dark:text-white">
          {dayjs(upload_date).format("D MMMM YYYY")}
        </time>
      </div>
      <div className="flex justify-between p-4 md:p-5 bg-gray-100 dark:bg-gray-800 rounded-b-xl">
        <span className="block text-gray-800 dark:text-white font-bold">
          {size}
        </span>
        <div>
          <div className="hs-tooltip inline-block [--placement:bottom]">
            <button type="button" className="hs-tooltip-toggle">
              <Image
                className="w-8 h-8 rounded-full"
                src={`https://ui-avatars.com/api/?name=${uploader}&bold=true&background=2563eb&color=fff`}
                alt="Image Description"
                width={100}
                height={100}
              />
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                role="tooltip"
              >
                {uploader}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
