import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="logo">
        <img src="../images/logo.jfif" alt="error" />
      </div>
      <nav>
        <ul className="nav1">
          <li className="menu">
            <a href="">
              <i className="fa-solid fa-heart"></i>yeu thich
            </a>
          </li>
          <li className="menu">
            <a href="">
              <i className="fa-solid fa-user"></i>tai khoan
            </a>
          </li>
          <li id="menu" className="menu">
            <a href="">
              <i className="fa-solid fa-bars"></i>menu
            </a>
            <ul className="nav2">
              <li>
                <a href="">xem gan day</a>
              </li>
              <li>
                <a href="">ho tro</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
