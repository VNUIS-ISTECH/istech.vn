import React from 'react'

import InfoMember from '../infoMember.js';
import NearHeading from '../NearHeading.js';

function Game() {
  const banGame = [
    {
      name:"Nguyễn Minh Tuấn",
      img: `https://istech.vn/wp-content/uploads/elementor/thumbs/241480916_2973302786246888_3845085733334148505_n-pcut0fdbsmv76ovubrwu35txqrxsk679uyik962wz4.png`,
      rule:"Leader",
      des:`Friendly, Easy to work with, Chill`,
      gmail:"tuannm250100@gmail.com",
      fb:"https://www.facebook.com/Sfish.2501/"
    },
    {
      name: "Trần Song Hiếu",
      img:"https://istech.vn/wp-content/uploads/elementor/thumbs/Tran-Song-Hieu-1-pbnm7ffq0e1v7uscbn02g940whpztua1yc8ktjsx2o.jpg",
      rule:"Member",
      des:"Easy-going, sociable, hard-working",
      gmail:"cunratdeptrai@icloud.com",
      fb:"ttps://www.facebook.com/songhieu.tran.90/",
    },
    {
      name: "Nguyễn Bảo Quang",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/Nguyen-Bao-Quang-pbnm2s4f00we79dn1ptb0chm4kf13ym43jiz8w7rt4.jpg",
      rule:"Member",
      des:"High, Higher, Get high",
      gmail:"nguyenbaoquang1@gmail.com",
      fb:"https://www.facebook.com/code7355608/"
    },
    {
      name: "Phạm Đức Long",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/Pham-Duc-Long-pbnm7uh51qmgdm6hvti3k5beennv8zxrceochz6mb4.jpg",
      rule:"Member",
      des:"mystery and fall in luv",
      gmail:"lamhoban07@gmail.com",
      fb:"https://www.facebook.com/diap.02/"
    },
    {
      name: "Cao Sỹ Minh",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/Cao-Sy-Minh-1-pbnlybe1r7ksny0uj779s1w5l0mw7h3qd8k4bzbbe8.png",
      rule:"Member",
      des:"I am an energetic and proactive university student with extreme determination and robust problem-solving skills, who thrives for a chance to learn project management experience.",
      gmail:"caosminh1@gmail.com",
      fb:"https://www.facebook.com/profile.php?id=100009352363973"
    },
    {
      name: "Võ Lê Phương",
      img: "https://istech.vn/wp-content/uploads/elementor/thumbs/Vo-Le-Phuong-pblyviuc565papb4idr6l8ouc9bsxyvsal8ee6qc1c.jpg",
      rule:"Member",
      des:"Communicative , Dependable , Innovative",
      gmail:"volephuong3502@gmail.com",
      fb:"http://facebook.com/phuong.vole.10"
    },
  ]
  return (
    <div>
      <NearHeading ct={'Game Dev'}/>

      <div className="w-full">
        {banGame.map((item, index) => {
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

export default Game;