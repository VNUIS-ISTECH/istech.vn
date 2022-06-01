import React from 'react'

import InfoMember from '../infoMember.js';
import NearHeading from '../NearHeading.js';

function Media() {
  const banMedia = [
    {
      name:"Hoàng Thị Ngọc Thư",
      img: `https://istech.vn/wp-content/uploads/elementor/thumbs/Hoang-Thi-Ngoc-Thu--pbl1ti85p344n3vidhnvd1dbxsrqx1licjvclx6jjk.jpg`,
      rule:"Leader",
      des:`Patient, easy going and introverted`,
      gmail:"hoangngocthu05@gmail.com",
      fb:"https://www.facebook.com/htngocthu16052001"
    },
    {
      name: "Lê Thúy Hằng",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/53d595e42c62db3c8273-pblytpzh1lox1lxc13pxb721co7h6uqb1o7wa3ehyo.jpg",
      rule:"Member",
      des:"Confident, easy going, cool",
      gmail:"thuyhang22bearstore@gmail.com",
      fb:"https://www.facebook.com/jolly.le"
    },
    {
      name: "Đinh Chính Thanh Sang",
      img:"https://istech.vn/wp-content/uploads/elementor/thumbs/Dinh-Chinh-Thanh-Sang-pbl1ug2cj4eg92icvwafustxbo4ym5buh7ctvvsdbk.jpg",
      rule:"Member",
      des:"Extroverted, easy going but rational",
      gmail:"vannguyenhai14@gmail.com",
      fb:"https://www.facebook.com/Shinbe2301/",
    },
    {
      name: "Hoàng Phúc Nhân",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/Hoang-Phuc-Nhan-pbl1uu5xdmxr37xvlkdue79u8g7gtlvtj554317gq8.jpeg",
      rule:"Member",
      des:"Introvert, sensitive, easygoing",
      gmail:"hoangphucnhan190701@gmail.com",
      fb:"https://www.facebook.com/hoangphucnhann"
    },
    {
      name: "Nguyễn Minh Tuấn",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/Nguyen-Minh-Tuan-pbl29rtlyvdrk68we0sg0fli0ulf4h6a92aulb29v4.jpg",
      rule:"Member",
      des:"friendly, easy to work with, chill",
      gmail:"tuannm250100@gmail.com",
      fb:"https://www.facebook.com/Sfish.2501/"
    },
    {
      name: "Đỗ Duy Sơn",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/Do-Duy-Son-pbl56ol4r6zvdduxsdbfayjkv1i88bns0bjsv3ife8.jpg",
      rule:"Member",
      des:"Friendly, ambivert, shy",
      gmail:"sonduy1103@gmail.com",
      fb:"https://www.facebook.com/dsownn"
    },
    {
      name: "Nguyễn Chí Công",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/1629021022371-scaled-pbnlpczen1bg1p15ttu8it91turzvajsswskq2lcog.jpg",
      rule:"Member",
      des:"easy going, passionate with music, love animal",
      gmail:"ngncongchi174@gmail.com",
      fb:"https://bitly.com.vn/4ilbdr"
    },
    {
      name: "Dương Thị Huyền Trang",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/Duong-Thi-Huyen-Trang--pbnlq1f7kq8wfk1nv4ejbn319vfjff8tk9r779l46o.jpg",
      rule:"Member",
      des:"Extrovert, friendly, funny",
      gmail:"duongtrang1106@gmail.com",
      fb:"https://www.facebook.com/trang.duongthihuyen.735"
    },
    {
      name: "Nguyễn Quốc Bảo",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/Nguyen-Quoc-Bao-3-scaled-pblidc55werg4meb51i9wok3unzu5z06xn3o49qjcg.jpg",
      rule:"Member",
      des:"chill, easy going, photography nerd.",
      gmail:"baonguyenquoc69@gmai.com",
      fb:"https://www.facebook.com/lifeizded/"
    },
    {
      name: "Nguyễn Thu Giang",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/Nguyen-Thu-Giang-pbnlqn1hxx2hul69cvqyezmmxqgzcgmnb8rd8mp27k.jpg",
      rule:"Friendly, shy, cool",
      des:"Introvert, sensitive, easygoing",
      gmail:"thugiang.myname@gmail.com",
      fb:"https://www.facebook.com/thjangg/"
    },
    {
      name: "Đỗ Trung Hiếu",
      img: "https://i.pinimg.com/564x/22/b6/7e/22b67e25ba4dc529a1e462d0c9b5e33a.jpg",
      rule:"Member",
      des:"Sociable, confident, Optimistic",
      gmail:"trunghieubg2000@gmail.com",
      fb:"https://www.facebook.com/satan.dotrhieu/"
    },

  ]
  return (
    <div>
      <NearHeading ct={'Media Team'}/>

      <div className="w-full">
        {banMedia.map((item, index) => {
          if (index % 2 === 0) {
            return <InfoMember key={index} information={item} type="left" />;
          } else {
            return <InfoMember key={index} information={item} type="right" />;
        }
        })}
      </div>
    </div>
  );
}

export default Media;