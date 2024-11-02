import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <header>
        <div className="logo">
          <Link to={"/"}><img src="../images/logo.jfif" alt="error" /></Link>
        </div>
        <nav>
          <ul className="nav1">
            <li className="menu">
            <Link to={"/profile/account"}>
                <i className="fa-solid fa-user" />
                Yêu thích
              </Link>
            </li>
            <li className="menu">
              <Link to={"/profile/account"}>
                <i className="fa-solid fa-user" />
                Tài khoản
              </Link>
            </li>
            <li id="menu" className="menu">
              <a>
                <i className="fa-solid fa-bars" />
                Menu
              </a>
              <ul className="nav2">
                <li>
                  <a>Khách sạn đã đặt</a>
                </li>
                <li>
                  <a>Cài đặt</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <hr />
    </>
  );
};

export default Header;
