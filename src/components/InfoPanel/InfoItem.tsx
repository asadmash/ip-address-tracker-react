import React from 'react'

const InfoItem = () => {
  return (
    <div className='flex items-center justify-around'>
        <div className='border-r-1 flex flex-col justify-center pr-[10%]'>
            <h3>ip <address></address></h3>
        <p>192.212.174.101</p>
        </div>
        <div className='border-r-1 pr-[15%]'>
            <h3>location</h3>
            <p>Brooklyn, NY 10001</p>
        </div>
        <div className='border-r-1 pr-[10%]'>
            <h3>timezone</h3>
            <p>utc -05:00</p>
        </div>
        <div className=''>
            <h3>isp</h3>
            <p>SpaceX<br/>
                Starlink
            </p>
        </div>
    </div>
  )
}

export default InfoItem