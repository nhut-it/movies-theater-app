import { configureStore } from "@reduxjs/toolkit";
import QuanLyCarouselReducer from "./reducers/QuanLyCarouselReducer";
import quanLyDatVeReducer from "./reducers/QuanLyDatveReducer";
import quanLyNguoiDungReducer from "./reducers/quanLyNguoiDungReducer";
import QuanLyPhimReducer from "./reducers/QuanLyPhimReducer";
import quanLyRapReucer from "./reducers/quanLyRapReducer";


const store=configureStore({
    reducer:{
        quanLyRap:quanLyRapReucer.reducer,
        quanLyNguoiDung:quanLyNguoiDungReducer.reducer,
        quanLyCarousel:QuanLyCarouselReducer.reducer,
        quanLyPhim:QuanLyPhimReducer.reducer,
        quanLyDatVe:quanLyDatVeReducer.reducer,
    },
    middleware:getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store