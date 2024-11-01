import React from 'react'
import "../../style/css/orderPage.css";

type Props = {}

const Order = (props: Props) => {
  return (
   <main>
  <div className="order">
    <div className="order_left">
      <div className="order_left_boxone">
        <h3>Khách sạn: <span>Khách sạn Song Anh</span></h3>
        <p>36 Nguyễn Thái Bình, Quận Tân Bình, TP. Hồ Chí Minh, Việt Nam</p>
        <div>
          <p><span>6.0</span> Dễ chịu</p>
          <p>6 đánh giá</p>
        </div>
        <section>
          <p>WiFi miễn phí</p>
          <p>Xe đưa đón sân bay</p>
          <p>Chỗ đỗ xe</p>
        </section>
      </div>
      <div className="order_left_boxtwo">
        <h3>Chi tiết đặt phòng của bạn</h3>
        <div className="order_left_boxtwo_time">
          <div>
            <h5>Nhận phòng</h5>
            <p>T4, 23 tháng 10 2024</p>
            <p>11:30 – 12:00</p>
          </div>
          <div>
            <h5>Trả phòng</h5>
            <p>T4, 24 tháng 10 2024</p>
            <p>11:30 – 12:00</p>
          </div>
        </div>
        <h5 className="order_left_boxtwo_text">
          Tổng thời gian lưu trú: <span>1 đêm</span>
        </h5>
        <div className="order_left_boxtwo_room">
          <h5>Bạn đã chọn :</h5>
          <p>1: Phòng Giường Đôi</p>
          <p>1 :Phòng Giường Đơn</p>
        </div>
      </div>
      <div className="order_left_boxthree">
        <h3>Tổng giá phòng: <span>VND 356.000</span></h3>
        <section>
          <p>Mã khuyến mãi(nếu có):</p>
          <div>
            <input type="text" placeholder="vui lòng nhập vào đây" />
            <button>xác nhận</button>
          </div>
        </section>
        <h2>Tổng cộng: <span>VND 356.000</span></h2>
      </div>
      <div className="order_left_boxfour">
        <div>
          <h3>Lịch thanh toán của bạn</h3>
          <p>Không cần thanh toán hôm nay. Bạn sẽ trả khi đến nghỉ.</p>
        </div>
        <hr />
        <div>
          <h3>Chi phí hủy là bao nhiêu?</h3>
          <p>VND 356.000</p>
        </div>
      </div>
    </div>
    <div className="order_right">
      <div className="order_right_boxone">
        <p>
          <i className="fa-regular fa-user" /><a >Đăng nhập</a> để đặt
          phòng với thông tin đã lưu của bạn hoặc <a >đăng ký</a> để
          quản lý các đặt phòng của bạn mọi lúc mọi nơi!
        </p>
      </div>
      <div className="order_right_boxtwo">
        <h3>Nhập thông tin chi tiết của bạn</h3>
        <div className="order_right_boxtwo_before">
          <p>
            <i className="fa-solid fa-exclamation" />Gần xong rồi! Chỉ cần
            điền phần thông tin <span>*</span> bắt buộc Vui lòng điền thông
            tin bằng Tiếng Việt hoặc Tiếng Anh
          </p>
        </div>
        <div className="order_right_boxtwo_under">
          <section>
            <label >Họ <span>*</span></label>
            <input type="text" />
          </section>
          <section>
            <label > Tên <span>*</span></label>
            <input type="text" />
          </section>
          <section>
            <label >Địa chỉ email <span>*</span></label>
            <input type="text" placeholder="Chú ý tránh lỗi chính tả" />
          </section>
          <section>
            <label >Điện thoại (ưu tiên số ĐTDĐ) <span>*</span></label>
            <input type="text" />
          </section>
          <hr />
          <div>
            <h5>Bạn đặt phòng cho ai?</h5>
            <input type="radio" />Tôi là khách lưu trú chính
            <br />
            <input type="radio" />Đặt phòng này là cho người
            khác
            <h5>Bạn sắp đi công tác?</h5>
            <input type="radio"  />Đúng
            <input type="radio" />Sai
          </div>
        </div>
      </div>
      <div className="order_right_boxthree">
        <h3>Thêm vào kỳ nghỉ</h3>
        <div className="order_right_boxthree_content">
          <div>
            <section>
              <button />
              <h5>
                Tôi muốn đặt xe đưa đón sân bay
                <span>miễn phí</span>
                <p>
                  Chúng tôi sẽ cho chỗ nghỉ biết bạn quan tâm đến dịch vụ
                  này để họ có thể cung cấp thêm chi tiết cho bạn.
                </p>
              </h5>
            </section>
            <i className="fa-solid fa-plane-departure" />
          </div>
          <div>
            <section>
              <button />
              <h5>
                Tôi muốn thuê xe với ưu đãi 10%
                <p>
                  Tiết kiệm 10% cho tất cả xe thuê khi bạn đặt với chúng
                  tôi. Chúng tôi sẽ thêm các lựa chọn thuê xe vào xác nhận
                  đặt phòng của bạn.
                </p>
              </h5>
            </section>
            <i className="fa-solid fa-car" />
          </div>
          <div>
            <section>
              <button />
              <h5>
                Bạn muốn đặt trước taxi hoặc xe đưa đón?
                <p>
                  Hãy tránh những điều bất ngờ - đi từ sân bay đến chỗ nghỉ
                  một cách thuận lợi. Chúng tôi sẽ thêm lựa chọn taxi vào
                  xác nhận đặt phòng của bạn.
                </p>
              </h5>
            </section>
            <i className="fa-solid fa-taxi" />
          </div>
        </div>
      </div>
      <div className="order_right_boxfour">
        <h3><a >Tiếp theo: Chi tiết cuối cùng</a> <i className="fa-solid fa-chevron-right" /></h3>
      </div>
    </div>
  </div>
</main>

  )
}

export default Order