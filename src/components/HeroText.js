import React from 'react'

const HeroText = ( {headertext, paragraphtext}) => {
   
  return (
    <div className='absolute flex flex-col text-center justify-center h-screen'>
        <h1 className='mb-10 text-6xl font-extrabold font-roboto text-primary text-shadow'>
        {headertext}
        </h1>
        <p className='font-playfair text-shadow text-white'>
        { paragraphtext}
        </p>
    </div>
  )
}

export default HeroText
