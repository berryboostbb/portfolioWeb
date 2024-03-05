import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tine Snow",
    review:
      "Shazar delivered good work on this MERN development project and I enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were reasonably strong. I enjoyed working with him and will likely have additional jobs for him in the future. Highly Recommended! Best of luck.",
  },
  {
    avatar: AVTR2,
    name: "Tine Snow",
    review:
      "Amazing work done. Highly recommended if you are looking for an expert iOS developer who can give you solution out of the box. Thanks for your support. ♥",
  },
  {
    avatar: AVTR3,
    name: "Tine Snow",
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est autem atque, voluptas explicabo quod, ipsa exercitationem temporibus,distinctio molestiae magnam in quos natus libero nemo nihil! Ea ab tenetur doloribus.",
  },
  {
    avatar: AVTR4,
    name: "Tine Snow",
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est autem atque, voluptas explicabo quod, ipsa exercitationem temporibus,distinctio molestiae magnam in quos natus libero nemo nihil! Ea ab tenetur doloribus.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
