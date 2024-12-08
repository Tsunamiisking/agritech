import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src="/images/loading.gif" width={40} height={40} alt="Loading..." className="w-40 h-40" unoptimized/>
    </div>
  );
};

export default Loading;

