import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardMovie from "../CardMovie";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { layDSPhimAction } from "../../store/actions/QuanLyPhimActionThunk";
import { quanLyPhimSelector } from "../../store/selector/selector";

const Movie = (props) => {

  const renderFilm = () => {
    return props.arrFilm.map((film, index) => {
      return (
        <SwiperSlide key={index}>
          <CardMovie film={film} />
        </SwiperSlide>
      );
    });
  };
  console.log({props})
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        {renderFilm()}
      </Swiper>
    </div>
  );
};

export default Movie;
