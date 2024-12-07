import React from "react";
import Space from "./Space";

function MarketPlaceHeader() {
  const categories = [
    { id: 1, name: "Fishery", options: "Fishries, Crabs, Oyesters" },
    { id: 2, name: "Tubers", options: "Yam, Potatoe, Cassava" },
    { id: 3, name: "Vegetables", options: "Carrots, Spinash, Cabbage" },
    { id: 4, name: "Livestock", options: "Goat, Cow, Chicken" },
  ];

  return (
    <div>
      <div>
        <span>
          <h5 className="font-bold">Search</h5>
          <Space size={80} axis="y" />
          <div className="flex rounded-lg border-primary border-2 mt-2 ">
            <input className="w-full p-3" type="search" placeholder="Search" />
            <span className="p-3 bg-secondary justify-items-end">🔍</span>
          </div>
        </span>

        <span>
          <h5 className="font-bold mb-2 text-center">Categories</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-secondary p-2 lg:p-5 rounded-lg place-items-center w-96 md:w-lvw lg:w-full">
            {categories.map((items) => (
              <div
                key={items.id}
                className=" border-b-2 border-green-600 p-2 lg:p-5 flex items-center w-full lg:mx-10"
              >
                <span>
                  <h5 className="font-bold">{items.name}</h5>
                  <h6>{items.options}</h6>
                </span>
                <span className="ml-10 font-extrabold">
                  {" "}
                  <button> &gt;</button>{" "}
                </span>
              </div>
            ))}
          </div>
        </span>
      </div>
    </div>
  );
}

export default MarketPlaceHeader;
