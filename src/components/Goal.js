import React from "react";
import Image from "next/image";

function Goal() {
  return (
    <div className="rounded-xl text-wrap text-center flex flex-col space-y-5 items-center lg:flex-row lg:space-x-20 m-5 p-5">
      <span className="bg-green-100 p-5 rounded-md border-2 border-green-600 lg:w-2/5 transition-all duration-700 ease-in-out transform hover:scale-105 hover:bg-green-200">
        <p>
          We aim at enhancing market access for small and local farmers in
          Nigeria. The system provides a digital marketplace, market
          intelligence, and financial services tailored to the needs of
          smallholder farmers.
        </p>
      </span>
      <span>
        <Image
          src={"/agric.jpg"}
          width={500}
          height={300}
          alt="Agricultural marketplace"
          className="w-auto rounded-md transition-all duration-700 ease-in-out transform hover:scale-105"
        />
      </span>
      <span className="bg-green-600 p-5 rounded-md border-2 border-green-600 lg:w-2/5 transition-all duration-700 ease-in-out transform hover:scale-105 hover:bg-green-700">
        <p>
          We offer a user-friendly platform for farmers to sell their produce
          directly to buyers with real-time market data, ensuring fair prices,
          demand insights, and market forecasts.
        </p>
      </span>
    </div>
  );
}

export default Goal;
