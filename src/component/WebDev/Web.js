import React from 'react'

import InfoMember from '../infoMember.js';
import NearHeading from '../NearHeading.js';

function Web() {
  const banWeb = [
    {
      name:"Phạm Đức Nghĩa",
      img: `https://istech.vn/wp-content/uploads/2021/08/Pham-Duc-Nghia.jpg`,
      rule:"Leader",
      des:`I'm always looking forward to get hands on real-life projects in order to gain experiences, learn new concepts and to arrive with finest solution.`,
      gmail:"mpdn99@gmail.com",
      fb:"http://https://www.facebook.com/mpdn99"
    },
    {
      name:"Trần Việt Long",
      img: `https://istech.vn/wp-content/uploads/2021/08/tvl.jpg`,
      rule:"Member",
      des:`Responsibility, Introverted, Active`,
      gmail:"tranvietlong2k@gmail.com",
      fb:"https://www.facebook.com/vietlog2k"
    },
    {
      name:"Nguyễn Nam Khánh",
      img: `https://i.pinimg.com/564x/22/b6/7e/22b67e25ba4dc529a1e462d0c9b5e33a.jpg`,
      rule:"Member",
      des:`I'm always looking forward to get hands on real-life projects in order to gain experiences, learn new concepts and to arrive with finest solution.`,
      gmail:"khanh28112001@gmail.com",
      fb:"https://www.facebook.com/khanh.nguyennam.5496/"
    },
    {
      name:"Phạm Gia Khiêm",
      img: `https://i.pinimg.com/564x/22/b6/7e/22b67e25ba4dc529a1e462d0c9b5e33a.jpg`,
      rule:"Member",
      des:`Responsibility, Introverted, Active`,
      gmail:"",
      fb:"https://www.facebook.com/Khiem.Black"
    },
    {
      name:"Đào Quý Tiến",
      img: `https://i.pinimg.com/564x/22/b6/7e/22b67e25ba4dc529a1e462d0c9b5e33a.jpg`,
      rule:"Member",
      des:`I'm always looking forward to get hands on real-life projects in order to gain experiences, learn new concepts and to arrive with finest solution.`,
      gmail:"",
      fb:"https:https://www.facebook.com/dopsineee"
    },
    {
      name:"Trần Văn Tưởng",
      img: `https://i.pinimg.com/564x/22/b6/7e/22b67e25ba4dc529a1e462d0c9b5e33a.jpg`,
      rule:"Member",
      des:`Responsibility, Introverted, Active`,
      gmail:"tranvantuong2k3@gmail.com",
      fb:"https://www.facebook.com/profile.php?id=100007365529028"
    },
    {
      name:"Nguyễn Á Châu",
      img: `https://i.pinimg.com/564x/22/b6/7e/22b67e25ba4dc529a1e462d0c9b5e33a.jpg`,
      rule:"Member",
      des:`I'm always looking forward to get hands on real-life projects in order to gain experiences, learn new concepts and to arrive with finest solution.`,
      gmail:"",
      fb:"https://www.facebook.com/chaunguyen03"
    },
  ]
  return (
    <div>
      <NearHeading ct={'Web Dev'}/>

      <div className="w-full">
        {banWeb.map((item, index) => {
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

export default Web;