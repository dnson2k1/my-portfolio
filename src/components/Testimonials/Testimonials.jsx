import React from "react";

import "./testimonials.scss";

import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Bill Gates",
    review:
      "1. Hãy hòa nhã với những kẻ dở hơi. Ai biết được ngày sau và khi đó bạn có thể phải làm việc cho một kẻ như vậy.<br>2. Nếu như bạn làm rối tung mọi chuyện lên thì đó không phải lỗi của bố mẹ bạn, thế nên đừng có mà ca thán về lỗi lầm của bạn, hãy rút kinh nghiệm từ chúng.",
    avt: "https://2xjs7y10oiyz26vqxu2hok6y-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Annotation-2020-04-20-145804-e1587366124857.jpg",
  },
  {
    id: 2,
    name: "Jack Ma",
    review:
      "1. Nếu bạn không bỏ cuộc, bạn sẽ luôn còn cơ hội. Bỏ cuộc chính là thất bại lớn nhất. <br> 2. Ngày mai có thật sự huy hoàng tuỳ thuộc vào sự lựa chọn và hành động của bạn hôm nay. <br> 3. Nếu chúng ta muốn thay đổi thế giới. Hãy thay đổi bản thân trước. ",
    avt: "https://vcdn-kinhdoanh.vnecdn.net/2020/04/09/Jack-Ma-9621-1586431785.jpg",
  },
  {
    id: 3,
    name: " Mark Zuckerberg",
    review:
      "1. Nhiều người mơ thành công… trong khi những người khác thức dậy và làm việc chăm chỉ để biến giấc mơ thành sự thực. <br> 2. Di chuyển nhanh và phá vỡ mọi thứ. Nếu bạn chưa phá vỡ được vật cản, bạn chưa di chuyển đủ nhanh. <br> ",
    avt: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F02%2F15%2FMark-Zuckerberg.jpg",
  },
  {
    id: 4,
    name: " Warren Buffett",
    review:
      "1. Nguyên tắc số 1: Không bao giờ để mất tiền; Nguyên tắc số 2: Không quên nguyên tắc số 1. <br> 2. Nếu bạn thấy mình trên một chiếc thuyền bị rò rỉ, dành năng lượng để nhảy sang chiếc thuyền khác sẽ hiệu quả hơn việc cố gắng vá chỗ rò rỉ. <br> ",
    avt: "https://bstyle.vn/wp-content/uploads/2018/11/Warren-Buffett.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials" data-aos="fade-up">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.length &&
          testimonials.map((item) => (
            <SwiperSlide className="testimonials__item" key={item.id}>
              <div className="testimonials__item__avt">
                <img src={item.avt} alt="" />
              </div>
              <h5 className="testimonials__item__name">{item.name}</h5>
              <small
                className="testimonials__item__review"
                dangerouslySetInnerHTML={{ __html: item.review }}
              ></small>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
