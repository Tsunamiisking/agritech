import React from "react";

function Marketplace() {
  return (
    <div className="px-10 flex flex-col items-center w-screen ">
      <h3>Marketplace</h3>
      <span>
        <h5>search</h5>
        <div className="flex rounded-lg border-primary border-2 mt-2 ">
          <input
            className="w-96 p-3"
            type="search"
            placeholder="Search"
          />
          <span className="p-3 bg-secondary ">🔍</span>
        </div>
      </span>
    </div>
  );
}

export default Marketplace;
