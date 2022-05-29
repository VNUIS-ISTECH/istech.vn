import React from "react";

function Apply() {
  return (
    <div>
      <div className="h-[250px] bg-gradient-to-br from-gray-800 to-blue-300  text-white items-center justify-center flex flex-col lg:h-80">
        <h3 className="text-slate-300 text-center ">ĐĂNG KÝ THÀNH VIÊN</h3>
        <h2 className="text-[28px] font-extrabold text-center pb-3 lg:text-5xl">
          Ứng Tuyển Ngay
        </h2>
        <div className="pt-3.5 h-12 w-32">
          <button className="items-center bg-blue-600 h-12 w-32 rounded-lg ease-out duration-300 shadow-md lg:hover:h-10 lg:hover:w-28 ">
            Aplly Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Apply;
