import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatVeServices } from "../../services/QuanLyDatVeSerice";


export const  layChiTietPhongVeAction=createAsyncThunk('quanLyDatve/layChiTietPhongVeAction',async(maPhongVe)=>{


    try {
        const {data}=await quanLyDatVeServices.layChiTietPhongVe(maPhongVe)
        if(data.statusCode===200){
            return data.content
        }
       
    } catch (error) {
        console.log(error)
    }
})

export const datVeAction=createAsyncThunk('quanLyDatVe/datVeAction',async(thongTinDatVe)=>{


    try {
        const {data}=await quanLyDatVeServices.datVe(thongTinDatVe)
        // console.log({thongTinDatVe})
        return data.content

    } catch (error) {
        console.log(error)
    }
})