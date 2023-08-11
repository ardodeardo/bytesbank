import React from "react";
import Image from "next/image";

function DetailSidebar() {
  const actions = [
    {
      title: "Download",
      icon: "download",
    },
    {
      title: "Copy Link",
      icon: "link-45deg",
    },
    {
      title: "Save",
      icon: "bookmark",
    },
    {
      title: "Delete",
      icon: "trash",
    },
  ];

  return (
    <div className="c-detail-bar fixed top-[71px] right-0 w-80 py-8 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
      <div className="flex flex-col h-full sm:px-6 md:px-8 px-4">
        <div className="aspect-w-4 aspect-h-3 mb-4">
          <Image
            className="w-full h-full object-center object-cover rounded-xl"
            src={
              "https://images.unsplash.com/photo-1610483178766-8092d96033f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            }
            alt="Image Description"
            width={400}
            height={300}
          />
        </div>
        <div className="flex justify-between mb-6">
          {actions.map((item) => {
            const { title, icon } = item;

            return (
              <div className="hs-tooltip inline-block [--placement:bottom]">
                <button
                  type="button"
                  className="hs-tooltip-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-xl bg-gray-100 border border-transparent font-semibold text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 ring-offset-white focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-900 dark:text-white"
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
          })}
        </div>

        <div className="flex flex-col flex-1 justify-between">
          <div>
            <div className="mb-5">
              <h2 className="font-semibold">Lego - Top Gun</h2>
              <small className="text-gray-500">JPG image - 124.56 MB</small>
            </div>
            <div className="mb-5 text-sm">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="text-sm">
            <h3 className="font-semibold mb-1">Information</h3>
            <table className="table-fixed w-full border-separate border-spacing-y-2">
              <tbody>
                <tr>
                  <td className="text-gray-500">Dimensions</td>
                  <td className="font-semibold text-right">3840 x 2160</td>
                </tr>
                <tr>
                  <td className="text-gray-500">Date</td>
                  <td className="font-semibold text-right">9 August 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSidebar;
