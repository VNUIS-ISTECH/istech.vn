import React from "react";
import images from "../assets/Photo/Index.js";
import { Link } from "react-router-dom";
const Activities = () => {
  return (
    <div className=" md:h-full  items-center text-gray-600 w-full bg-blue-700">
      <div className="container px-20 py-24 mx-auto  text-white ">
        <div className="text-left mb-12 ">
          <h1>Giới thiệu</h1>
          <h2 className="text-[80px] font-bold">Hoạt Động CLB</h2>
        </div>
      </div>
      {/* The hoat dong */}
      <div className=" flex justify-around bg-white py-32 flex-wrap px-20">
        <div className="p-4 sm:w-1/2 lg:w-1/3 ">
          <div className="">
            <img
              src={images.ws1}
              className="
            lg:h-[180px]
            md:h-[180px]
            rounded-full
            border-gray-200
            hover:scale-125
            duration-300
            
            "
            ></img>
          </div>
          <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in  rounded-lg">
            <h2 class="text-base font-medium text-indigo-300 mb-1">
              October 29, 2021
            </h2>
            <Link
              to="/workshop/10"
              className="py-[16px] font-bold text-[32px] "
            >
              Workshop PYTHON FOR DATA ANALYSIS
            </Link>
            <p className="py-5">
              Nằm trong chuỗi chương trình tổ chức workshop phát triển và bổ trợ
              kiến thức kĩ năng cho sinh viên. Workshop Python for Data analysis
              nhằm mục đích: Củng cố và nâng cao kỹ năng chuyên môn cho các bạn
              sinh viên. Giải đáp những băn khoăn của các bạn sinh viên về lộ
              trình phát triển nghề nghiệp trong Data analysis. Trải nghiệm công
              việc thực tế của một người làm Phân tích dữ liệu – một công việc
              mang tầm chiến lược cho sự phát triển của doanh nghiệp.
            </p>
            <a class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0 py-5">
              Read More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="p-4 sm:w-1/2 lg:w-1/3 ">
          <div className="">
            <img
              src={images.ws2}
              className="
            lg:h-[180px]
            md:h-[180px]
            rounded-full
            border-gray-200
            hover:scale-125
            duration-300
            "
            ></img>
          </div>
          <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in  rounded-lg">
            <h2 class="text-base font-medium text-indigo-300 mb-1">
              October 29, 2021
            </h2>
            <Link
              to="/workshop/11"
              className="py-[16px] font-bold text-[32px] "
            >
              Chương Trình TF SCALE 2021
            </Link>
            <p className="py-5">
              “The 2019 - 2021 Temasek Foundation Specialist’s Community Action
              and Leadership Exchange” - TFI SCALE - là chương trình trao đổi
              sinh viên do Qũy giáo dục Temasek Foundation (Singapore) tài trợ.
              Chương trình dành cho sinh viên các nước khu vực Đông Nam Á được
              tổ chức với mục đích bồi dưỡng và tăng cường khả năng lãnh đạo,
              khả năng hội nhập và phát triển các kỹ năng mềm trong tương lai
              cho sinh viên; nâng cao hiểu biết, khả năng nhận thức và giải
              quyết các vấn đề cộng đồng.
            </p>
            <a class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0 py-5">
              Read More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="">
            <img
              src={images.ws3}
              className="
            lg:h-[180px]
            md:h-[180px]
            rounded-full
            border-slate-900
            hover:scale-125
            duration-300
            "
            ></img>
          </div>
          <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in  rounded-lg">
            <h2 class="text-base font-medium text-indigo-300 mb-1">
              October 29, 2021
            </h2>
            <Link to="/workshop/12" className="py-[16px] font-bold text-[32px]">
              Cuộc Thi WiDS DATATHON 2021
            </Link>
            <p className="py-5">
              Cuộc thi WiDS Datathon 2021 trên Kaggle - với thử thách yêu cầu
              các đội thi dự đoán tiền sử bệnh đái tháo đường của bệnh nhân
              phòng ICU - đã thu hút hơn 800 đội thi từ nhiều quốc gia trên thế
              giới. Các đội thi đã không ngừng cải thiện mô hình dự đoán và cạnh
              tranh sát sao với các đội thi khác trên bảng xếp hạng Leaderboard.
            </p>
            <a class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0 py-5">
              Read More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="">
            <img
              src={images.ws4}
              className="
            lg:h-[180px]
            md:h-[180px]
            rounded-full
            border-slate-900
            hover:scale-125
            duration-300
            "
            ></img>
          </div>
          <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in  rounded-lg">
            <h2 class="text-base font-medium text-indigo-300 mb-1">
              October 29, 2021
            </h2>
            <Link to="/workshop/13" className="py-[16px] font-bold text-[32px]">
              Hội Nghị NCKH
            </Link>
            <p className="py-5">
              Tham gia hội nghị nghiên cứu khoa học lần này, các thành viên câu
              lạc bộ công nghệ thông tin ISTECH đã có 3 đề tài nghiên cứu tham
              gia báo cáo tại Hội nghị lần này và mang về thành tích ấn tượng.
            </p>
            <a class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0 py-5">
              Read More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="">
            <img
              src={images.ws5}
              className="
            lg:h-[180px]
            md:h-[180px]
            rounded-full
            border-slate-900
            hover:scale-125
            duration-300
            "
            ></img>
          </div>
          <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in  rounded-lg">
            <h2 class="text-base font-medium text-indigo-300 mb-1">
              October 29, 2021
            </h2>
            <Link to="/workshop/14" className="py-[16px] font-bold text-[32px]">
              Hội Thảo Công Nghệ
            </Link>
            <p className="py-5">
              Dự án nằm trong chuỗi hoạt động kết nối, chia sẻ: hội thảo công
              nghệ về AI, Machine Learning, Big Data với các ông lớn trong lĩnh
              vực công nghệ hiện nay như Microsoft, Lenovo và Intel.
            </p>
            <a class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0 py-5">
              Read More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3 ">
          <div className="">
            <img
              src={images.ws6}
              className="
            lg:h-[180px]
            md:h-[180px]
            rounded-full
            border-gray-200
            hover:scale-125
            duration-300
            "
            ></img>
          </div>
          <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in  rounded-lg">
            <h2 class="text-base font-medium text-indigo-300 mb-1">
              October 29, 2021
            </h2>
            <Link to="/workshop/15" className="py-[16px] font-bold text-[32px]">
              FSOFT TOUR
            </Link>
            <p className="py-5">
              Chương trình tham quan, khám phá môi trường làm việc của công ty
              FPT Software tại Khu công nghệ cao Hòa Lạc dành riêng cho các bạn
              sinh viên Khoa Quốc tế, ĐH Quốc gia Hà Nội tại Làng phần mềm
              Fville, khu công nghệ cao Hòa Lạc.
            </p>
            <a class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0 py-5">
              Read More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
