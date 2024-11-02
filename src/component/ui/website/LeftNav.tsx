import React from "react";
import "../../../style/css/profile/barLeftProfile.css";
import { Link } from "react-router-dom";

type Props = {};

const LeftNav = (props: Props) => {
  return (
    <div className="barLeftProfile">
      <section>
        <Link to={"../"}>
          <span>Trước</span>
        </Link>
      </section>
      <div>
        <Link to={"/profile/account"}>Tài khoản của bạn</Link>
      </div>
      <div>
      <Link to={"/profile/favovite"}>Nơi lưu trú bạn thích</Link>
      </div>
      <div>
      <Link to={"/profile/myhotel"}>Khách sản đã đặt</Link>
      </div>
      <div>
      <Link to={"/profile/seting"}>Cài đặt chung</Link>
      </div>
      <section>
        <Link to={"../"}>
          <span>Đăng xuất</span>
        </Link>
      </section>
    </div>
  );
};

export default LeftNav;
