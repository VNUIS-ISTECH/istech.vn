import style from "./App.css";
import AboutPage from "./components/AboutPage";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import ChuNhiem from "./component/BanChuNhiem/ChuNhiem.js";
import CoVan from "./component/BanCoVan/CoVan.js";
import DataScience from "./component/DataScience/DataScience.js";
import Game from "./component/GameDev/Game.js";
import Media from "./component/MediaTeam/Media.js";
import Mobile from "./component/MobileDev/Mobile.js";
import Web from "./component/WebDev/Web.js";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div className="navBarTrash">
          <li>
            <Link to="/chunhiem">
              <div>Ban Chủ nhiệm</div>
            </Link>
          </li>
          <li>
            <Link to="/covan">
              <div>Ban Cố Vấn</div>
            </Link>
          </li>
          <li>
            <Link to="/web">
              <div>Web</div>
            </Link>
          </li>
          <li>
            <Link to="/mobile">
              <div>Mobile</div>
            </Link>
          </li>
          <li>
            <Link to="/game">
              <div>Game</div>
            </Link>
          </li>
          <li>
            <Link to="/datascience">
              <div>DataScience</div>
            </Link>
          </li>
          <li>
            <Link to="/media">
              <div>Media</div>
            </Link>
          </li>
        </div>
      </nav>

      <Routes>
        <Route path="/chunhiem" element={<ChuNhiem />} />
        <Route path="/covan" element={<CoVan />} />
        <Route path="/web" element={<Web />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/game" element={<Game />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/media" element={<Media />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <div className="nearFooter">
        <div className="wrapNearFooter">
          <h6 className="nearFooterRes">Đăng kí thành viên</h6>
          <h2 className="NearFooterH2">Ứng Tuyển Ngay</h2>
          <p className="nearFooterTitle">
            Chúng tôi luôn tìm kiếm những tài năng trẻ với những mong muốn về
            phát triển bản thân trong lĩnh vực Công nghệ Thông tin và Khoa học
            Máy tính
          </p>
          <button className="nearFooterBtn">
            <a href="https://istech.vn/gen-3/" className="nearFooterA">
              Apply Now
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
