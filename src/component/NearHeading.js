import React from 'react'

function NearHeading({ct}) {
  return (
    <div className="flex items-center h-[350px] w-full bg-[#0C49C2] opacity-95">
        <h1 className="text-[#fff] text-5xl w-full text-center m-0 font-extrabold md:text-6xl md:m-[100px] lg:text-7xl lg:text-justify">{ct}</h1>
      </div>
  )
}

export default NearHeading