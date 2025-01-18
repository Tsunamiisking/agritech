import React from 'react'
import SideNavSeller from '@/components/SideNavSeller'
import InventoryItem from '@/components/InventoryItem'

function page() {
  return (
    <>
    <SideNavSeller/>
    <div className='md:ml-64 lg:ml-64'>My inventory
      <InventoryItem/>
    </div>
    

    </>
  )
}

export default page