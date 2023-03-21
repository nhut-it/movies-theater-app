import { createSlice } from "@reduxjs/toolkit";
import { layDanhSachRapAction, layThongTinChiTietPhimAction } from "../actions/quanLyRapActionThunk";


const quanLyRapReucer=createSlice({
    name:'quanLyRap',
    initialState:{
        heThongRapChieu: [],
        filmDetail: {},
    },
    extraReducers:build=>{
        build.addCase(layDanhSachRapAction.fulfilled,(state,action)=>{
          
            state.heThongRapChieu=action.payload

        }).addCase(layThongTinChiTietPhimAction.fulfilled,(state,aciton)=>{
            state.filmDetail=aciton.payload
        })
    }

})

export default quanLyRapReucer