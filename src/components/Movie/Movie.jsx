import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardMovie from "../CardMovie";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { layDSPhimAction } from "../../store/actions/QuanLyPhimActionThunk";
import { quanLyPhimSelector } from "../../store/selector/selector";

const Movie = ({arrFilm,duration}) => {

  const renderFilm = () => {
    return arrFilm.map((film, index) => {
      return (
        <SwiperSlide key={index}>
          <CardMovie film={film} />
        </SwiperSlide>
      );
    });
  };

  
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay:3000,
         
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        {renderFilm()}
      </Swiper>
    </div>
  );
};

export default Movie;
