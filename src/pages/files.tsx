import { useState } from "react";
import Layout from "@/components/Layout";
import Dropdown from "@/components/Dropdown";
import Card from "@/components/Card";
import DetailSidebar from "@/components/Sidebar/detail";

export default function Files() {
  const [orderDirection, setOrderDirection] = useState("asc");
  const [orderBy, setOrderBy] = useState("");

  const files = [
    {
      id: "asdf",
      type: "image",
      url: "https://images.unsplash.com/photo-1610483178766-8092d96033f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Lego - Top Gun",
      upload_date: "27 July 2023, 10:44 am",
      size: "123.45 MB",
    },
    {
      id: "ghjk",
      type: "pdf",
      url: "https://images.unsplash.com/photo-1610483178766-8092d96033f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Javascript Eloquent",
      upload_date: "27 August 2023, 10:44 am",
      size: "123.45 MB",
    },
  ];

  const handleOrderDirection = () => {
    const order = orderDirection === "asc" ? "desc" : "asc";

    setOrderDirection(order);

    console.log(order);
  };

  const renderCards = () => {
    const cards = [...files, ...files, ...files, ...files].map(
      (item, index) => {
        const { id, type, url, name, upload_date, size } = item;

        const $id = id.concat(index.toString());

        return (
          <Card
            id={$id}
            type={type}
            url={url}
            name={name}
            upload_date={upload_date}
            size={size}
          />
        );
      }
    );

    return cards;
  };

  return (
    <Layout>
      <div className="mr-80">
        <div>
          <div>
            <p className="mb-2 text-sm font-semibold text-blue-600">
              Files & Images
            </p>
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
              Uploaded Files
            </h1>
          </div>

          {/* filter */}
          <div className="flex justify-between items-center">
            <div className="mt-5">
              <Dropdown
                position="left"
                options={[
                  {
                    id: "qwer",
                    value: "all",
                    name: "All",
                  },
                  {
                    id: "asdf",
                    value: "image",
                    name: "Image",
                  },
                  {
                    id: "asdf",
                    value: "pdf",
                    name: "PDF",
                  },
                ]}
              />
            </div>
            <div className="flex items-center gap-3">
              <Dropdown
                position="right"
                options={[
                  {
                    id: "asdf",
                    value: "name",
                    name: "Name",
                  },
                  {
                    id: "asdf",
                    value: "upload_date",
                    name: "Upload Date",
                  },
                ]}
              />
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-md dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                onClick={() => handleOrderDirection()}
              >
                {orderDirection === "asc" ? (
                  <i className="bi bi-arrow-up"></i>
                ) : (
                  <i className="bi bi-arrow-down"></i>
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 2xl:grid-cols-4 gap-8 py-8">{renderCards()}</div>
        </div>
      </div>
      <DetailSidebar></DetailSidebar>
    </Layout>
  );
}
