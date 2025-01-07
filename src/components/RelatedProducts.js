import React from 'react'
import Image from 'next/image'

function RelatedProducts({filteredProducts, product}) {
  return (
    <div>
          {filteredProducts && (
            <div className="hidden md:block md:w-10/12">
              <h3 className="text-xl font-semibold text-white text-center mb-4">
                More Products in {product.category}
              </h3>
              <div className="grid grid-cols-3 gap-2 h-96 overflow-y-scroll">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center h-56"
                  >
                    <Image
                      alt="product Image"
                      src={prod.imageUrl}
                      width={150}
                      height={100}
                      className="rounded-md h-24"
                    />
                    <p className="mt-2 text-sm font-semibold">{prod.name}</p>
                    <p className="text-gray-500 text-sm">#{prod.price}</p>
                    <button
                      className="mt-4 px-3 py-1 rounded-lg bg-primary text-white hover:bg-secondary transition duration-300"
                      onClick={() => openModal(prod)}
                    >
                      More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
  )
}

export default RelatedProducts