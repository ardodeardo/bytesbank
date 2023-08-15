import { v4 as uuidv4 } from "uuid";

const sidebar = {
  detail: {
    actions: [
      {
        title: "Download",
        icon: "download",
      },
      {
        title: "Copy Link",
        icon: "link-45deg",
      },
      {
        title: "Favorite",
        icon: "star",
      },
      {
        title: "Delete",
        icon: "trash",
      },
    ],
  },
};

const files = [
  {
    id: uuidv4(),
    type: "image",
    url: "https://images.unsplash.com/photo-1610483178766-8092d96033f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Lego - Top Gun",
    upload_date: "Mon Aug 14 2023 00:00:00 GMT+0700 (Western Indonesia Time)",
    uploader: "Xander Devon",
    size: "123.45",
    dimension: "3840 x 2160",
    deleted: false,
    shared: [],
  },
  {
    id: uuidv4(),
    type: "PDF",
    url: "https://pagespeed.web.dev/analysis/https-nextjs-org/jhzkpiin0r?form_factor=desktop",
    name: "Javascript Eloquent",
    upload_date: "Thu Sep 14 2023 00:00:00 GMT+0700 (Western Indonesia Time)",
    uploader: "Devon Xander",
    size: "123.45",
    dimension: null,
    deleted: false,
    shared: [],
  },
];

export { sidebar, files };
