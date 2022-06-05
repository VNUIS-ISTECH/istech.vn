import React from 'react'

import InfoMember from '../infoMember.js';
import NearHeading from '../NearHeading';

function ChuNhiem() {
  const banChuNhiem = [
    {
      name:"Lê Anh Đức",
      img: `https://istech.vn/wp-content/uploads/2021/08/11078055_1627604820809963_7245158065255127872_o-1-1-768x768.jpg`,
      rule:"Chủ Nhiệm CLB",
      des:`I'm always looking forward to get hands on real-life projects in order to gain experiences, learn new concepts and to arrive with finest solution.`,
      gmail:"ladcva@yahoo.com",
      fb:"https://www.facebook.com/ladcva"
    },
    {
      name: "Nguyễn Hải Vân",
      img:"https://i.pinimg.com/564x/22/b6/7e/22b67e25ba4dc529a1e462d0c9b5e33a.jpg",
      rule:"Phó Chủ Nhiệm CLB",
      des:"Introvert, Productivity, Easy-going",
      gmail:"vannguyenhai14@gmail.com",
      fb:"",
    },
    {
      name: "Nguyễn Phương Anh",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/Nguye%CC%82%CC%83n-Phu%CC%9Bo%CC%9Bng-Anh-pbb8llsm6806hqfiaz0e7und17tso0coqop7gj6agg.jpeg",
      rule:"Phó Chủ Nhiệm CLB",
      des:" I am an energetic and proactive university student with extreme determination and robust problem-solving skills, who thrives for a chance to learn project management experience.",
      gmail:"phuonganhreal184@gmail.com",
      fb:"https://www.facebook.com/fuongenggg/"
    },
  ]
  return (
    <div>
      <NearHeading ct={'Ban Chủ Nhiệm'}/>

      <div className="w-full">
        {banChuNhiem.map((item, index) => {
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

export default ChuNhiem;
