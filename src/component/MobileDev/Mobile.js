import React from 'react'

import InfoMember from '../infoMember.js';
import NearHeading from '../NearHeading.js';

function Mobile() {
  const banMobile = [
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
      rule:"Sub-Leader",
      des:`Responsibility, Introverted, Active`,
      gmail:"tranvietlong2k@gmail.com",
      fb:"https://www.facebook.com/vietlog2k"
    },
    {
      name:"Phạm Đức Nghĩa",
      img: `https://i.pinimg.com/564x/22/b6/7e/22b67e25ba4dc529a1e462d0c9b5e33a.jpg`,
      rule:"Member",
      des:`I'm always looking forward to get hands on real-life projects in order to gain experiences, learn new concepts and to arrive with finest solution.`,
      gmail:"mpdn99@gmail.com",
      fb:"http://https://www.facebook.com/mpdn99"
    },
  ]
  return (
    <div>
      <NearHeading ct={'Mobile Dev'}/>

      <div className="w-full">
        {banMobile.map((item, index) => {
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

export default Mobile;