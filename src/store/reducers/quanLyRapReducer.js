import { createSlice } from "@reduxjs/toolkit";
import { layDanhSachRapAction, layThongTinChiTietPhimAction, layThongTinCumRapAction, layThongTinHeThongRapAction } from "../actions/quanLyRapActionThunk";


const quanLyRapReucer=createSlice({
    name:'quanLyRap',
    initialState:{
        heThongRapChieu: [],
        filmDetail: {},
        thongTinRapChieu:[],
        thongTinCumRap:[]
    },
    extraReducers:build=>{
        build.addCase(layDanhSachRapAction.fulfilled,(state,action)=>{
          
            state.heThongRapChieu=action.payload

        }).addCase(layThongTinChiTietPhimAction.fulfilled,(state,aciton)=>{
            state.filmDetail=aciton.payload
        }).addCase(layThongTinHeThongRapAction.fulfilled,(state,action)=>{
            state.thongTinRapChieu=action.payload
        }).addCase(layThongTinCumRapAction.fulfilled,(state,action)=>{
            state.thongTinCumRap=action.payload
        })
    }

})

export default quanLyRapReucer