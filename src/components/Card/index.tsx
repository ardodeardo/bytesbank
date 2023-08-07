import React from "react";
import Image from "next/image";

interface Card {
  id: string;
  name: string;
  type: string;
  url: string;
  size: string;
  upload_date: string;
}

function Card(param: Card) {
  const { id, name, type, url, upload_date, size } = param;

  const renderThumbnail = (type: string) => {
    const thumbnail =
      type === "image" ? (
        <div className="aspect-w-4 aspect-h-2">
          <Image
            className="w-full h-full object-center object-cover rounded-t-xl"
            src={url}
            alt="Image Description"
            width={400}
            height={300}
          />
        </div>
      ) : (
        <div className="aspect-w-4 aspect-h-2">
          {/* <div className="flex items-end w-full h-full px-4 py-5 bg-red-600 rounded-t-xl">
            <span className="block text-2xl font-semibold text-white tracking-wider ml-3">PDF</span>
          </div> */}
          <Image
            className="w-full h-full object-center object-cover rounded-t-xl"
            src={url}
            alt="Image Description"
            width={400}
            height={300}
          />
        </div>
      );

    return thumbnail;
  };

  return (
    <div
      className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] cursor-pointer"
      key={name.concat(name).concat(`#${id}`)}
    >
      {renderThumbnail(type)}

      <div className="p-4 md:p-5">
        <h3 className="text-md font-bold text-gray-800 dark:text-white">
          {name}
        </h3>
        <time className="block mt-2 text-sm text-gray-500 dark:text-gray-500">
          {upload_date}
        </time>
      </div>
      <div className="p-4 md:p-5 bg-gray-100 rounded-b-xl">
        <span className="block text-gray-800 dark:text-gray-400 font-bold">
          {size}
        </span>
      </div>
    </div>
  );
}

export default Card;
