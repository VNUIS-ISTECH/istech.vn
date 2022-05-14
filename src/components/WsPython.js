import React from "react";
import images from "../assets/Photo/Index.js";
const WsPython = () => {
  return (
    <div>
      <div className=" md:h-full  items-center text-gray-600 w-full bg-blue-700 ">
        <div className="container px-20 py-24 mx-auto  text-white ">
          <div className="text-left mb-12 ">
            <h1>MỘT SỐ THÔNG TIN VỀ</h1>
            <h2 className="text-[80px] font-bold">
              HỘI NGHỊ NHIÊN CỨU KHOA HỌC
            </h2>
          </div>
        </div>
        {/* The hoat dong */}
        <div className="bg-white py-32 flex-wrap justify-center flex px-[450px]   ">
          <h1 className="font-bold text-[30px] pb-[30px] ">
            THAM GIA HỘI NGHỊ NGHIÊN CỨU KHOA HỌC, HỌC SINH - SINH VIÊN KHOA
            QUỐC TẾ LẦN THỨ 13
          </h1>
          <img
            src={images.ws4_1}
            className="rounded-lg py-8 Colored shadow hover:scale-90
            duration-700 flex items-center w-full"
          ></img>
          <div className="pt-20">
            <h2 className="font-bold text-[19px] pb-[30px]">
              Năm Học 2020 - 2021 Khoa Quốc Tế Có 27 Đề Tài Nghiên Cứu Khoa Học
              Sinh Viên Được Nghiệm Thu Cấp Bộ Môn, Trong Đó Có 18 Đề Tài Trong
              Lĩnh Vực Khoa Học Xã Hội Và 9 Đề Tài Thuộc Lĩnh Vực Khoa Học Tự
              Nhiên Và Công Nghệ.
            </h2>
            <p className="leading-7">
              Qua các buổi trình bày và đánh gia nghiệm thu, đã có 6 đề tài
              thuộc lĩnh vực khoa học tự nhiên và công nghệ và 12 đề tài thuộc
              lĩnh vực khoa học xã hội được tham gia báo cáo tại Hội nghị ngày
              29/4/2021. Tham gia hội nghị nghiên cứu khoa học lần này, các
              thành viên câu lạc bộ công nghệ thông tin ISTECH đã có 3 đề tài
              nghiên cứu tham gia báo cáo tại Hội nghị lần này và mang về thành
              tích ấn tượng với 1 giải Nhất, 1 giải Nhì, 1 giải Khuyến Khích, 1
              giải đề tài nghiên cứu tiềm năng và 1 giải thuyết trình hay nhất:
            </p>
          </div>
          <div className="pt-20">
            <h2 className="font-bold text-[19px] pb-[30px]">
              Đề Tài Nghiên Cứu “Phân Loại Tweets Thảm Hoạ Sử Dụng Machine
              Learning”- “Disaster Tweets Classification Using Machine Learning”
              Của Thành Viên Lê Anh Đức , Nội Dung Nghiên Cứu :
            </h2>
            <img
              src={images.ws4_2}
              className="rounded-lg py-8 Colored shadow hover:scale-90
            duration-700 flex items-center w-full"
            ></img>
            <p className="leading-7 italic pt-12">
              “Trong bài báo, đã khám phá và đề xuất quy trình để giải quyết
              nhiệm vụ Xử lý ngôn ngữ tự nhiên bằng cách sử dụng các mô hình học
              máy truyền thống cũng như mô hình ngôn ngữ phổ thông được đào tạo
              trước. Bằng cách tiến hành các thử nghiệm chuyên sâu bằng cách sử
              dụng BERT, đã chứng minh rằng BERT và chiến lược tinh chỉnh của
              chúng tôi có hiệu quả cao trong các nhiệm vụ phân loại văn bản.
              Bản để tài cũng đã được thực hiện so sánh về hiệu quả của một số
              bộ mã hóa văn bản. Đối với công việc trong tương lai, với mục đích
              muốn khám phá các kiến trúc đầu phân loại khác nhau. Thay vì chỉ
              sử dụng lớp được kết nối đầy đủ, chúng tôi sẽ thử nghiệm với các
              kiến trúc khác, chẳng hạn như LSTM, RNN và CNN-LSTM ở trên cùng.”
            </p>
            <p>
              Với đề tài này, thành viên Lê Anh Đức đã xuất sắc giành được giải
              Nhất và giải đề tài nghiên cứu tiềm năng tại hội nghị nghiên cứu
              khoa học lần thứ 13 này
            </p>
          </div>
          <div className="pt-20">
            <h2 className="font-bold text-[19px] pb-[30px]">
              Đề Tài Nghiên Cứu “ Ô Tô Tự Động Sử Dụng AI (Ô Tô Tự Động Sử Dụng
              Trí Tuệ Nhân Tạo)- Automated Car Using AI (Automated Car Using
              Artificial Intelligence) Với Các Thành Viên: Cao Sỹ Minh, Hoàng
              Thị Chúc, Trần Việt Long. Nội Dung Nghiên Cứu:
            </h2>
            <img
              src={images.ws4_3}
              className="rounded-lg py-8 Colored shadow hover:scale-90
            duration-700 flex items-center w-full"
            ></img>
            <p className="leading-7 italic pt-12">
              “ Nhóm đã phát triển một hệ thống xử lý tập trung vào tính năng
              phát hiện chính xác các chướng ngại vật bằng các kỹ thuật dựa trên
              học sâu (Ai) để có thể tự tránh, theo dõi đường đi và nhận dạng
              hình ảnh. Hầu hết phần cứng, mềm và chức năng tránh chướng ngại
              vật đều dựa trên nền tảng của deep learning, khác hoàn toàn so với
              các công nghệ và sản phẩm hiện có về mục đích chính cùng với các
              đặc điểm cấu trúc của chúng”
            </p>
            <p>
              Đề tài nghiên cứu này các thành viên đã thành công thuyết phục ban
              giám khảo và giành được giải nhì tại Hội nghị lần này. Bên cạnh
              đó, với việc tự tin trình bày ý tưởng và đề tài một cách thuyết
              phục, các thành viên nhóm cũng đã được ban tổ chức trao giải nhóm
              thuyết trình hay nhất.
            </p>
          </div>
          <div className="pt-20">
            <h2 className="font-bold text-[19px] pb-[30px]">
              Đề Tài Nghiên Cứu “ Ô Tô Tự Động Sử Dụng AI (Ô Tô Tự Động Sử Dụng
              Trí Tuệ Nhân Tạo)- Automated Car Using AI (Automated Car Using
              Artificial Intelligence) Với Các Thành Viên: Cao Sỹ Minh, Hoàng
              Thị Chúc, Trần Việt Long. Nội Dung Nghiên Cứu:
            </h2>
            <img
              src={images.ws4_4}
              className="rounded-lg py-8 Colored shadow hover:scale-90
            duration-700 flex items-center w-full"
            ></img>
            <p className="leading-7 italic pt-12">
              “Mô hình “Hàng đổi hàng” không phải là mới và điều đó diễn ra
              trong một khoảng thời gian rất dài trong lịch sử và thậm chí cho
              đến ngày nay. Tuy nhiên, việc trao đổi hàng hóa/ đồ dùng giữa các
              cá nhân lại không phổ biến bởi vì rất khó để tìm đúng người để
              thực hiện trao đổi. Có những người mà họ không có đủ tiền nhưng họ
              lại có những món đồ có giá trị có thể tiến hành trao đổi. Trên
              thực tế, vẫn chưa có “thị trường” dành cho những người như vậy. Để
              giải quyết vấn đề đó, một website với tên miền là: Traodoinow.com
              đã được tạo ra với mục đích giúp cho người dùng kết nối và trao
              đổi đồ cũ của họ được thuận lợi và dễ dàng hơn. Tại website:
              Traodoinow.com người dùng có thể trao đổi đồ cũ mà họ không còn
              nhu cầu sử dụng nhưng đối với người khác lại là quý giá. Hơn nữa
              website còn cung cấp cho người dùng nhiều trải nghiệm, tiện ích
              như là: người dùng có thể đấu giá đồ cũ của mình và họ có thể thuê
              hoặc cho thuê đồ cũ, hoặc đơn giản là quyên góp đồ cũ cho các khu
              vực gặp khó khăn.”
            </p>
            <p>
              Với đề tài nghiên cứu này, thành viên Đỗ Văn Qúy đã giành được
              giải Khuyến Khích tại Hội nghị nghiên cứu khoa học lần thứ 13 Khoa
              Quốc Tế, khép lại một mùa nghiên cứu khoa học thành công của các
              thành viên câu lạc bộ công nghệ thông tin ISTECH, tạo tiền đề vững
              chắc để các thành viên trong câu lạc bộ tiếp tục khẳng định vị thế
              của một câu lạc bộ học thuật chất lượng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WsPython;
