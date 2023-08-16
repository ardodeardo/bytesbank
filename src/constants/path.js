const PATH = {
  // staticImage: "https://res.cloudinary.com/demo/image/fetch/",
  staticImage: "",
  default: {
    image: "/images/defaultImage.jpg",
    cta: "https://www.figma.com/@ardodeardo",
  },
};

const rootApi = {
  auth: "/api/auth/",
};

const API_ROUTES = {
  signUp: rootApi.auth.concat("signup"),
  signIn: rootApi.auth.concat("signin"),
  signOut: rootApi.auth.concat("signout"),
  getUser: rootApi.auth.concat("getuser"),
};

const APP_ROUTES = {
  signUp: "/signup",
  signIn: "/",
  upload: "/upload",
};

export { PATH, API_ROUTES, APP_ROUTES };
