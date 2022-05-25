import React from "react";
import "../App.css";

function About() {
  return (
    <div>
      <div className="img-background">
        <div className="container">
          <h3 className="title"></h3>
          <h6 className="title">GIỚI THIỆU</h6>
          <h1 className="">Về Chúng Tôi</h1>
        </div>
      </div>
      <div className="second">
        <h5 className="title intro header">MỘT SỐ THÔNG TIN VỀ CÂU LẠC BỘ</h5>
        <h2 className="title about">ISTECH</h2>
      </div>
      <section className="box">
        <div className="image">
          <img src="https://istech.vn/wp-content/uploads/2021/08/104706987_145759743767730_3012861106799817953_n-1-1.jpeg" />
        </div>
        <div className="flex image">
          <h5 className="title">01.</h5>
          <h3 className="title purpose">MỤC ĐÍCH</h3>
          <p className="paragraph">
            ISTECH góp phần nâng cao chất lượng học và tự học của sinh viên Khoa
            Quốc tế – Đại Học Quốc Gia Hà Nội, giúp sinh viên củng cố, tổng hợp
            và nâng cao kiến thức đã học, tiếp cận và biết vận dụng các phương
            pháp nghiên cứu khoa học. Đồng thời tạo điều kiện để sinh viên đi
            sâu tìm hiểu, nghiên cứu những vấn đề cụ thể mà chuyên môn đặt ra,
            thuộc các lĩnh vực : Tin học, Kĩ thuật, Đồ hoạ, Ngoại ngữ, …
          </p>
        </div>
      </section>
      <section className="box">
        <div className="flex image">
          <h5 className="title">02.</h5>
          <h3 className="title purpose">TẠI SAO BẠN NÊN CHỌN ISTECH</h3>
          <p className="paragraph">
            ISTECH hoạt động trong lĩnh vực rèn luyện, nghiên cứu khoa học,
            những hoạt động có mục đích khác không nằm trong lĩnh vực hoạt động
            của Câu lạc bộ. Trong tương lai, ISTECH sẽ tổ chức các hoạt động học
            tập, rèn luyện, bồi dưỡng, vui chơi lành mạnh, giao lưu trao đổi
            kinh nghiệm, tổ chức các cuộc thi, các ngày hội văn hoá liên quan
            tới việc nghiên cứu khoa học, máy tính.
          </p>
        </div>
        <div className="image">
          <img src="https://istech.vn/wp-content/uploads/2021/08/istech-1-1-1024x768.jpg" />
        </div>
      </section>
      <section className="box">
        <div className="image">
          <img src="https://istech.vn/wp-content/uploads/2021/08/119935633_171755214501516_3273228596403239135_n-1-1-1024x683.jpg" />
        </div>
        <div className="flex image">
          <h5 className="title">03.</h5>
          <h3 className="title purpose">NGUYÊN TẮC HOẠT ĐỘNG CỦA ISTECH</h3>
          <p className="paragraph">
            ISTECH được thành lập từ các bạn sinh viên có đam mê về nghiên cứu
            khoa học nói chung, là các đại diện đến từ các ngành học khác nhau,
            từ đó, trong tương lai sẽ giúp CLB phát huy hết tiềm năng của các
            thành viên trong BTC, cũng như nắm bắt được xu hướng, mức độ quan
            tâm chung của sinh viên, thành viên tham gia ISTECH. Tuy nhiên, CLB
            hoạt động dựa trên nguyên tắc tự nguyện tham gia của các thành viên,
            dân chủ trong hoạt động và quản lý tập trung.
          </p>
        </div>
      </section>
      <section className="box">
        <div className="flex image">
          <h5 className="title">04.</h5>
          <h3 className="title purpose">HƯỚNG ĐI TRONG NĂM TỚI CỦA ISTECH</h3>
          <p className="paragraph">
            Tổ chức các buổi nói chuyện nhỏ, tuyên truyền thông qua facebook,
            qua lớp trưởng các lớp . Hướng chủ yếu vào sinh viên năm nhất. Giúp
            các sinh viên vượt qua sự bỡ ngỡ trước các môn học đại cương khó và
            lạ bằng cách chia sẻ những gì mình đã tích lũy được. Cùng với đó là
            bước đầu định hướng cho các em tích lũy kiến thức khoa học bên ngoài
            bài vở
          </p>
        </div>
        <div className="image">
          <img src="https://istech.vn/wp-content/uploads/2021/08/120384982_175120707498300_3370841432766370680_n-1-1-1024x768.jpg" />
        </div>
      </section>
      <div className="background-image2">
        <h6 className="apply">ĐĂNG KÝ THÀNH VIÊN</h6>
        <h2 className="apply">Ứng Tuyển Ngay</h2>
        <div className="apply">
          <button className="btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default About;
