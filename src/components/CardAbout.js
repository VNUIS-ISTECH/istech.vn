import React from "react";

function CardAbout({ information, type }) {
  return (
    <div
      className={`h-[520px] flex py-14 ${
        type === "left" ? "flex-row" : "flex-row-reverse"
      } `}
    >
      <div className="flex w-1/2 px-3.5">
        <div
          className=" bg-cover bg-center w-full h-full box-border rounded-md shadow-md"
          style={{ backgroundImage: `url(${information.link})` }}
        ></div>
      </div>
      <div className="w-1/2 h-full">
        <h4 className="ml-7 font-extrabold  text-blue-600 mb-6 text-xl ">
          0{information.id}.
        </h4>
        <h3 className="ml-7 font-extrabold text-[40px] mb-4">
          {information.title}
        </h3>
        <p className="ml-7 mr-7">{information.description}</p>
      </div>
    </div>
  );
}

export default CardAbout;
