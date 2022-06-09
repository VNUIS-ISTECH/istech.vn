import React from "react";
import CardAbout from "./CardAbout";

function AboutUs() {
  const information = [
    {
      id: 1,
      title: "MỤC ĐÍCH",
      link: `https://istech.vn/wp-content/uploads/2021/08/104706987_145759743767730_3012861106799817953_n-1-1.jpeg`,
      description:
        " ISTECH góp phần nâng cao chất lượng học và tự học của sinh viên Khoa Quốc tế – Đại Học Quốc Gia Hà Nội, giúp sinh viên củng cố, tổng hợp và nâng cao kiến thức đã học, tiếp cận và biết vận dụng các phương pháp nghiên cứu khoa học. Đồng thời tạo điều kiện để sinh viên đi sâu tìm hiểu, nghiên cứu những vấn đề cụ thể mà chuyên môn đặt ra, thuộc các lĩnh vực : Tin học, Kĩ thuật, Đồ hoạ, Ngoại ngữ, …",
    },
    {
      id: 2,
      title: "TẠI SAO BẠN NÊN CHỌN ISTECH",
      link: `https://istech.vn/wp-content/uploads/2021/08/istech-1-1-1024x768.jpg`,
      description:
        " ISTECH hoạt động trong lĩnh vực rèn luyện, nghiên cứu khoa học, những hoạt động có mục đích khác không nằm trong lĩnh vực hoạt động của Câu lạc bộ. Trong tương lai, ISTECH sẽ tổ chức các hoạt động học tập, rèn luyện, bồi dưỡng, vui chơi lành mạnh, giao lưu trao đổi kinh nghiệm, tổ chức các cuộc thi, các ngày hội văn hoá liên quan tới việc nghiên cứu khoa học, máy tính.",
    },
    {
      id: 3,
      title: "NGUYÊN TẮC HOẠT ĐỘNG CỦA ISTECH",
      link: `https://istech.vn/wp-content/uploads/2021/08/119935633_171755214501516_3273228596403239135_n-1-1-1024x683.jpg`,
      description:
        " ISTECH được thành lập từ các bạn sinh viên có đam mê về nghiên cứu khoa học nói chung, là các đại diện đến từ các ngành học khác nhau, từ đó, trong tương lai sẽ giúp CLB phát huy hết tiềm năng của các thành viên trong BTC, cũng như nắm bắt được xu hướng, mức độ quan tâm chung của sinh viên, thành viên tham gia ISTECH. Tuy nhiên, CLB hoạt động dựa trên nguyên tắc tự nguyện tham gia của các thành viên, dân chủ trong hoạt động và quản lý tập trung.",
    },
    {
      id: 4,
      title: "HƯỚNG ĐI TRONG NĂM TỚI CỦA ISTECH",
      link: `https://istech.vn/wp-content/uploads/2021/08/120384982_175120707498300_3370841432766370680_n-1-1-1024x768.jpg`,
      description:
        " Tổ chức các buổi nói chuyện nhỏ, tuyên truyền thông qua facebook, qua lớp trưởng các lớp . Hướng chủ yếu vào sinh viên năm nhất. Giúp các sinh viên vượt qua sự bỡ ngỡ trước các môn học đại cương khó và lạ bằng cách chia sẻ những gì mình đã tích lũy được. Cùng với đó là bước đầu định hướng cho các em tích lũy kiến thức khoa học bên ngoài bài vở",
    },
  ];
  return (
    <div className="pt-[20px] lg:p-36">
      <div className="flex flex-col items-center">
        <h3 className="text-[16px] font-bold mb-4 text-blue-600 lg:text-3xl">
          MỘT SỐ THÔNG TIN VỀ CÂU LẠC BỘ
        </h3>
        <h2 className="text-5xl font-extrabold text-center">ISTECH</h2>
      </div>

      <div className="w-full">
        {information.map((item, index) => {
          if (index % 2 === 0) {
            return <CardAbout key={index} information={item} type="left" />;
          }
          return <CardAbout key={index} information={item} type="right" />;
        })}
      </div>
    </div>
  );
}

export default AboutUs;
