import React from 'react';

const Header = () => {
  return (
    <>
   <div className="bg-[url('/images/pattern-bg-desktop.png')] bg-cover bg-no-repeat h-[25vh] w-screen flex flex-col items-center">
     <h1 className='text-white font-bold text-2xl my-4'>IP Address Tracker</h1>
     <div className='w-[40%] flex justify-center items-center rounded-md overflow-hidden'>
      <input type="text" className="w-full h-[38px] bg-amber-50 outline-none px-4 cursor-pointer" placeholder='Search for an IP address or domain' />
      <button className='bg-[#000000] hover:bg-[#3f3f3f] focus:bg-[#3f3f3f] cursor-pointer p-3'>
        <img src="/images/icon-arrow.svg" alt="" />
      </button>
     </div>
   </div>
    </>
  )
}

export default Header