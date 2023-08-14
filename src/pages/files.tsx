import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import Dropdown from "@/components/Dropdown";
import Card from "@/components/Card";
import DetailSidebar from "@/components/Sidebar/detail";
import { files } from "@/constants/content";
import { ICard } from "@/interfaces/card";
import FsLightbox from "fslightbox-react";
import { sortBy } from "lodash";
// import { v4 as uuidv4 } from "uuid";

export default function Files() {
  const [fileList, setFileList] = useState<ICard[]>([]);
  const [filterBy, setFilterBy] = useState<string>("");
  const [orderBy, setOrderBy] = useState<string>("name");
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
    setFileList(files);
    // return () => {
    //   second
    // }
  }, []);

  useEffect(() => {
    if (sidebarDetail !== true) {
      setSidebarDetail(true);
    }
  }, [selected]);

  const handleOrderDirection = () => {
    const order = orderDirection === "asc" ? "desc" : "asc";

    setOrderDirection(order);
  };

  const handleFilterBy = (value: string) => setFilterBy(value);

  const handleSortBy = (value: string) => setOrderBy(value);

  const toggleSidebarDetail = () => setSidebarDetail(!sidebarDetail);

  const handleSelected = (id: string) => {
    const select = fileList.filter((i) => i.id === id)[0];

    if (select) {
      setSelected(select);
    }
  };

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

  const compiledList = () => {
    let compiled = [];

    // filter by
    compiled =
      filterBy === ""
        ? fileList
        : fileList.filter(
            (item) =>
              item.type.toLocaleLowerCase() === filterBy.toLocaleLowerCase()
          );

    // order by
    compiled = sortBy(compiled, [
      (i: any) =>
        orderBy === "upload_date" ? new Date(i[orderBy]) : i[orderBy],
    ]);

    // order direction
    compiled = orderDirection === "desc" ? compiled.reverse() : compiled;

    return compiled;
  };

  const renderCards = () => {
    if (fileList.length > 0 && compiledList().length > 0) {
      const cards = [...compiledList()].map((item, index) => {
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
            action={() => handleSelected(id)}
            shared={null}
            active={selected.id === item.id ? true : false}
          />
        );
      });

      return (
        <div
          className={`grid gap-8 py-8
            ${
              sidebarDetail
                ? "grid-cols-3 2xl:grid-cols-4"
                : "grid-cols-4 3xl:grid-cols-5"
            }`}
        >
          {cards}
        </div>
      );
    } else {
      return (
        <div className="w-full pt-[100px]">
          <div className="mx-auto">
            <img
              src="/image/bynotion/oc-browse.svg"
              alt="empty"
              className="w-36 2xl:w-48 mx-auto mb-5"
            />
          </div>
          <p className="text-sm text-gray-800 dark:text-gray-300 text-center">
            Start uploading files on the dashboard.
          </p>
        </div>
      );
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
                onSelect={(value: string) => handleFilterBy(value)}
                options={[
                  {
                    id: "qwer",
                    value: "",
                    name: "All",
                  },
                  {
                    id: "asdf",
                    value: "image",
                    name: "Image",
                  },
                  {
                    id: "klklkl",
                    value: "pdf",
                    name: "PDF",
                  },
                  {
                    id: "xcvbxv",
                    value: "ms word",
                    name: "Ms. Word",
                  },
                ]}
              />
            </div>
            <div className="flex items-center gap-3">
              <Dropdown
                position="right"
                onSelect={(param: string) => handleSortBy(param)}
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

          {renderCards()}
        </div>
      </div>

      {sidebarDetail && renderSidebarDetail()}

      {selected.id && (
        <FsLightbox
          toggler={lightbox}
          sources={[selected.url]}
          key={selected.id}
        />
      )}
    </Layout>
  );
}
