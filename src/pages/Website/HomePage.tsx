import React from "react";

const HomePage = () => (
  <main>
    <div className="home_block_one">
      <div className="home_block_one_title">
        <h3>Chúng tôi so sánh giá phòng từ hàng trăm trang web</h3>
        <p>Chúng tôi tìm. Bạn tiết kiệm.</p>
      </div>
      <form className="home_block_one_form" action="">
        <div className="home_block_one_form_act">
          <i className="fa-solid fa-magnifying-glass"></i>
          <div className="home_block_one_form_act_text" id="home_act1">
            <label htmlFor="">khach san</label>
            <input type="text" placeholder="ban muon di dau?" />
          </div>
        </div>
        <div className="home_block_one_form_act" id="home_act2">
          <div className="home_block_one_form_act">
            <i className="fa-solid fa-calendar-days"></i>
            <div className="home_block_one_form_act_text">
              <label htmlFor="nhanphong">nhan phong</label>
              <input id="nhanphong" type="date" />
            </div>
          </div>
          <div className="home_block_one_form_act_text">
            <label htmlFor="traphong">tra phong</label>
            <input id="traphong" type="date" />
          </div>
        </div>
        <div className="home_block_one_form_act" id="home_act3">
          <i className="fa-solid fa-person"></i>
          <div
            className="home_block_one_form_act_text"
            onClick="handle_box_quantity()"
          >
            <label>so khach va phong</label>
            <p id="display_box_quantity">1 khach va 1 phong</p>
          </div>
          <div className="home_act_quantity" id="box_quantity">
            <div className="home_act_quantity_box">
              <p>so khach</p>
              <div className="home_act_quantity_input">
                <button type="button" onClick="handle_subtraction_preson()">
                  -
                </button>
                <input id="quantity_preson" type="number" value="1" min="1" />
                <button type="button" onClick="handle_addition_preson()">
                  +
                </button>
              </div>
            </div>
            <div className="home_act_quantity_box">
              <p>so phong</p>
              <div className="home_act_quantity_input">
                <button type="button" onClick="handle_subtraction_room()">
                  -
                </button>
                <input id="quantity_room" type="number" value="1" min="1" />
                <button type="button" onClick="handle_addition_room()">
                  +
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick="handle_act_box_quantity()"
              class="home_act_quantity_btn"
            >
              ap dung
            </button>
          </div>
        </div>
        <button id="home_act4" type="submit">
          Tim
        </button>
      </form>
      <div className="home_block_one_brand">
        <div className="home_block_one_brand_img">
          <img src="../images/booking.jfif" alt="" />
        </div>
        <div className="home_block_one_brand_img">
          <img src="../images/booking.jfif" alt="" />
        </div>
        <div className="home_block_one_brand_img">
          <img src="../images/booking.jfif" alt="" />
        </div>
        <div className="home_block_one_brand_img">
          <img src="../images/booking.jfif" alt="" />
        </div>
        <div className="home_block_one_brand_img">
          <img src="../images/booking.jfif" alt="" />
        </div>
        <div className="home_block_one_brand_img">
          <img src="../images/booking.jfif" alt="" />
        </div>
        <div>
          <p>+100 đối tác khác</p>
        </div>
      </div>
    </div>
    <div className="home_block_two">
      <div className="home_block_two_img">
        <img src="../images/banner1.jpg" alt="" />
      </div>
      <div className="home_block_two_content">
        <h3>Tìm thời điểm phù hợp nhất để đặt nơi lưu trú tiếp theo</h3>
        <div className="home_block_two_content_table">
          <div className="home_block_two_content_table_above">
            <div onClick="changeBackgroundBlockTwo(this)" class="clicked">
              <h5>TP. Hồ Chí Minh</h5>
            </div>
            <div onClick="changeBackgroundBlockTwo(this)">
              <h5>Đà Lạt</h5>
            </div>
            <div onClick="changeBackgroundBlockTwo(this)">
              <h5>Vũng Tàu</h5>
            </div>
            <div onClick="changeBackgroundBlockTwo(this)">
              <h5>Nha Trang</h5>
            </div>
            <div onClick="changeBackgroundBlockTwo(this)">
              <h5>Hà Nội</h5>
            </div>
            <div onClick="changeBackgroundBlockTwo(this)">
              <h5>Hà Nội</h5>
            </div>
            <div onClick="changeBackgroundBlockTwo(this)">
              <h5>Hà Nội</h5>
            </div>
            <div onClick="changeBackgroundBlockTwo(this)">
              <h5>Hà Nội</h5>
            </div>
            <div onClick="changeBackgroundBlockTwo(this)">
              <h5>Hà Nội</h5>
            </div>
          </div>
          <p>Giá dựa trên khoảng giá trung bình của khách sạn 3 sao mỗi đêm.</p>
          <div className="home_block_two_content_table_under">
            <div>
              <h5>Thang 5</h5>
              <h5>
                500.000đ-1.000.000đ{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </h5>
            </div>
            <div>
              <h5>Thang 5</h5>
              <h5>
                500.000đ-1.000.000đ{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </h5>
            </div>
            <div>
              <h5>Thang 5</h5>
              <h5>
                500.000đ-1.000.000đ{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </h5>
            </div>
            <div>
              <h5>Thang 5</h5>
              <h5>
                500.000đ-1.000.000đ{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </h5>
            </div>
            <div>
              <h5>Thang 5</h5>
              <h5>
                500.000đ-1.000.000đ{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </h5>
            </div>
            <div>
              <h5>Thang 5</h5>
              <h5>
                500.000đ-1.000.000đ{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="home_block_three">
      <h3>Thư giãn ở những khách sạn được đánh giá cao</h3>
      <div className="home_block_three_location">
        <div className="home_block_three_location_name">
          <p onClick="changeBackgroundLocation(this)" class="clicked">
            Singapore
          </p>
          <p onClick="changeBackgroundLocation(this)">Tây Ban Nha</p>
          <p onClick="changeBackgroundLocation(this)">Ý</p>
        </div>
        <div className="home_block_three_location_items">
          <div className="home_block_three_location_item">
            <div className="home_block_three_location_item_img">
              <img src="../images/dulich1.jpg" alt="" />
            </div>
            <h3>
              <a href="">The Fullerton Bay Hotel wopeeeeeeeee</a>
            </h3>
            <div className="home_block_three_location_item_text">
              <h5>
                9.6 - Xuất sắc <span>(2148)</span>
              </h5>
              <p>
                <i className="fa-solid fa-location-dot"></i>Hà Nội
              </p>
            </div>
            <button>kiem tra gia</button>
          </div>
          <div className="home_block_three_location_item">
            <div className="home_block_three_location_item_img">
              <img src="../images/dulich1.jpg" alt="" />
            </div>
            <h3>
              <a href="">The Fullerton Bay Hotel</a>
            </h3>
            <div className="home_block_three_location_item_text">
              <h5>
                9.6 - Xuất sắc <span>(2148)</span>
              </h5>
              <p>
                <i className="fa-solid fa-location-dot"></i>Hà Nội
              </p>
            </div>
            <button>kiem tra gia</button>
          </div>
          <div className="home_block_three_location_item">
            <div className="home_block_three_location_item_img">
              <img src="../images/dulich1.jpg" alt="" />
            </div>
            <h3>
              <a href="">The Fullerton Bay Hotel</a>
            </h3>
            <div className="home_block_three_location_item_text">
              <h5>
                9.6 - Xuất sắc <span>(2148)</span>
              </h5>
              <p>
                <i className="fa-solid fa-location-dot"></i>Hà Nội
              </p>
            </div>
            <button>kiem tra gia</button>
          </div>
        </div>
        <div className="home_block_three_location_link">
          <a href="">
            Khám phá những nơi lưu trú khác
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="home_block_four">
      <h3>Tìm kiếm phổ biến</h3>
      <div className="home_block_four_items">
        <div className="home_block_four_item">
          <a href="">
            <img src="../images/dulich2.jpg" alt="" />
          </a>
          <div>
            <h3>
              <span>TP. Hồ Chí Minh</span>
            </h3>
            <h3>
              <span>23</span> Khách sạn
            </h3>
            <h3>
              Trung bình: <span>533.000đ</span>
            </h3>
          </div>
        </div>
        <div className="home_block_four_item">
          <a href="">
            <img src="../images/dulich2.jpg" alt="" />
          </a>
          <div>
            <h3>
              <span>TP. Hồ Chí Minh</span>
            </h3>
            <h3>
              <span>23</span> Khách sạn
            </h3>
            <h3>
              Trung bình: <span>533.000đ</span>
            </h3>
          </div>
        </div>
        <div className="home_block_four_item">
          <a href="">
            <img src="../images/dulich2.jpg" alt="" />
          </a>
          <div>
            <h3>
              <span>TP. Hồ Chí Minh</span>
            </h3>
            <h3>
              <span>23</span> Khách sạn
            </h3>
            <h3>
              Trung bình: <span>533.000đ</span>
            </h3>
          </div>
        </div>
        <div className="home_block_four_item">
          <a href="">
            <img src="../images/dulich2.jpg" alt="" />
          </a>
          <div>
            <h3>
              <span>TP. Hồ Chí Minh</span>
            </h3>
            <h3>
              <span>23</span> Khách sạn
            </h3>
            <h3>
              Trung bình: <span>533.000đ</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div className="home_block_five">
      <div className="home_block_five_item">
        <img
          src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/SearchDesktop.svg"
          alt=""
        />
        <div>
          <h3>Tìm dễ dàng</h3>
          <p>Tìm trong số 5 triệu khách sạn chỉ sau vài giây.</p>
        </div>
      </div>
      <div className="home_block_five_item">
        <img
          src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/Compare.svg"
          alt=""
        />
        <div>
          <h3>Tự tin so sánh</h3>
          <p>So sánh giá phòng khách sạn trên hàng trăm trang web cùng lúc.</p>
        </div>
      </div>
      <div className="home_block_five_item">
        <img
          src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/Save.svg"
          alt=""
        />
        <div>
          <h3>Tiết kiệm nhiều</h3>
          <p>
            Khám phá ưu đãi hấp dẫn để đặt trên trang web đối tác của chúng tôi.
          </p>
        </div>
      </div>
    </div>
    <div className="home_block_six">
      <h3>Tìm kiếm phổ biến khác</h3>
      <div>
        <h5>
          <a href="">Khách sạn tại Đà Nẵngdsssssssssss</a>
        </h5>
        <h5>
          <a href="">Khách sạn tại Đà Nẵngdassss</a>
        </h5>
        <h5>
          <a href="">Khách sạn tại Đà Nẵng</a>
        </h5>
        <h5>
          <a href="">Khách sạn tại Đà Nẵng</a>
        </h5>
        <h5>
          <a href="">Khách sạn tại Đà Nẵng</a>
        </h5>
        <h5>
          <a href="">Khách sạn tại Đà Nẵng</a>
        </h5>
        <h5>
          <a href="">Khách sạn tại Đà Nẵng</a>
        </h5>
        <h5>
          <a href="">Khách sạn tại Đà Nẵng</a>
        </h5>
        <h5>
          <a href="">Khách sạn tại Đà Nẵng</a>
        </h5>
        <h5>
          <a href="">Khách sạn tại Đà Nẵng</a>
        </h5>
        <h5>
          <a href="">Khách sạn tại Đà Nẵng</a>
        </h5>
        <h5>
          <a href="">Khách sạn tại Đà Nẵng</a>
        </h5>
        <h5>
          <a href="">Khách sạn tại Đà Nẵng</a>
        </h5>
        <h5>
          <a href="">Khách sạn tại Đà Nẵng</a>
        </h5>
        <h5>
          <a href="">Khách sạn tại Đà Nẵng</a>
        </h5>
      </div>
    </div>
  </main>
);

export default HomePage;
