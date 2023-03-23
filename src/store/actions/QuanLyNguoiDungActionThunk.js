import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
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

export const dangKyAction=createAsyncThunk('quanLyNguoiDung/dangKyAction',async(newUser)=>{
    try {
        const {data}=await quanLyNguoiDungServices.dangKy(newUser)
        console.log({data})
        if(data.statusCode===200){
            NotifiFunction('success','Đăng Ký thành công','')
            return data.content
        }

    } catch (error) {
        console.log(error.response.data.content)
        NotifiFunction('error',error.response.data.content,'')

    }
})

export const layDanhSachNguoiDungAction=createAsyncThunk('quanLyNguoiDung/layDanhSachNguoiDungAction',async(tuKhoa)=>{
    try {
        const {data}=await quanLyNguoiDungServices.layDanhSachNguoiDung(tuKhoa)
        if(data.statusCode === 200){
            return data.content
        }
    } catch (error) {
        console.log(error.response.data.content)
        
    }
})

export const capNhatThongTinNguoiDungAction=createAsyncThunk('quanLyNguoiDung/layDanhSachNguoiDungAction',async(user)=>{

    try {
        console.log('thongtincapnhat',user)
        const {data}=await quanLyNguoiDungServices.capNhatThongTinNguoiDung(user)
        if(data.statusCode===200){
            alert('cap nhat nguoi dung thanh cong')
        }
    } catch (error) {
        console.log(error.response.data.content)
        
    }
})
export const layDanhSachLoaiNguoiDungAction=createAsyncThunk('quanLyNguoiDung/layDanhSachLoaiNguoiDungAction',async()=>{
    try {
        const {data}=await quanLyNguoiDungServices.layDSLoaiNguoiDung()
        if(data.statusCode === 200){
            return data.content
           
        }
    } catch (error) {
        console.log(error.response.data.content)
        
    }
})