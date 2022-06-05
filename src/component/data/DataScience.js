import React from 'react'

import InfoMember from '../infoMember.js';
import NearHeading from '../NearHeading.js';

function DataScience() {
  const banDataScience = [
    {
      name:"Lê Anh Đức",
      img: `https://istech.vn/wp-content/uploads/2021/08/11078055_1627604820809963_7245158065255127872_o-1-1-768x768.jpg`,
      rule:"Chủ Nhiệm CLB",
      des:`I'm always looking forward to get hands on real-life projects in order to gain experiences, learn new concepts and to arrive with finest solution.`,
      gmail:"ladcva@yahoo.com",
      fb:"https://www.facebook.com/ladcva"
    },
    {
      name: "Trần Quốc Đăng",
      img:"https://istech.vn/wp-content/uploads/elementor/thumbs/Tran-Quoc-Dang-pbl20rjah11uapbxzmm5m7fh2wzscwew0h8c0uf3hs.jpg",
      rule:"Leader",
      des:"Funny, Friendly, Active",
      gmail:"dangcucvip@gmail.com",
      fb:"https://www.facebook.com/Collideee/",
    },
    {
      name: "Lê Thị Nhung",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/Le-Thi-Nhung-scaled-pbl23k40savisz9uoc38j01sn5828ii62b1adg9z00.jpg",
      rule:"Member",
      des:"Picky, Active, Friendly",
      gmail: "lethinhung9819@gmail.com",
      fb:"https://www.facebook.com/LTNhungPii/"
    },
    {
      name: "Nguyễn Trọng Hiếu",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/Nguyen-Trong-Hieu-pbljnf6ayzujcdgh1gmsnjwobquojqyflqjo5neoa8.jpg",
      rule:"Member",
      des:"Friendly, Active, Noob",
      gmail:"tomsay2002@gmail.com",
      fb:"https://www.facebook.com/haufff/"
    }
  ]
  return (
    <div>
      <NearHeading ct={'DataScience'}/>

      <div className="w-full">
        {banDataScience.map((item, index) => {
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

export default DataScience;