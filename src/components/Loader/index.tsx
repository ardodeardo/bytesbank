import React from "react";

import Lottie from "./lottie";

function Loader() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen z-[100] bg-white">
      <div className="grid place-content-center w-full h-full">
        <Lottie></Lottie>
      </div>
    </div>
  );
}

export default Loader;
