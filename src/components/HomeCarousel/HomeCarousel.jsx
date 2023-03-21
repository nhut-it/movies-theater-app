import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { layCarouselAction } from "../../store/actions/QuanLyCarouselActionThunk";
import { quanLyCarouselSelector } from "../../store/selector/selector";
import "./HomeCarousel.scss";
const HomeCarousel = () => {
  const { arrBannerImg } = useSelector(quanLyCarouselSelector);
  console.log({ arrBannerImg });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layCarouselAction());
  }, []);

  const renderImgCarousel = () => {
    return arrBannerImg.map((img) => {
      return (
        <SwiperSlide key={img.maBanner}>
          <div className="h-[17rem] sm:h-[22rem] md:h-[30rem] lg:h-[40rem] xl:h-[60rem]">
            <div
              className="h-full bg-cover bg-no-repeat bg-center "
              style={{ backgroundImage: `url(${img.hinhAnh})` }}
            ></div>
          </div>
          {/* <img src={img.hinhAnh} /> */}
        </SwiperSlide>
      );
    });
  };
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {renderImgCarousel()}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
