import React from 'react'
import InfoItem from './InfoItem'

function InfoPanel() {
  return (
    <>
    <div className="w-[80%] h-auto px-2 py-8 bg-white top-50 absolute left-1/2 transform -translate-x-1/2 border-2 ">
<InfoItem></InfoItem>
    </div>
    </>
  )
}

export default InfoPanel