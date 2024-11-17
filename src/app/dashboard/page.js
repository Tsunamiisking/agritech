import React from 'react'
import SideNav from '@/components/SideNav'

function page() {
  return (
    <>
    <div className="flex px-5 lg:px-0">
      <SideNav
        option1={"Dashboard"}
        option2={"Item History"}
        option3={"Add Item"}
        userType={"Sellar"}
      />
      <h3>Good Morning, Douglas</h3>
     
    </div>
  </>
  )
}

export default page