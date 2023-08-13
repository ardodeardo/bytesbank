import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import Dropdown from "@/components/Dropdown";
import Card from "@/components/Card";
import DetailSidebar from "@/components/Sidebar/detail";
import { files } from "@/constants/content";
import { ICard } from "@/interfaces/card";
import FsLightbox from "fslightbox-react";
// import { v4 as uuidv4 } from "uuid";

export default function Files() {
  const [fileList, setFileList] = useState<ICard[]>([]);
  const [orderBy, setOrderBy] = useState<string>("");
  const [orderDirection, setOrderDirection] = useState<string>("asc");
  const [sidebarDetail, setSidebarDetail] = useState<boolean>(true);
  const [lightbox, setLightbox] = useState<boolean>(false);
  const [selected, setSelected] = useState<ICard>({
    id: "",
    name: "",
    type: "",
    url: "",
    size: "",
    dimension: "",
    upload_date: "",
    uploader: "",
    shared: null,
  });

  // did mount
  useEffect(() => {
    // setFileList(files);

    // return () => {
    //   second
    // }
  }, []);

  const handleOrderDirection = () => {
    const order = orderDirection === "asc" ? "desc" : "asc";

    setOrderDirection(order);

    console.log(order);
  };

  const toggleSidebarDetail = () => setSidebarDetail(!sidebarDetail);

  const renderSidebarDetail = () => {
    const {
      id,
      type,
      url,
      name,
      upload_date,
      uploader,
      size,
      dimension,
      shared,
    } = selected;

    return (
      <DetailSidebar
        key={id}
        id={id}
        type={type}
        url={url}
        name={name}
        upload_date={upload_date}
        uploader={uploader}
        size={size}
        dimension={dimension}
        shared={shared}
        action={() => setLightbox(!lightbox)}
      ></DetailSidebar>
    );
  };

  const renderCards = () => {
    if (fileList.length > 0) {
      const cards = fileList.map((item, index) => {
        const {
          id,
          type,
          url,
          name,
          upload_date,
          uploader,
          size,
          dimension,
          shared,
        } = item;

        return (
          <Card
            key={id}
            id={id}
            type={type}
            url={url}
            name={name}
            upload_date={upload_date}
            uploader={uploader}
            size={size}
            dimension={dimension}
            action={() => setSelected(fileList[index])}
            shared={null}
          />
        );
      });

      return cards;
    } else {
      return (<div className="mx-auto">
        <img src="/image/bynotion/oc-browse.svg" alt="empty" />
      </div>)
    }
  };

  return (
    <Layout>
      <div className={sidebarDetail ? "mr-80" : ""}>
        <div>
          <div>
            <div className="flex justify-between">
              <div>
                <Breadcrumb current="Files" />
                <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
                  Uploaded Files
                </h1>
              </div>
              <div>
                <button
                  type="button"
                  className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-md dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                  onClick={() => toggleSidebarDetail()}
                >
                  <i className="bi bi-info-circle text-xl"></i>
                </button>
              </div>
            </div>
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

          <div
            className={`grid gap-8 py-8
            ${
              sidebarDetail
                ? "grid-cols-3 2xl:grid-cols-4"
                : "grid-cols-4 3xl:grid-cols-5"
            }`}
          >
            {renderCards()}
          </div>
        </div>
      </div>

      {sidebarDetail && renderSidebarDetail()}

      {selected.id && (
        <FsLightbox
          toggler={lightbox}
          sources={[selected.url]}
          key={selected}
        />
      )}
    </Layout>
  );
}
