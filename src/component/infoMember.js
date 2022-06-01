import React from 'react'

function InfoMember({information, type}) {
  return (
  <div>
    <div className={`my-[100px] block items-center  lg:flex ${type === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
        <div className="my-[50px] w-[100%] inline-flex items-center justify-center lg:w-[50%] lg:justify-start">
          <img
            src={information.img}
            alt="Avatar"
            className={`w-[40%] h-[40%] rounded-full opacity-90 shadow-3xl  ${ type === "left" ? "lg:ml-[200px]" : ""}`}
          ></img>
        </div>

        <div className="h-[100%] w-[100%] text-center lg:text-justify lg:w-1/2">
          <div className={`w-[100%] px-[20px] text-sm lg:w-[60%] lg:px-0 ${ type === "left" ? "" : "lg:ml-[200px]"} sm:text-base`}>
            <h3 className="text-3xl font-extrabold py-[20px] sm:text-4xl">{information.name}</h3>
            <h5 className="text-lg font-bold py-[20px] sm:text-xl">{information.rule}</h5>
            <p className="leading-relaxed text-[#7A7A7A]">{information.des}</p>
            <h5 className="text-lg font-bold py-[20px] sm:text-xl">Liên hệ</h5>
            <p className="leading-relaxed text-[#7A7A7A] mb-[10px]">
              Email:{" "}
              <a href={information.gmail} className="no-underline text-[#156ae0] hover:text-[#7A7A7A]">
                {information.gmail}
              </a>
            </p>
            <p className="leading-relaxed text-[#7A7A7A] mb-[10px]">
              Facebook:{" "}
              <a href={information.fb} className="no-underline text-[#156ae0] hover:text-[#7A7A7A]">
                {information.fb}
              </a>
            </p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default InfoMember