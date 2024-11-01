import React from 'react'
import "../../../style/css/profile/favorite.css";
import LeftNav from '../../../component/ui/website/LeftNav';

type Props = {}

const Favorite = (props: Props) => {
  return (
    <main className="profile">
    <LeftNav />
   <div className="favorite">
  <h2>Nơi lưu trú bạn thích</h2>
  <div className="favorite_list">
    <div className="favorite_detai">
      <div className="favorite_detai_content">
        <img src="../../images/hotel1.jpg"  />
        <section>
          <h3>Hotel Posada del Lucero </h3>
          <p>Khách sạn 2 sao</p>
          <p>Hà nội</p>
        </section>
      </div>
      <div className="favorite_detai_del">
        <p>Bỏ yêu thích</p>
      </div>
    </div>
    <div className="favorite_detai">
      <div className="favorite_detai_content">
        <img src="../../images/hotel1.jpg"  />
        <section>
          <h3>Hotel Posada del Lucero </h3>
          <p>Khách sạn 2 sao</p>
          <p>Hà nội</p>
        </section>
      </div>
      <div className="favorite_detai_del">
        <p>Bỏ yêu thích</p>
      </div>
    </div>
    <div className="favorite_detai">
      <div className="favorite_detai_content">
        <img src="../../images/hotel1.jpg"  />
        <section>
          <h3>Hotel Posada del Lucero </h3>
          <p>Khách sạn 2 sao</p>
          <p>Hà nội</p>
        </section>
      </div>
      <div className="favorite_detai_del">
        <p>Bỏ yêu thích</p>
      </div>
    </div>
  </div>
</div>

  </main>
  )
}

export default Favorite