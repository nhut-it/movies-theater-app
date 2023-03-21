import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "../../services/QuanLyPhimService";

export const layDSPhimAction=createAsyncThunk('quanLyPhim/layDSPhimAction',async()=>{


    try {
        const {data}=await quanLyPhimServices.layDanhSachPhim('')
        // console.log({data})
        if(data.statusCode===200){
            return data.content
        }
    } catch (error) {
        console.log(error)
    }
})

export const layThongTinPhimAction=createAsyncThunk('quanLyPhim/layThongTinPhimAction',async(maPhim)=>{
    try {
    const {data}=await quanLyPhimServices.layThongTinPhim(maPhim)
    
    if(data.statusCode===200){
        // console.log({data})
        return data.content
    }
    } catch (error) {
        console.log(error)
    }
})

