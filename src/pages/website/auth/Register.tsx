import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import User from "../../../interface/user";
import instance from "../../../config/axios";

type Props = {};

const Register = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const navigate=useNavigate()
  const onsubmit = async (item: User) => {
    try {
      const user = await instance.post(
        `/auth/signup?phone=${item.phone}&password=${item.password}&name=${item.name}
        &address=${item.address}&email=${item.email}&password_confirmation=${item.password_confirmation}`
      );
      alert("chuyển đến trang đăng nhập!");
    navigate("/login");
    } catch (error: any) {
      if (error.response.status === 422) {
        console.log(error.response.data);
      }else{
        console.log(error.response.data);
      }
    }
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
            <h2 className="form-title">Đăng kí tài khoản của bạn</h2>
            <p>
              Đã có tài khoản <Link to={`/login`}>đăng nhập tại đây</Link>
            </p>
          </div>
          <form className="form" onSubmit={handleSubmit(onsubmit)}>
            <div className="form-group">
              <label className="form-label">Họ và Tên </label>
              <input
                type="text"
                className="form-input"
                placeholder="Nhập Họ và Tên của bạn"
                {...register("name")}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">phone</label>
              <input
                type="text"
                className="form-input"
                placeholder="Nhập địa chỉ phone"
                {...register("phone")}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">email</label>
              <input
                type="text"
                className="form-input"
                placeholder="Nhập địa chỉ email"
                {...register("email")}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">address</label>
              <input
                type="text"
                className="form-input"
                placeholder="Nhập địa chỉ address"
                {...register("address")}
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
            <div className="form-group">
              <label className="form-label">Nhập lại mật Khẩu</label>
              <input
                type="text"
                className="form-input"
                placeholder="Nhập mật khẩu"
                {...register("password_confirmation")}
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

export default Register;
