import React from 'react'
import "../../../style/css/login.css";
type Props = {}

const Login = (props: Props) => {
  return (
  <div className="container">
  <div className="box">
    {/* Left Side (Image and Info) */}
    <div className="left-side">
      <img src="../images/banner1.jpg" alt="Beach" className="image" />
      <div className="text-container">
        <h2 className="title">Bạn có thể:</h2>
        <ul className="list">
          <li className="list-item">
            Tiết kiệm hơn nữa với giá cho thành viên từ trang web đối tác
            của chúng tôi
          </li>
          <li className="list-item">
            Dễ dàng xem lại nơi lưu trú đã lưu từ bất cứ thiết bị nào
          </li>
        </ul>
      </div>
    </div>
    {/* Right Side (Login Form) */}
    <div className="right-side">
      <div className="logo-container">
        <img src="../images/logo.jfif" className="logo" />
        <h2 className="form-title">Đăng nhập tài khoản của bạn</h2>
      </div>
      <form action="#" method="POST" className="form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-input" placeholder="Nhập địa chỉ email" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Mật Khẩu</label>
          <input type="email" id="email" className="form-input" placeholder="Nhập mật khẩu" required />
        </div>
        <button type="submit" className="submit-button">Tiếp tục</button>
      </form>
      <div className="text-center">hoặc tiếp tục với</div>
      <div className="social-buttons">
        <button className="social-button">
          <i className="fa-brands fa-google" />
          Google
        </button>
        <button className="social-button">
          <i className="fa-brands fa-apple" />
          Apple
        </button>
        <button className="social-button">
          <i className="fa-brands fa-facebook" />
          Facebook
        </button>
      </div>
      <p className="terms">
        Bằng việc tạo tài khoản, bạn đồng ý với
        <a href="#" className="link">Chính sách riêng tư</a> và
        <a href="#" className="link">Điều khoản sử dụng</a>.
      </p>
    </div>
  </div>
</div>

  )
}

export default Login