import React from "react";

function Marketplace() {
  const categories = [
    { id: 1, name: "Fishery", options: "Fishries, Crabs, Oyesters" },
    { id: 1, name: "Fishery", options: "Fishries, Crabs, Oyesters" },
    { id: 1, name: "Fishery", options: "Fishries, Crabs, Oyesters" },
    { id: 1, name: "Fishery", options: "Fishries, Crabs, Oyesters" },
  ];
  return (
    <div className="px-10 flex flex-col items-center w-screen ">
      <h3 className="font-bold">Marketplace</h3>
      <span>
        <h5 className="font-bold">search</h5>
        <div className="flex rounded-lg border-primary border-2 mt-2 ">
          <input className="w-96 p-3" type="search" placeholder="Search" />
          <span className="p-3 bg-secondary ">🔍</span>
        </div>
      </span>
      <span>
        <h5 className="font-bold">Categories</h5>
        <div className="grid grid-cols-2 bg-secondary p-5 rounded-lg place-items-center">
          {categories.map((items) => (
            <div
              key={items.id}
              className=" border-b-2 border-green-600 p-5 flex items-center mx-10"
            >
              <span>
                <h5>{items.name}</h5>
                <h6>{items.options}</h6>
              </span>
              <span className="ml-10"> <button> &gt;</button>  </span>
            </div>
          ))}
        </div>
      </span>
    </div>
  );
}

export default Marketplace;
