import React from 'react'

const InfoItem = () => {
  return (
    <div className='flex items-start justify-around '>
        <div className='info-item border-r-1 pl-6 w-1/4'>
            <h3 className='font-bold uppercase text-[#615e5e]'>ip</h3>
        <p className='font-bold text-2xl'>192.212.174.101</p>
        </div>
        <div className='info-item border-r-1  pl-6 w-1/4'>
            <h3 className='font-bold uppercase text-[#615e5e]'>location</h3>
            <p className='font-bold text-2xl'>Brooklyn, NY <br /> 10001</p>
        </div>
        <div className='info-item border-r-1  pl-6 w-1/4'>
            <h3 className='font-bold uppercase text-[#615e5e]'>timezone</h3>
            <p className='font-bold text-2xl'>utc -05:00</p>
        </div>
        <div className='info-item  pl-6 w-1/4'>
            <h3 className='font-bold uppercase text-[#615e5e]'>isp</h3>
            <p className='font-bold text-2xl'>SpaceX<br/>
                Starlink
            </p>
        </div>
    </div>
  )
}

export default InfoItem