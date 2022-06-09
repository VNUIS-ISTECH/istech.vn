import React from "react";

function CardAbout({ information, type }) {
  return (
    <div
      className={`mt-[50px] h-[630px] w-[100%] flex flex-col py-6 lg:h-[520px] lg:w-[100%] lg:py-14 ${
        type === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
      } `}
    >
      <div className="flex w[100%] items-center sm:px-[26px] lg:w-1/2">
        <div
          className="px-10 w-[100%] h-[250px] bg-cover bg-center bg:contain box-border shadow-md lg:w-[100%] lg:h-full lg:rounded-lg"
          style={{ backgroundImage: `url(${information.link})` }}
        ></div>
      </div>
      <div className="pt-[20px] px-[10px] h-full text-center lg:text-left lg:w-1/2 lg:pl-[16px] ">
        <h4 className=" text-blue-600 text-xl font-extrabold lg:ml-7 lg:mb-6">
          0{information.id}.
        </h4>
        <h3 className=" text-[24px] font-extrabold lg:mb-4 lg:ml-7 lg:text-[40px]">
          {information.title}
        </h3>
        <p className="sm:ml-7 sm:mr-7 lg:w-[90%]">{information.description}</p>
      </div>
    </div>
  );
}

export default CardAbout;
