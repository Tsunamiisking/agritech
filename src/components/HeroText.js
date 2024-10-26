import React from 'react'

const HeroText = ( {headertext, paragraphtext}) => {
   
  return (
    <div className='absolute flex flex-col text-center justify-center h-screen'>
        <h1 className='text-6xl font-extrabold font-roboto text-primary'>
        {headertext}
        </h1>
        <p className='font-playfair text-white'>
        { paragraphtext}
        </p>
    </div>
  )
}

export default HeroText
