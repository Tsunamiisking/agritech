import React from 'react'
import SideNavSeller from '@/components/SideNavSeller'
import InventoryItem from '@/components/InventoryItem'

function page() {
  return (
    <>
    <SideNavSeller/>
    <div className='md:ml-64 lg:ml-64'>My inventory
      {/* to do
      current order: customer detial, order status, delivery timeline 
      order history: archive of completed or canceled order
      tools for maeking order: not proccessed, proccesing, shipped, completed
      */}
      <InventoryItem/>
    </div>
    

    </>
  )
}

export default page