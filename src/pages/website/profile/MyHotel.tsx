import React from "react";
import "../../../style/css/profile/mytrip.css";
import LeftNav from "../../../component/ui/website/LeftNav";

type Props = {};

const MyHotel = (props: Props) => {
  return (
    <main className="profile">
      <LeftNav />
      <div className="nomytrip">
        <div>
          <img src="../../images/travel.jpg" />
          <h3>Hiện bạn chưa đặt bất cứ khách sạn nào</h3>
          <a>Tìm khách sạn</a>
        </div>
      </div>
    </main>
  );
};

export default MyHotel;
