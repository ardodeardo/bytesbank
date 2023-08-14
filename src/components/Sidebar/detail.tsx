import React from "react";
import Image from "next/image";
import { sidebar } from "@/constants/content";
import { ICard } from "@/interfaces/card";
import { toast } from "react-toastify";
import * as dayjs from "dayjs";

import "react-toastify/dist/ReactToastify.css";

function DetailSidebar(param: ICard) {
  const actions = sidebar.detail.actions;

  const {
    id,
    type,
    url,
    name,
    upload_date,
    uploader,
    size,
    dimension,
    action,
  } = param;

  const handleFeedback = (param: string) => {
    switch (param) {
      case "Download":
        // handleDownload()
        toast(param);
        break;

      case "Copy Link":
        // handleCopy()
        toast(param);
        break;

      case "Save":
        // handleSave()
        toast(param);

        break;

      case "Delete":
        // handleDelete()
        toast(param);

        break;

      default:
        console.log("unknown action");
        break;
    }
  };

  const renderThumbnail = (type: string) => {
    const thumbnail =
      type === "image" ? (
        <span
          className="hover:cursor-pointer"
          onClick={() => action && action()}
        >
          <div className="aspect-w-4 aspect-h-3">
            <Image
              className="w-full h-full object-center object-cover rounded-xl"
              src={url}
              alt={name}
              width={400}
              height={300}
            />
          </div>
        </span>
      ) : (
        <a href={url} target="_blank" className="hover:cursor-pointer">
          <div className="aspect-w-4 aspect-h-3">
            <div className="flex items-end w-full h-full px-6 py-4 bg-red-600 rounded-xl">
              <i className="bi bi-filetype-pdf text-white text-[48px] 2xl:text-[64px]"></i>
            </div>
          </div>
        </a>
      );

    return thumbnail;
  };

  const renderActions = () => {
    const actionButtons = actions.map((item, index) => {
      const { title, icon } = item;

      return (
        <div
          className="hs-tooltip inline-block [--placement:bottom]"
          key={title.concat(index.toString())}
        >
          <button
            type="button"
            className="hs-tooltip-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-xl bg-gray-100 border border-transparent font-semibold text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 ring-offset-white focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-900 dark:text-white"
            onClick={() => handleFeedback(title)}
          >
            <i className={`bi bi-${icon}`}></i>
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
              role="tooltip"
            >
              {title}
            </span>
          </button>
        </div>
      );
    });

    return actionButtons;
  };

  return (
    <div className="c-detail-bar fixed top-[71px] right-0 w-80 py-8 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
      <div className="flex flex-col h-full px-8">
        {id ? (
          <>
            <div className="mb-3">{renderThumbnail(type)}</div>
            <div className="flex justify-between mb-6">{renderActions()}</div>

            <div className="flex flex-col flex-1 justify-between">
              <div>
                <div className="mb-10">
                  <h2 className="font-semibold">{name}</h2>
                </div>
                <div className="text-sm">
                  <h3 className="font-semibold mb-4">Uploaded by</h3>
                  <div className="flex items-center gap-3">
                    <Image
                      className="w-8 h-8 rounded-full"
                      src={`https://ui-avatars.com/api/?name=${uploader}&bold=true&background=2563eb&color=fff`}
                      alt="Image Description"
                      width={100}
                      height={100}
                    />
                    <span>{uploader}</span>
                  </div>
                </div>
              </div>
              <div className="text-sm">
                <h3 className="font-semibold mb-1">File Details</h3>
                <table className="table-fixed w-full border-separate border-spacing-y-2">
                  <tbody>
                    <tr>
                      <td className="text-gray-500">Type</td>
                      <td className="font-semibold text-right">{type}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500">Size</td>
                      <td className="font-semibold text-right">{size} MB</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500">Dimensions</td>
                      <td className="font-semibold text-right">
                        {dimension || "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-500">Uploaded</td>
                      <td className="font-semibold text-right">
                        {dayjs(upload_date).format("D MMM YYYY")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="pt-10 mb-5">
              <img
                src={`/image/bynotion/oc-browse-file.svg`}
                alt="empty"
                className="w-1/2 mx-auto"
              />
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-300">
              Select a file to view its details
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailSidebar;
