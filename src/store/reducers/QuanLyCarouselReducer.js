import { createSlice } from "@reduxjs/toolkit";
import { layCarouselAction } from "../actions/QuanLyCarouselActionThunk";


const QuanLyCarouselReducer=createSlice({
    name:'quanLyCarousel',
    initialState:{ 
        arrBannerImg:[]
    },
    extraReducers:build=>{
        build.addCase(layCarouselAction.fulfilled,(state,action)=>{
            // console.log('carousel',action.payload)
            state.arrBannerImg=action.payload
            // console.log('imgCarousel',state.arrBannerImg)
            
        })
    }
})
export default QuanLyCarouselReducer