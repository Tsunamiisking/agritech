import React from 'react'
import SideNav from './SideNav'

const Layout = ({children}) => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Side Navigation */}
      <SideNav
        option1={"Marketplace"}
        option2={"Purchase History"}
        option3={"Cart"}
        option4={"Favorite"}
        userType={"Buyer"}
      />

      {/* Main Content */}
      {children}
    </div>
  )
}

export default Layout
