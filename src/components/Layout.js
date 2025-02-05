import React from 'react'
import SideNav from './SideNav'

const layout = ({children}) => {
  return (
    <>
    <SideNav /> 
    {children}
    </>
  )
}

export default layout
