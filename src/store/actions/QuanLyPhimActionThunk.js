import { createAsyncThunk } from "@reduxjs/toolkit";
import { NotifiFunction } from "../../components/Notification/Notification";
import { quanLyPhimServices } from "../../services/QuanLyPhimService";

export const layDSPhimAction=createAsyncThunk('quanLyPhim/layDSPhimAction',async(tenPhim)=>{


    try {
        const {data}=await quanLyPhimServices.layDanhSachPhim(tenPhim)
        // console.log('dataphim',data.content)
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
        
        return data.content
    }
    } catch (error) {
        console.log(error)
    }
})

export const themPhimUploadHinhAction=createAsyncThunk('quanLyPhim/themPhimUploadHinhAction',async(dataForm)=>{


    try {
        const {data}=await quanLyPhimServices.themPhimUploadHinh(dataForm)
        if(data.statusCode===200){
            NotifiFunction('success','Thêm thành công','')
        }
    } catch (error) {
        NotifiFunction('error',error.response.data.content)
    }
})

export const xoaFilmsAction=createAsyncThunk('quanLyPhim/xoaFilmsAction',async(maPhim)=>{
    try {
        const {data}=await quanLyPhimServices.xoaPhim(maPhim)
        if(data.statusCode===200){
            NotifiFunction('success','Xóa thành công','')
        }
    } catch (error) {
       
        NotifiFunction('error','xoa khong thanh cong','')
    }
})

export const capNhatPhimUploadAction=createAsyncThunk('quanLyPhim/capNhatPhimUploadAction',async(formData)=>{

    try {
        // console.log('formDataThunk',formData)
        const {data}=await quanLyPhimServices.capNhatPhimUpload(formData)
        if(data.statusCode === 200){
            NotifiFunction('success','cập nhật thành công','')
        }

    } catch (error) {
        NotifiFunction('error',error.response.data.content,'')
    }
})

