import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "../../services/QuanLyPhimService";


export const layCarouselAction=createAsyncThunk('quanLyCarousel/layCarouselAction',async()=>{
    try {
        const {data}=await quanLyPhimServices.layDanhSachBanner()
        // console.log({data})
        if(data.statusCode===200){
            return data.content
        }
    } catch (error) {
        console.log(error)
    }
})
