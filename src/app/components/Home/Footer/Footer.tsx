import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <div className="flex flex-col items-center justify-center ">
  <div>
    <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-white">
      PORT<span className="text-yellow-600">FOLIO</span>
    </h1>
  </div>
  <div className="flex mt-10 items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
    <div >Home.</div>
    <div >Services.</div>
    <div >Project.</div>
    <div >Reviews</div>
    <div >Contact.</div>
  </div>
       
  <p className='text-white text-opacity-60 mt-5 text-center'>&copy; 2024 All Rights Reserved by Qareer&apos;s Portfolio</p>

</div>
    </div>
  )
}

export default Footer