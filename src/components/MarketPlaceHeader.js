import React from 'react'

function MarketPlaceHeader() {
    const categories = [
{ id: 1, name: "Fishery", options: "Fishries, Crabs, Oyesters" },
{ id: 2, name: "Tubers", options: "Yam, Potatoe, Cassava" },
{ id: 3, name: "Vegetables", options: "Carrots, Spinash, Cabbage" },
{ id: 4, name: "Livestock", options: "Goat, Cow, Chicken" },
];
  
  return (
    <div >
      
      <div>
        <span>
          <h5 className="font-bold">search</h5>
          <div className="flex rounded-lg border-primary border-2 mt-2 ">
            <input className="w-full p-3" type="search" placeholder="Search" />
            <span className="p-3 bg-secondary justify-items-end">🔍</span>
          </div>
        </span>
        <span>
          <h5 className="font-bold mb-2">Categories</h5>
          <div className="grid grid-cols-2 bg-secondary p-5 rounded-lg place-items-center">
            {categories.map((items) => (
              <div
                key={items.id}
                className=" border-b-2 border-green-600 p-5 flex items-center mx-10"
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

export default MarketPlaceHeader