import React from "react";
import "../../../style/css/login.css";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../../config/axios";
import User from "../../../interface/user";
import { useForm } from "react-hook-form";
type Props = {};

const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const navigate = useNavigate();
  const onsubmit = async (item: any) => {
    const user = await instance.post(
      `/auth/login?phone=${item.phone}&password=${item.password}`
    );
    alert("chuyển về trang chủ!");
    navigate("/");
    console.log(user.data);
  };
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
            <p>
              Chưa có tài khoản <Link to={`/register`}>đăng kí tại đây</Link>
            </p>
          </div>
          <form className="form" onSubmit={handleSubmit(onsubmit)}>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-input"
                placeholder="Nhập địa chỉ Phone"
                {...register("phone")}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Mật Khẩu</label>
              <input
                type="text"
                className="form-input"
                placeholder="Nhập mật khẩu"
                {...register("password")}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Tiếp tục
            </button>
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
            <a href="#" className="link">
              Chính sách riêng tư
            </a>{" "}
            và
            <a href="#" className="link">
              Điều khoản sử dụng
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
