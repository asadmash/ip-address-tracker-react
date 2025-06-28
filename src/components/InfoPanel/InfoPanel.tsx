import React from 'react'
import InfoItem from './InfoItem'

function InfoPanel() {
  return (
    <>
    <div className="w-[80%] h-auto px-2 py-8 bg-white top-35 absolute left-1/2 transform -translate-x-1/2  shadow-md rounded-xl">
<InfoItem></InfoItem>
    </div>
    </>
  )
}

export default InfoPanel