import React from 'react'

function NearHeading({ct}) {
  return (
    <div className="flex items-center h-[350px] w-full bg-[#0C49C2] opacity-95">
        <h1 className="text-[#fff] text-5xl m-[50px] font-extrabold md:text-6xl md:m-[100px] lg:text-7xl">{ct}</h1>
      </div>
  )
}

export default NearHeading