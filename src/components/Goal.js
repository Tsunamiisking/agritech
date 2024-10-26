import React from "react";
import Image from "next/image";

function Goal() {
  return (
    <>
      <div className="bg-green-100 rounded-xl text-wrap flex flex-col space-y-5 items-center lg:flex-row lg:space-x-20 m-5 p-5">
        <span>
          <Image src={"/agric.jpg"} width={300} height={500} alt="agric" />
        </span>
        <span>
          <p>
            We aim at enhancing market access for small and local farmers in
            Nigeria. The system provides a digital market place, market
            intelligence and financial service tailored to the need of small
            farmer holders
          </p>
        </span>
        <span>
          <p>
            We offer a user friendly for famers to sell thier produce directly
            to buyers with real time market data proving a fiar price, demand
            and market forcast
          </p>
        </span>
      </div>
    </>
  );
}

export default Goal;
