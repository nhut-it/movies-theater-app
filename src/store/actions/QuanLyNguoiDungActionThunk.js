import { createAsyncThunk } from "@reduxjs/toolkit";
import { Navigate, useNavigate } from "react-router-dom";
import { NotifiFunction } from "../../components/Notification/Notification";
import { quanLyNguoiDungServices } from "../../services/QunLyNguoiDungService";

export const danhNhapAction=createAsyncThunk('quanLyNguoiDung/danhNhapAction',async(thongTinDangNhap)=>{
    
    try {
        const {data}=await quanLyNguoiDungServices.dangNhap(thongTinDangNhap)
        console.log({data})
        if(data.statusCode===200){
            
            return data.content
        }
        
       
    } catch (error) {
        NotifiFunction("error", "Đăng nhập thất bại", error?.response.data.content);
    }
})
export const layThongTinNguoiDungAction=createAsyncThunk('quanLyNguoiDung/layThongTinNguoiDungAction',async()=>{
    
    try {
        const {data}=await quanLyNguoiDungServices.layThongTinNguoiDung()
        console.log({data})
        if(data.statusCode===200){
            
            return data.content
        }
        
       
    } catch (error) {
        NotifiFunction("error", "Đăng nhập thất bại", error?.response.data.content);
    }
})


