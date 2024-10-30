import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="footer_above">
        <img src="../images/logo.jfif" alt="" />
        <div>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div className="footer_under">
        <div>
          <p>Công ty</p>
          <p>Cơ hội việc làm</p>
          <p>Báo chí</p>
          <p>Ứng dụng di động - tìm kiếm mọi lúc, mọi nơi</p>
        </div>
        <div>
          <p>Hỗ trợ</p>
          <p>Cách trivago hoạt động</p>
          <p>Điều khoản sử dụng</p>
          <p>Thông tin Pháp lý</p>
          <p>Tùy chọn cookie</p>
          <p>Thông báo bảo mật</p>
        </div>
        <div>
          <h3>
            Tìm nguồn cảm hứng đặc biệt cho kỳ nghỉ tiếp theo của bạn - đăng ký
            nhận bản tin của chúng tôi.
          </h3>
          <form action="">
            <input type="text" placeholder="Địa chỉ email" />
            <button type="button">Dang ky</button>
          </form>
          <p className="footer_under_text">
            trivago N.V., Kesselstraße 5 – 7, 40221 Düsseldorf, CHLB Đức
            Copyright 2024 trivago | Bảo lưu toàn quyền.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
