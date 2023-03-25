import React from "react";
import { useSelector } from "react-redux";
import Cinema from "../../components/Cinema";
import HomeCarousel from "../../components/HomeCarousel";
import MovieDetailModal from "../../components/MovieDetailModal";
import MoviesShow from "../../components/MoviesShow";
import { quanLyPhimSelector } from "../../store/selector/selector";

const Home = () => {
  const {movieDetail}=useSelector(quanLyPhimSelector)
  return (
    <>
      <HomeCarousel />
      <div className="mx-5 mb-2 pt-10 bg-nav-black text-white">
        <MoviesShow />
        <MovieDetailModal
          movieDetail={movieDetail}
          showModal={movieDetail ? true : false}
        />
        <Cinema />
        
      </div>
    </>
  );
};

export default Home;
