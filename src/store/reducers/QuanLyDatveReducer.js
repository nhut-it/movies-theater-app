import { createSlice } from "@reduxjs/toolkit";
import { buildQueries } from "@testing-library/react";
import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import { datVeAction, layChiTietPhongVeAction } from "../actions/QuanLyDatVeActionThunk";
import quanLyNguoiDungReducer from "./quanLyNguoiDungReducer";

const quanLyDatVeReducer = createSlice({
  name: "quanLyDatVe",
  initialState: {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: [],
    danhSachGheKhachDat: [],
    tabActive: 1,
  },
  reducers: {
    datVe: (state, action) => {
       
      let index = state.danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === action.payload.maGhe
      );
    
      if (index !== -1) {
        state.danhSachGheDangDat.splice(index, 1);
      } else {
        state.danhSachGheDangDat.push(action.payload);
      }
  
    },
    chuyenTab:(state,action)=>{
      state.tabActive=action.payload
    },
    hoanTatDatVe:(state)=>{
      state.danhSachGheDangDat=[]
    }
  },
  extraReducers: (build) => {
    build.addCase(layChiTietPhongVeAction.fulfilled, (state, action) => {
      state.chiTietPhongVe = action.payload;
      
    }).addCase(datVeAction.fulfilled,(state,action)=>{
        console.log('actiondatve',action.payload)
    })
  },
});

export default quanLyDatVeReducer;
export const { datVe,chuyenTab } = quanLyDatVeReducer.actions;
