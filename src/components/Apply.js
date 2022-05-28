import React from "react";

function Apply() {
  return (
    <div>
      <div className="h-80 bg-gradient-to-br from-gray-800 to-blue-300  text-white items-center justify-center flex flex-col">
        <h3 className="text-slate-300 text-center ">ĐĂNG KÝ THÀNH VIÊN</h3>
        <h2 className="text-5xl font-extrabold text-center pb-3 ">
          Ứng Tuyển Ngay
        </h2>
        <div className="pt-3.5 h-12 w-32">
          <button className="items-center bg-blue-600 h-12 w-32 rounded-lg ease-out duration-300 hover:h-10 hover:w-28 shadow-md">
            Aplly Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Apply;
