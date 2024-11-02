import React from "react";
import "../../../style/css/profile/seting.css";
import LeftNav from "../../../component/ui/website/LeftNav";

type Props = {};

const Seting = (props: Props) => {
  return (
    <main className="profile">
      <LeftNav />
      <div className="seting">
        <h2>Cài đặt chung</h2>
        <p>Cá nhân hóa tài khoản để phù hợp với nhu cầu của bạn.</p>
        <div>
          <section>
            <p>Tiền tệ:</p>
            <select  >
              <option >VND</option>
              <option >VND</option>
            </select>
          </section>
          <section>
            <p>Ngôn ngữ:</p>
            <select  >
              <option >Việt nam</option>
              <option >Việt nam</option>
            </select>
          </section>
          <button>Xác nhận thay đổi</button>
        </div>
      </div>
    </main>
  );
};

export default Seting;
