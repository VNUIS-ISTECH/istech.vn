import React from 'react'

function CoVan() {
  return (
    <>
    <div className="subHeading">
      <h1>Ban Cố Vấn</h1>
    </div>

    <section className="sectionAva">
      <div className="aImg">
        <img
          src="https://istech.vn/wp-content/uploads/2021/08/le-trung-thanh.jpg"
          alt="Avatar" className="iMG"
        ></img>
      </div>

      <div className="info">
        <div className="wrapContent contentRight ">
        <h3>PGS.TS. Lê Trung Thành</h3>
        <h5>Chủ Nhiệm Trường Quốc Tế - ĐHQGHN , Bí Thư Đảng Ủy</h5>
        <p className="title"></p>
        <h5>Liên hệ</h5>
        <p className="title subTitle">
          Email: <a href="mailto:thanh.le@vnu.edu.vn" className="aDecor">thanh.le@vnu.edu.vn</a>
        </p>
        <p className="title subTitle">
          Phone number: +84-355 808 08 | +84-4-355 759 92
        </p>
        </div>
      </div>
    </section>

    <section className="sectionAva">
    <div className="aImg  imgLeft">
        <img
          src="https://i.pinimg.com/564x/5d/c3/3c/5dc33c484366b26eff65d9a69c40b175.jpg"
          alt="Avatar" className="iMG"
        ></img>
      </div>
      
      <div className="info">
       <div className="wrapContent contentLeft">
        <h3>TS. Trần Đức Quỳnh</h3>
        <h5>Chủ Nhiệm Bộ Môn KHTN&CN Khoa Quốc Tế - ĐHQGHN , Đảng Ủy Viên Trường Quốc Tế</h5>
        <p className="title"></p>
        <h5>Liên hệ</h5>
        <p className="title  subTitle">
          Email: <a href="mailto:quynhtd@isvnu.vn" className="aDecor">quynhtd@isvnu.vn</a>
        </p>
        <p className="title  subTitle">
        </p>
        </div>
      </div>
     
    </section>

    <section className="sectionAva">
      <div className="aImg">
        <img
          src="https://istech.vn/wp-content/uploads/elementor/thumbs/tanh-nguyen-pblkpna0wg6bhhxltzgm1wnhzug1kmpguxmiqqqb8w.jpg"
          alt="Avatar" className="iMG"
        ></img>
      </div>

      <div className="info">
        <div className="wrapContent contentRight ">
        <h3>ThS. Nguyễn Văn Tánh</h3>
        <h5>Bí Thư Đoàn Thanh Niên Trường Quốc Tế - ĐHQGHN</h5>
        <p className="title"></p>
        <h5>Liên hệ</h5>
        <p className="title subTitle">
          Email: <a href="mailto:tanhnv@isvnu.vn" className="aDecor">tanhnv@isvnu.vn</a>
        </p>
        <p className="title subTitle">
        </p>
        </div>
      </div>
    </section>
  </>
  )
}

export default CoVan