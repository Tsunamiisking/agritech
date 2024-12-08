import React from "react";

function MarketPlaceHeader() {
  const categories = [
    { id: 1, name: "Fishery", options: "Fishries, Crabs, Oyesters" },
    { id: 2, name: "Tubers", options: "Yam, Potato, Cassava" },
    { id: 3, name: "Vegetables", options: "Carrots, Spinach, Cabbage" },
    { id: 4, name: "Livestock", options: "Goat, Cow, Chicken" },
  ];

  return (
    <div className="w-full px-4 lg:px-8">
      {/* Search Input */}
      <div className="flex rounded-lg border-2 border-primary mt-5 lg:mt-2 w-full">
        <input
          className="w-full p-3 focus:outline-none"
          type="search"
          placeholder="Search"
        />
        <button className="p-3 bg-secondary text-white">🔍</button>
      </div>

      {/* Categories Section */}
      <h5 className="font-bold mb-2 text-center mt-4 lg:mt-6">Categories</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-secondary p-4 lg:p-6 rounded-lg">
        {categories.map((item) => (
          <div
            key={item.id}
            className="flex items-center w-full p-4 bg-white rounded-md shadow-md border border-gray-200"
          >
            {/* Category Name and Options */}
            <div>
              <h5 className="font-bold text-primary">{item.name}</h5>
              <p className="text-sm text-gray-600">{item.options}</p>
            </div>
            {/* Arrow Button */}
            <button className="ml-auto text-primary font-bold text-lg">
              &gt;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketPlaceHeader;
