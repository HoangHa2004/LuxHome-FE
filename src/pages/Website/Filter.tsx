import React from "react";
import FormSearch from "../../component/ui/website/FormSearch";
import "../../style/css/filterPage.css";
type Props = {};

const Filter = (props: Props) => {
  return (
    <main>
      <div className="filterPage_block_one">
        <FormSearch />
      </div>
      <div className="filterPage_block_two">
        <div className="filterPage_block_two_filter">
          <h5>Sắp xếp theo:</h5>
          <select>
            <option>Gợi ý của chúng tôi</option>
            <option>xếp hạng và gợi ý</option>
            <option>giá và gợi ý</option>
            <option>khoảng cách và gợi ý</option>
          </select>
          <section>
            <i className="fa-solid fa-triangle-exclamation" />
            <p>
              Kết quả xếp hạng phản ánh tiêu chí tìm kiếm của bạn và đánh giá
              của chúng tôi về độ hấp dẫn của ưu đãi so với các ưu đãi khác trên
              trang
            </p>
          </section>
        </div>
        <div className="filterPage_block_two_list">
          <div className="filterPage_block_two_list_item">
            <img src="../images/hotel.jpg" />
            <div className="filterPage_block_two_list_item_desc">
              <div>
                <h3>Khách sạn Song Anh</h3>
                <i className="fa-regular fa-heart" />
              </div>
              <h5>khách sạn 2 sao</h5>
              <h5>Quận 1, TP. Hồ Chí Minh</h5>
              <h5>
                <span>5.8 - Tốt </span>(20 đánh giá)
              </h5>
            </div>
            <div className="filterPage_block_two_list_item_cost">
              <h5>Chọn ngày để xem giá chính xác</h5>
              <p>
                <span>VND 1.121.000</span>
              </p>
              <p>VND 1.100.000</p>
              <button>
                Xem cho trong <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
          <div className="filterPage_block_two_list_item">
            <img src="../images/hotel.jpg" />
            <div className="filterPage_block_two_list_item_desc">
              <div>
                <h3>Khách sạn Song Anh</h3>
                <i className="fa-regular fa-heart" />
              </div>
              <h5>khách sạn 2 sao</h5>
              <h5>Quận 1, TP. Hồ Chí Minh</h5>
              <h5>
                <span>5.8 - Tốt </span>(20 đánh giá)
              </h5>
            </div>
            <div className="filterPage_block_two_list_item_cost">
              <h5>Chọn ngày để xem giá chính xác</h5>
              <p>
                <span>VND 1.121.000</span>
              </p>
              <p>VND 1.100.000</p>
              <button>
                Xem cho trong <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
          <div className="filterPage_block_two_list_item">
            <img src="../images/hotel.jpg" />
            <div className="filterPage_block_two_list_item_desc">
              <div>
                <h3>Khách sạn Song Anh</h3>
                <i className="fa-regular fa-heart" />
              </div>
              <h5>khách sạn 2 sao</h5>
              <h5>Quận 1, TP. Hồ Chí Minh</h5>
              <h5>
                <span>5.8 - Tốt </span>(20 đánh giá)
              </h5>
            </div>
            <div className="filterPage_block_two_list_item_cost">
              <h5>Chọn ngày để xem giá chính xác</h5>
              <p>
                <span>VND 1.121.000</span>
              </p>
              <p>VND 1.100.000</p>
              <button>
                Xem cho trong <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
          <div className="filterPage_block_two_list_item">
            <img src="../images/hotel.jpg" />
            <div className="filterPage_block_two_list_item_desc">
              <div>
                <h3>Khách sạn Song Anh wrrrrtfsddddddddddddddddddddddddd</h3>
                <i className="fa-regular fa-heart" />
              </div>
              <h5>khách sạn 2 sao</h5>
              <h5>Quận 1, TP. Hồ Chí Minh</h5>
              <h5>
                <span>5.8 - Tốt </span>(20 đánh giá)
              </h5>
            </div>
            <div className="filterPage_block_two_list_item_cost">
              <h5>Chọn ngày để xem giá chính xác</h5>
              <p>
                <span>VND 1.121.000</span>
              </p>
              <p>VND 1.100.000</p>
              <button>
                Xem cho trong <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
          <div className="filterPage_block_two_list_item">
            <img src="../images/hotel.jpg" />
            <div className="filterPage_block_two_list_item_desc">
              <div>
                <h3>Khách sạn Song Anh sdaaasdaaa</h3>
                <i className="fa-regular fa-heart" />
              </div>
              <h5>khách sạn 2 sao</h5>
              <h5>Quận 1, TP. Hồ Chí Minh</h5>
              <h5>
                <span>5.8 - Tốt </span>(20 đánh giá)
              </h5>
            </div>
            <div className="filterPage_block_two_list_item_cost">
              <h5>Chọn ngày để xem giá chính xác</h5>
              <p>
                <span>VND 1.121.000</span>
              </p>
              <p>VND 1.100.000</p>
              <button>
                Xem cho trong <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="filterPage_block_two_message">
          <i className="fa-regular fa-bell" />
          <p>
            Giá và lượng phòng chúng tôi nhận từ các trang đặt phòng thay đổi
            liên tục. Có nghĩa là không phải lúc nào bạn cũng tìm được chính xác
            ưu đãi bạn nhìn thấy trên trivago khi vào trang đặt phòng.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Filter;
