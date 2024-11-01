import React from "react";
import "../../../style/css/profile/account.css";
import LeftNav from "../../../component/ui/website/LeftNav";
type Props = {};

const Account = (props: Props) => {
  return (
    <main className="profile">
      <LeftNav />
      <div className="account">
        <h2>Tài khoản của bạn</h2>
        <p>Thông tin cá nhân</p>
        <form className="account_form">
          <div>
            <label>Tên riêng</label>
            <input type="text" defaultValue="Nguyen" />
          </div>
          <div>
            <label>Họ</label>
            <input type="text" defaultValue="Van" />
          </div>
          <button>Cập nhật thông tin cá nhân</button>
        </form>
      </div>
    </main>
  );
};

export default Account;
