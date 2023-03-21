import { configureStore } from "@reduxjs/toolkit";
import QuanLyCarouselReducer from "./reducers/QuanLyCarouselReducer";
import quanLyNguoiDungReducer from "./reducers/quanLyNguoiDungReducer";
import QuanLyPhimReducer from "./reducers/QuanLyPhimReducer";
import quanLyRapReucer from "./reducers/quanLyRapReducer";


const store=configureStore({
    reducer:{
        quanLyRap:quanLyRapReucer.reducer,
        quanLyNguoiDung:quanLyNguoiDungReducer.reducer,
        quanLyCarousel:QuanLyCarouselReducer.reducer,
        quanLyPhim:QuanLyPhimReducer.reducer,
    }
})

export default store