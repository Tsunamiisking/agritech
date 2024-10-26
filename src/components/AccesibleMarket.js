import React from "react";

function AccesibleMarket() {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-5 items-center justify-items-center ">
        <div className="font-extrabold font-roboto text-2xl text-balance text-center text-green-600 my-3">
          <h3>An Accesible Market Place For Fresh Farm Produce</h3>
        </div>

        <div className="flex  m-auto   text-center space-x-10  rounded-xl bg-green-100  p-5 my-3 ">
          <span>
            <h1 className="font-extrabold text-2xl">15+</h1>
            <h5>Active State</h5>
          </span>
          <span>
            <h1 className="font-extrabold text-2xl">100%</h1>
            <h5> Guarantee</h5>
          </span>
          <span>
            <h1 className="font-extrabold text-2xl">100%</h1>
            <h5> Fee Based</h5>
          </span>
        </div>
      </div>
    </>
  );
}

export default AccesibleMarket;
