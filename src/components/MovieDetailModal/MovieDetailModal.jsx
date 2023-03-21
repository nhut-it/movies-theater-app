import moment from "moment/moment";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setThongTinPhim } from "../../store/reducers/QuanLyPhimReducer";

import { motion } from "framer-motion";

const MovieDetailModal = ({ movieDetail, showModal }) => {
  const dispatch = useDispatch();
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  return (
    <div>
      <div
        className={`flex items-center fixed top-0 left-0 z-50 w-screen h-screen bg-[rgba(0,0,0,0.6)]  ${
          showModal ? "block" : "hidden"
        }`}
        onClick={() => {
          dispatch(setThongTinPhim());
        }}
      >
        <motion.div
          animate={showModal ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.9 }}
          className={`modal w-full bg-no-repeat bg-center bg-cover `}
          style={{ backgroundImage: `url(${movieDetail?.hinhAnh})` }}
        >
          <div
            onClick={() => {
              dispatch(setThongTinPhim());
            }}
            className="flex-col w-full h-full bg-gradient-to-r from-black via-[rgba(0,0,0,.9)] to-transparent"
          >
            <button
              className=" pl-3 pt-3 text-2xl"
              onClick={() => {
                dispatch(setThongTinPhim());
              }}
            >
              X
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-[80%] text-lg pt-5 pl-5 lg:container"
            >
              <div className="flex justify-start items-center">
                <div className="filmInfo w-1/2">
                  <h1 className="mt-2 text-4xl font-semibold">
                    {movieDetail?.tenPhim}
                  </h1>
                  <p className="mt-5 text-green-400">
                    Rating: {movieDetail?.danhGia}/10
                  </p>
                  <p className="mt-2">
                    Ngày khởi chiếu:{" "}
                    {moment(movieDetail?.ngayKhoiChieu).format("DD/MM/yyyy")}
                  </p>
                  <p className="mt-5 mb-10 text-[rgba(255,255,255,0.6)] text-base">
                    {movieDetail?.moTa.length > 200
                      ? movieDetail?.moTa.slice(0, 200) + "..."
                      : movieDetail?.moTa}
                  </p>
                </div>
                <div className="pl-5">
                  <NavLink
                    onClick={() => {
                      dispatch(setThongTinPhim());
                    }}
                    to={`detail/${movieDetail?.maPhim}`}
                    className="px-10 py-5 font-bold border-2 border-rose-600 hover:bg-rose-600 transition duration-300 ease-in-out "
                  >
                    ĐẶT VÉ
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
