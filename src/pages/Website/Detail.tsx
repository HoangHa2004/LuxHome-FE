import React, { useState } from "react";
import "../../style/css/detailbooking.css";

type Props = {};

const URLImage = "../images/";
const DataImage = ["hotel2.jpg", "hotel3.jpg", "hotel4.jpg", "hotel5.jpg"];

const Detail = (props: Props) => {
  const [imgHotel, setImgHotel] = useState("hotel2.jpg");
  const [isImagesVisible, setIsImagesVisible] = useState(false);
  const [imgRoom, setImgRoom] = useState("hotel2.jpg");
  const changeImageMain = (img: any) => {
    setImgHotel(img);
  };
  const handleDisplayImage = () => {
    if (isImagesVisible === false) {
      setIsImagesVisible(true);
    } else {
      setIsImagesVisible(false);
    }
  };

  const changeImageRoom = (item: any) => {
    setImgRoom(item);
  };

  return (
    <main>
      <div className="detail_link">
        <a>
          Trang chu <i className="fa-solid fa-chevron-right" />
        </a>
        <a>
          khach san
          <i className="fa-solid fa-chevron-right" />
        </a>
        <a>
          TP.ho chi minh
          <i className="fa-solid fa-chevron-right" />
        </a>
        <p>Khách sạn Song Anh</p>
      </div>
      <div className="detail_block">
        <div>
          <div className="detail_block_one">
            <a href="#detail_block_two">tong quan</a>
            <a href="#detail_block_five">thong tin gia</a>
            <a href="#detail_block_four">tien ich</a>
            <a href="#detail_block_seven">danh gia cua khach(6)</a>
          </div>
          <div className="detail_block_two" id="detail_block_two">
            <div>
              <h3>Khách sạn Song Anh</h3>
              <section>
                <i className="fa-solid fa-location-dot" />
                <p>
                  36 Nguyễn Thái Bình, Quận Tân Bình, TP. Hồ Chí Minh, Việt Nam
                </p>
              </section>
            </div>
            <div>
              <i className="fa-regular fa-heart" />
              <a href="#detail_block_five">Xem phòng trống</a>
            </div>
          </div>
          <div className="detail_block_three">
            <div className="detail_block_three_display">
              <img id="mainImage" src={URLImage + imgHotel} />
            </div>
            <div className="detail_block_three_small">
              {DataImage.map((item) => {
                return (
                  <img
                    key={item}
                    src={URLImage + item}
                    onClick={() => changeImageMain(item)}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <div className="detail_block_four" id="detail_block_four">
              <div className="detail_block_four_desc">
                <p>
                  Nằm ở TP. Hồ Chí Minh, cách Chùa Giác Lâm 2.9 km, Khách sạn
                  Song Anh cung cấp chỗ nghỉ có Wi-Fi miễn phí và chỗ đậu xe
                  riêng miễn phí. Chỗ nghỉ cách Chợ Tân Định khoảng 4.3 km, Công
                  viên văn hóa Đầm Sen 4.4 km và Bảo tàng chứng tích chiến tranh
                  5.2 km. Chỗ nghỉ này cung cấp dịch vụ phòng, quầy lễ tân 24
                  giờ và phòng giữ hành lý cho khách. Tại khách sạn, mỗi phòng
                  đều được thiết kế có ban công. Tại Khách sạn Song Anh, các
                  phòng đều có điều hòa và TV màn hình phẳng.Chỗ nghỉ cách Dinh
                  Thống Nhất 5.6 km và Trung Tâm Thương Mại Diamond Plaza 5.9
                  km. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách
                  Khách sạn Song Anh 2 km.
                </p>
                <h3>Các tiện nghi được ưa chuộng nhất</h3>
                <section>
                  <p>Dịch vụ đưa đón sân bay (miễn phí)</p>
                  <p>Phòng không hút thuốc</p>
                  <p>Dịch vụ phòng</p>
                  <p>Chỗ đỗ xe miễn phí</p>
                  <p>WiFi miễn phí</p>
                  <p>Thang máy</p>
                  <p>Giặt ủi</p>
                </section>
              </div>
              <div className="detail_block_four_utilities">
                <h3>Điểm nổi bật của chỗ nghỉ</h3>
                <h4>Hoàn hảo cho kỳ nghỉ 1 đêm!</h4>
                <section>
                  <p>
                    <i className="fa-solid fa-location-dot" />
                    Địa điểm hàng đầu: Được khách gần đây đánh giá cao (8,8
                    điểm)
                  </p>
                  <p>
                    <i className="fa-solid fa-car-side" />
                    Có chỗ đậu xe riêng MIỄN PHÍ!
                  </p>
                </section>
              </div>
            </div>
            <div className="detail_block_five" id="detail_block_five">
              <h3>Phòng trống</h3>
              <div>
                <section>
                  <label>Ngày đặt phòng: </label>
                  <input type="date" />
                </section>
                <section>
                  <label>Ngày trả phòng: </label>
                  <input type="date" />
                </section>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Loại chỗ nghỉ</th>
                    <th>Số lượng khách</th>
                    <th>Giá hôm nay</th>
                    <th>Còn trống</th>
                    <th>Chọn phòng</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h4>Phòng Giường Đôi</h4>
                      <p>1 giường đôi lớn</p>
                      <p>20 m²</p>
                      <p>Ban công</p>
                      <p>Tầm nhìn ra khung cảnh</p>
                      <p>Điều hòa không khí</p>
                      <p>TV màn hình phẳng</p>
                      <h6 onClick={handleDisplayImage}>Xem ảnh</h6>
                      {isImagesVisible && (
                        <div>
                          <img src={URLImage + imgRoom} alt="" />
                          <section>
                            {DataImage.map((item) => {
                              return (
                                <img
                                  key={item}
                                  src={URLImage + item}
                                  alt=""
                                  width={200}
                                  onClick={() => changeImageRoom(item)}
                                />
                              );
                            })}
                          </section>
                          <a onClick={handleDisplayImage}>X</a>
                        </div>
                      )}
                    </td>
                    <td>2</td>
                    <td>
                      <h5>
                        VND <span className="priceRoom">100</span>.000
                      </h5>
                    </td>
                    <td>10</td>
                    <td>
                      <input
                        className="changeQuantityRoom"
                        type="number"
                        defaultValue={2}
                        min={0}
                        max={10}
                      />
                    </td>
                    <td rowSpan={2}>
                      <h4>
                        <span id="quantityRoom" /> phòng giá:
                      </h4>
                      <h5>
                        VND <span id="totalPrice" />
                        .000
                      </h5>
                      <button>Tôi muốn đặt</button>
                      <p>Đã bao gồm thuế và phí</p>
                      <p>Xác nhận tức thời</p>
                      <p>thanh toán trước</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Phòng Giường Đôi</h4>
                      <p>1 giường đôi lớn</p>
                      <p>20 m²</p>
                      <p>Ban công</p>
                      <p>Tầm nhìn ra khung cảnh</p>
                      <p>Điều hòa không khí</p>
                      <p>TV màn hình phẳng</p>
                      <h6 onClick={handleDisplayImage}>Xem ảnh</h6>
                      {isImagesVisible && (
                        <div>
                          <img src={URLImage + imgRoom} alt="" />
                          <section>
                            {DataImage.map((item) => {
                              return (
                                <img
                                  key={item}
                                  src={URLImage + item}
                                  alt=""
                                  width={200}
                                  onClick={() => changeImageRoom(item)}
                                />
                              );
                            })}
                          </section>
                          <a onClick={handleDisplayImage}>X</a>
                        </div>
                      )}
                    </td>
                    <td>4</td>
                    <td>
                      <h5>
                        VND <span className="priceRoom">366</span>.000
                      </h5>
                    </td>
                    <td>10</td>
                    <td>
                      <input
                        className="changeQuantityRoom"
                        type="number"
                        defaultValue={0}
                        min={0}
                        max={10}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="detail_block_six">
              <h3>Biện pháp tại chỗ nghỉ</h3>
              <p>
                Chỗ nghỉ này cho biết họ đã áp dụng các biện pháp cụ thể ở một
                số hoặc tất cả các hạng mục này: rác thải, nước, năng lượng và
                khí nhà kính, điểm đến và cộng đồng, cũng như môi trường tự
                nhiên.
              </p>
            </div>
            <div className="detail_block_seven" id="detail_block_seven">
              <div className="detail_block_seven_title">
                <h3>Đánh giá của khách</h3>
                <a href="#detail_block_five">Xem phòng trống</a>
              </div>
              <div className="detail_block_seven_point">
                <h5>Điểm đánh giá</h5>
                <div>
                  <p>
                    <span>6,0</span>Xuất sắc
                  </p>
                  <p>8 đánh giá</p>
                </div>
              </div>
              <div className="detail_block_seven_detail">
                <section>
                  <p>Nhân viên phục vụ (4 điểm)</p>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    defaultValue={4}
                    disabled
                  />
                </section>
                <section>
                  <p>Tiện nghi (4 điểm)</p>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    defaultValue={4}
                    disabled
                  />
                </section>
                <section>
                  <p>Sạch sẽ (4 điểm)</p>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    defaultValue={4}
                    disabled
                  />
                </section>
                <section>
                  <p>Thoải mái (4 điểm)</p>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    defaultValue={4}
                    disabled
                  />
                </section>
                <section>
                  <p>Đáng giá tiền (4 điểm)</p>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    defaultValue={4}
                    disabled
                  />
                </section>
                <section>
                  <p>Địa điểm (4 điểm)</p>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    defaultValue={4}
                    disabled
                  />
                </section>
              </div>
              <div className="detail_block_seven_comment">
                {/* <button >Đọc tất cả đánh giá</button> */}
                <div className="detail_block_seven_comment_hiden">
                  <div className="detail_block_seven_comment_hiden_top">
                    <h3>
                      Đánh giá của khách về Khách sạn Song Anh
                      <button>Viet đánh giá</button>
                    </h3>
                    <section>
                      <p>Sắp xếp đánh giá theo:</p>
                      <select>
                        <option>Mới nhất</option>
                        <option>Cũ nhất</option>
                      </select>
                    </section>
                  </div>
                  <div className="detail_block_seven_comment_hiden_bot">
                    <div className="detail_block_seven_comment_hiden_bot_detail">
                      <section className="detail_block_seven_comment_hiden_bot_user">
                        <div>
                          <img src="../images/avatar.png" />
                          <h4>Quang</h4>
                        </div>
                        <section>
                          <p>Phòng 2 Giường Đôi</p>
                          <p>Khách lẻ</p>
                        </section>
                      </section>
                      <section className="detail_block_seven_comment_hiden_bot_comment">
                        <div>
                          <p>Ngày đánh giá: ngày 20 tháng 7 năm 2024</p>
                          <p>
                            <span>6.0</span>Xuất sắc
                          </p>
                        </div>
                        <p className="detail_block_seven_comment_hiden_bot_comment_p">
                          Tv không hoạt động, ổ cắm điện chính không hoạt động.
                          Nước nóng yếuTv không hoạt động, ổ cắm điện chính
                          không hoạt động. Nước nóng yếuTv không hoạt động, ổ
                          cắm điện chính không hoạt động. Nước nóng yếuTv không
                          hoạt động, ổ cắm điện chính không hoạt động. Nước nóng
                          yếu Tv không hoạt động, ổ cắm điện chính không hoạt
                          động. Nước nóng yếuTv không hoạt động, ổ cắm điện
                          chính không hoạt động. Nước nóng yếuTv không hoạt
                          động, ổ cắm điện chính không hoạt động. Nước nóng
                          yếuTv không hoạt động, ổ cắm điện chính không hoạt
                          động. Nước nóng yếu Tv không hoạt động, ổ cắm điện
                          chính không hoạt động. Nước nóng yếuTv không hoạt
                          động, ổ cắm điện chính không hoạt động. Nước nóng
                          yếuTv không hoạt động, ổ cắm điện chính không hoạt
                          động. Nước nóng yếuTv không hoạt động, ổ cắm điện
                          chính không hoạt động. Nước nóng yếu
                        </p>
                      </section>
                    </div>
                    <div className="detail_block_seven_comment_hiden_bot_detail">
                      <section className="detail_block_seven_comment_hiden_bot_user">
                        <div>
                          <img src="../images/avatar.png" />
                          <h4>Quang</h4>
                        </div>
                        <section>
                          <p>Phòng 2 Giường Đôi</p>
                          <p>Khách lẻ</p>
                        </section>
                      </section>
                      <section className="detail_block_seven_comment_hiden_bot_comment">
                        <div>
                          <p>Ngày đánh giá: ngày 20 tháng 7 năm 2024</p>
                          <p>
                            <span>6.0</span>Xuất sắc
                          </p>
                        </div>
                        <p className="detail_block_seven_comment_hiden_bot_comment_p">
                          Tv không hoạt động, ổ cắm điện chính không hoạt động.
                        </p>
                      </section>
                    </div>
                    <div className="detail_block_seven_comment_hiden_bot_detail">
                      <section className="detail_block_seven_comment_hiden_bot_user">
                        <div>
                          <img src="../images/avatar.png" />
                          <h4>Quang</h4>
                        </div>
                        <section>
                          <p>Phòng 2 Giường Đôi</p>
                          <p>Khách lẻ</p>
                        </section>
                      </section>
                      <section className="detail_block_seven_comment_hiden_bot_comment">
                        <div>
                          <p>Ngày đánh giá: ngày 20 tháng 7 năm 2024</p>
                          <p>
                            <span>6.0</span>Xuất sắc
                          </p>
                        </div>
                        <p className="detail_block_seven_comment_hiden_bot_comment_p">
                          Tv không hoạt động, ổ cắm điện chính không hoạt động.
                          Nước nóng yếuTv không hoạt động, ổ cắm điện chính
                          không hoạt động. Nước nóng yếuTv không hoạt động, ổ
                          cắm điện chính không hoạt động. Nước nóng yếuTv không
                          hoạt động, ổ cắm điện chính không hoạt động. Nước nóng
                          yếu Tv không hoạt động, ổ cắm điện chính không hoạt
                          động. Nước nóng yếuTv không hoạt động, ổ cắm điện
                          chính không hoạt động. Nước nóng yếuTv không hoạt
                          động, ổ cắm điện chính không hoạt động. Nước nóng
                          yếuTv không hoạt động, ổ cắm điện chính không hoạt
                          động. Nước nóng yếu Tv không hoạt động, ổ cắm điện
                          chính không hoạt động. Nước nóng yếuTv không hoạt
                          động, ổ cắm điện chính không hoạt động. Nước nóng
                          yếuTv không hoạt động, ổ cắm điện chính không hoạt
                          động. Nước nóng yếuTv không hoạt động, ổ cắm điện
                          chính không hoạt động. Nước nóng yếu
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail_block_eight">
              <div className="detail_block_eight_tittle">
                <div>
                  <h3>Quy tắc chung</h3>
                  <p>
                    Khách sạn Song Anh nhận yêu cầu đặc biệt - gửi yêu cầu trong
                    bước kế tiếp!
                  </p>
                </div>
                <a href="#detail_block_five">Xem phòng trống</a>
              </div>
              <div className="detail_block_eight_content">
                <section>
                  <h3>Nhận phòng</h3>
                  <div>
                    <p>Từ 11:30 - 12:00</p>
                  </div>
                </section>
                <section>
                  <h3>Trả phòng</h3>
                  <div>
                    <p>Từ 11:30 - 12:00</p>
                  </div>
                </section>
                <section>
                  <h3>Trẻ em và giường</h3>
                  <div>
                    <h5>Chính sách trẻ em</h5>
                    <p>Phù hợp cho tất cả trẻ em.</p>
                    <p>
                      Để xem thông tin giá và tình trạng phòng trống chính xác,
                      vui lòng thêm số lượng và độ tuổi của trẻ em trong nhóm
                      của bạn khi tìm kiếm.
                    </p>
                  </div>
                </section>
                <section>
                  <h3>Giới hạn độ tuổi</h3>
                  <div>
                    <p>Độ tuổi tối thiểu để nhận phòng là 18</p>
                  </div>
                </section>
                <section>
                  <h3>Vật nuôi</h3>
                  <div>
                    <p>Vật nuôi không được phép.</p>
                  </div>
                </section>
                <section>
                  <h3>Chỉ thanh toán bằng tiền mặt</h3>
                  <div>
                    <p>Chỗ nghỉ này chỉ chấp nhận thanh toán bằng tiền mặt.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;
