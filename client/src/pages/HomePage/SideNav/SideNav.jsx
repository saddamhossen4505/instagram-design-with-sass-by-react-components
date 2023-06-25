import { useState } from "react";
import logo from "../../../../public/logo.png";
import Modal from "../../../components/Modal/Modal";

import "./SideNav.scss";

const SideNav = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {modalShow && <Modal hide={setModalShow} />}

      <div className="sideNav_area">
        <a href="/">
          <img src={logo} alt="" />
        </a>

        <div className="buttons_area">
          <div className="single_btn">
            <i className="bx bxs-home"></i>
            <button>Home</button>
          </div>

          <div className="single_btn">
            <i className="bx bx-search"></i>
            <button>Search</button>
          </div>

          <div className="single_btn">
            <i className="bx bxs-compass"></i>
            <button>Explore</button>
          </div>

          <div className="single_btn">
            <i className="bx bx-movie-play"></i>
            <button>Reels</button>
          </div>

          <div className="single_btn">
            <i className="bx bxl-telegram"></i>
            <button>Messages</button>
          </div>

          <div className="single_btn">
            <i className="bx bx-heart"></i>
            <button>Notifications</button>
          </div>

          <div className="single_btn" onClick={() => setModalShow(true)}>
            <i className="bx bx-shield-plus"></i>
            <button>Create</button>
          </div>

          <div className="single_btn">
            <img
              src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="
              alt=""
            />
            <button>Profile</button>
          </div>

          <div id="menuBtn" className="single_btn">
            <i className="bx bx-menu"></i>
            <button>More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
