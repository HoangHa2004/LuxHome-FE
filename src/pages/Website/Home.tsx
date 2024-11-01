/* eslint-disable no-empty-pattern */
import React, { useEffect, useState } from "react";
import "../../style/css/home.css";
import FormSearch from "../../component/ui/website/FormSearch";
import axios from "axios";
import instance from "../../config/axios";
type Props = {};

const Home = (props: Props) => {
  const [point, setPoint] = useState(0);
  const [pointAddress, setpointAddress] = useState(0);

  const handlePoint = (id: any) => {
    setPoint(id);
  };

  const handlePointAddress = (id: any) => {
    setpointAddress(id);
  };
  console.log(pointAddress);

  const data1 = [
    {
      id: 0,
      dulich: "ha noi",
      khachsan: [
        {
          name: "khach san ",
          price: 1322000,
          address: "soc son, ha noi",
        },
        {
          name: "khach san ",
          price: 1322000,
          address: "ha dong, ha noi",
        },
        {
          name: "khach san",
          price: 1322000,
          address: "bac tu liem, ha noi",
        },
      ],
      giatb: [
        {
          thang: 1,
          tien: 1000000,
        },
        {
          thang: 2,
          tien: 1200000,
        },
        {
          thang: 3,
          tien: 1320000,
        },
        {
          thang: 1,
          tien: 1032210000,
        },
        {
          thang: 2,
          tien: 1202000,
        },
        {
          thang: 3,
          tien: 322000,
        },
      ],
    },
    {
      id: 1,
      dulich: "TP. ho chi minh",
      khachsan: [
        {
          name: "khach san",
          price: "700000",
          address: "Quan 7, ho chi minh",
        },
        {
          name: "khach san",
          price: "700000",
          address: "Quan 7, ho chi minh",
        },
        {
          name: "khach san",
          price: "700000",
          address: "Quan 7, ho chi minh",
        },
      ],
      giatb: [
        {
          thang: 1,
          tien: 2021000,
        },
        {
          thang: 2,
          tien: 1200040,
        },
        {
          thang: 3,
          tien: 1320000,
        },
        {
          thang: 4,
          tien: 1003232000,
        },
        {
          thang: 5,
          tien: 120012000,
        },
        {
          thang: 6,
          tien: 31320000,
        },
      ],
    },

    {
      id: 2,
      dulich: "Da nang",
      khachsan: [
        {
          name: "khach san",
          price: "1120000",
          address: "trung hoa, da nang",
        },
        {
          name: "khach san",
          price: "1120000",
          address: "trung hoa, da nang",
        },
        {
          name: "khach san",
          price: "1120000",
          address: "trung hoa, da nang",
        },
      ],
      giatb: [
        {
          thang: 1,
          tien: 4000000,
        },
        {
          thang: 2,
          tien: 1200000,
        },
        {
          thang: 3,
          tien: 1320000,
        },
        {
          thang: 4,
          tien: 1000000,
        },
        {
          thang: 5,
          tien: 1200000,
        },
        {
          thang: 6,
          tien: 1320000,
        },
      ],
    },
    {
      id: 3,
      dulich: "Hai phong",
      khachsan: [
        {
          name: "khach san binh an",
          price: "1120000",
          address: "soc son, ha noi",
        },
      ],
      giatb: [
        {
          thang: 1,
          tien: 5000000,
        },
        {
          thang: 2,
          tien: 1200000,
        },
        {
          thang: 3,
          tien: 1320000,
        },
        {
          thang: 4,
          tien: 1000000,
        },
        {
          thang: 5,
          tien: 1200000,
        },
        {
          thang: 6,
          tien: 1320000,
        },
      ],
    },
    {
      id: 4,
      dulich: "TP. hue",
      khachsan: [
        {
          name: "khach san binh an",
          price: "1120000",
          address: "soc son, ha noi",
        },
      ],
      giatb: [
        {
          thang: 1,
          tien: 3800000,
        },
        {
          thang: 2,
          tien: 1200000,
        },
        {
          thang: 3,
          tien: 1320000,
        },
        {
          thang: 4,
          tien: 1000000,
        },
        {
          thang: 5,
          tien: 1200000,
        },
        {
          thang: 6,
          tien: 1320000,
        },
      ],
    },
  ];

  const [products, setproducts] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await instance.get("hotels");
        setproducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);

  return (
    <main>
      <div className="home_block_one">
        <div className="home_block_one_title">
          <h3>Chúng tôi có nhiều ưu đãi cho bạn</h3>
          <p>Chúng tôi tạo. Bạn tiết kiệm.</p>
        </div>
        <FormSearch />
        <div className="home_block_one_brand">
          <div className="home_block_one_brand_img">
            <img src="../images/booking.jfif" />
          </div>
          <div className="home_block_one_brand_img">
            <img src="../images/booking.jfif" />
          </div>
          <div className="home_block_one_brand_img">
            <img src="../images/booking.jfif" />
          </div>
          <div className="home_block_one_brand_img">
            <img src="../images/booking.jfif" />
          </div>
          <div className="home_block_one_brand_img">
            <img src="../images/booking.jfif" />
          </div>
          <div className="home_block_one_brand_img">
            <img src="../images/booking.jfif" />
          </div>
          <div>
            <p>+100 khách sạn</p>
          </div>
        </div>
      </div>
      <div className="home_block_two">
        <div className="home_block_two_img">
          <img src="../../../public/images/banner1.jpg" />
        </div>
        <div className="home_block_two_content">
          <h3>Tìm thời điểm phù hợp nhất để đặt nơi lưu trú tiếp theo</h3>
          <div className="home_block_two_content_table">
            <div className="home_block_two_content_table_above">
              {data1.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={index === point ? "clicked" : ""}
                    onClick={() => {
                      handlePoint(item.id);
                    }}
                  >
                    <h5>{item.dulich}</h5>
                  </div>
                );
              })}
            </div>
            <p>
              Giá dựa trên khoảng giá trung bình của khách sạn 3 sao mỗi đêm.
            </p>
            <div className="home_block_two_content_table_under">
              {data1[point].giatb.map((item) => {
                return (
                  <div>
                    <h5>thang {item.thang}</h5>
                    <h5>
                      {item.tien}đ-{item.tien}đ
                      <i className="fa-solid fa-chevron-right" />
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="home_block_three">
        <h3>Thư giãn ở những khách sạn được đánh giá cao</h3>
        <div className="home_block_three_location">
          <div className="home_block_three_location_name">
            {data1.slice(0, 3).map((item, index) => {
              return (
                <p
                  key={index}
                  className={pointAddress === index ? "clicked" : ""}
                  onClick={() => {
                    handlePointAddress(item.id);
                  }}
                >
                  {item.dulich}
                </p>
              );
            })}
          </div>
          <div className="home_block_three_location_items">
            {data1[pointAddress].khachsan.map((item, index) => {
              return (
                <div className="home_block_three_location_item" key={index}>
                  <div className="home_block_three_location_item_img">
                    <img src="../../../public/images/hotel1.jpg" />
                  </div>
                  <h3>
                    <a>{item.name}</a>
                  </h3>
                  <div className="home_block_three_location_item_text">
                    <h5>
                      9.6 - Xuất sắc <span>(2148)</span>
                    </h5>
                    <p>
                      <i className="fa-solid fa-location-dot" />
                      {item.address}
                    </p>
                  </div>
                  <button>kiem tra gia</button>
                </div>
              );
            })}
          </div>
          <div className="home_block_three_location_link">
            <a>
              Khám phá những nơi lưu trú khác
              <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="home_block_four">
        <h3>Tìm kiếm phổ biến</h3>
        <div className="home_block_four_items">
          {data1.slice(0, 4).map((item, index) => {
            return (
              <div className="home_block_four_item">
                <a>
                  <img src="../../../public/images/dulich3.jpg" />
                </a>
                <div>
                  <h3>
                    <span>{item.dulich}</span>
                  </h3>
                  <h3>
                    <span>23</span> Khách sạn
                  </h3>
                  <h3>
                    Trung bình: <span>{item.giatb[1].tien}</span>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="home_block_five">
          <div className="home_block_five_item">
            <img src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/SearchDesktop.svg" />
            <div>
              <h3>Tìm dễ dàng</h3>
              <p>Tìm trong số 5 triệu khách sạn chỉ sau vài giây.</p>
            </div>
          </div>
          <div className="home_block_five_item">
            <img src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/Compare.svg" />
            <div>
              <h3>Tự tin so sánh</h3>
              <p>
                So sánh giá phòng khách sạn trên hàng trăm trang web cùng lúc.
              </p>
            </div>
          </div>
          <div className="home_block_five_item">
            <img src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/Save.svg" />
            <div>
              <h3>Tiết kiệm nhiều</h3>
              <p>
                Khám phá ưu đãi hấp dẫn để đặt trên trang web đối tác của chúng
                tôi.
              </p>
            </div>
          </div>
        </div>
        <div className="home_block_six">
          <h3>Tìm kiếm phổ biến khác</h3>
          <div>
            <h5>
              <a>Khách sạn tại Đà Nẵngdsssssssssss</a>
            </h5>
            <h5>
              <a>Khách sạn tại Đà Nẵngdassss</a>
            </h5>
            <h5>
              <a>Khách sạn tại Đà Nẵng</a>
            </h5>
            <h5>
              <a>Khách sạn tại Đà Nẵng</a>
            </h5>
            <h5>
              <a>Khách sạn tại Đà Nẵng</a>
            </h5>
            <h5>
              <a>Khách sạn tại Đà Nẵng</a>
            </h5>
            <h5>
              <a>Khách sạn tại Đà Nẵng</a>
            </h5>
            <h5>
              <a>Khách sạn tại Đà Nẵng</a>
            </h5>
            <h5>
              <a>Khách sạn tại Đà Nẵng</a>
            </h5>
            <h5>
              <a>Khách sạn tại Đà Nẵng</a>
            </h5>
            <h5>
              <a>Khách sạn tại Đà Nẵng</a>
            </h5>
            <h5>
              <a>Khách sạn tại Đà Nẵng</a>
            </h5>
            <h5>
              <a>Khách sạn tại Đà Nẵng</a>
            </h5>
            <h5>
              <a>Khách sạn tại Đà Nẵng</a>
            </h5>
            <h5>
              <a>Khách sạn tại Đà Nẵng</a>
            </h5>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
