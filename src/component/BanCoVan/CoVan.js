import React from 'react'

import InfoMember from '../infoMember';
import NearHeading from '../NearHeading';

function CoVan() {
  const banCoVan = [
    {
      name:"PGS.TS. Lê Trung Thành",
      img: `https://istech.vn/wp-content/uploads/2021/08/le-trung-thanh.jpg`,
      rule:"Chủ Nhiệm Trường Quốc Tế - ĐHQGHN , Bí Thư Đảng Ủy",
      des:``,
      gmail:"thanh.le@vnu.edu.vn",
      fb:""
    },
    {
      name:"TS. Trần Đức Quỳnh",
      img: `https://i.pinimg.com/564x/5d/c3/3c/5dc33c484366b26eff65d9a69c40b175.jpg`,
      rule:"Chủ Nhiệm Bộ Môn KHTN&CN Khoa Quốc Tế - ĐHQGHN , Đảng Ủy Viên Trường Quốc Tế",
      des:``,
      gmail:"quynhtd@isvnu.vn",
      fb:""
    },
    {
      name:"ThS. Nguyễn Văn Tánh",
      img: `https://istech.vn/wp-content/uploads/elementor/thumbs/tanh-nguyen-pblkpna0wg6bhhxltzgm1wnhzug1kmpguxmiqqqb8w.jpg`,
      rule:"Bí Thư Đoàn Thanh Niên Trường Quốc Tế - ĐHQGHN",
      des:``,
      gmail:"tanhnv@isvnu.vn",
      fb:""
    }
  ]
  return (
    <>
    <NearHeading ct={'Ban Cố Vấn'} />
    <div className="w-full">
        {banCoVan.map((item, index) => {
          if (index % 2 === 0) {
            return <InfoMember key={index} information={item} type="left" />;
          } else {
            return <InfoMember key={index} information={item} type="right" />;
        }
        })}
      </div>
  </>
  )
}

export default CoVan