import { createAsyncThunk } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import { quanLyRapServices } from "../../services/QuanLyRapService";

export const layDanhSachRapAction = createAsyncThunk(
  "quanLyRap/layDanhSachRapActionThunk",
  async () => {
    try {
      const { data } = await quanLyRapServices.layDanhSachHeThongRap();
      // console.log({data})
      if (data.statusCode === 200) {
        return data.content;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const layThongTinChiTietPhimAction = createAsyncThunk(
  "quanLyRap/layThongTinChiTietPhimAction",
  async (idPhim) => {
    try {
      const { data } = await quanLyRapServices.layThongTinLichChieuPhim(idPhim);
      // console.log({data})
      if (data.statusCode === 200) {
        return data.content;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const layThongTinHeThongRapAction = createAsyncThunk(
  "quanLyRap/layThongTinHeThongRapAction",
  async () => {
    try {
      const { data } = await quanLyRapServices.layThongTinHeThongRap();

      if (data.statusCode === 200) {
        return data.content;
      }
    } catch (error) {
      console.log(error.response.data.content);
    }
  }
);

export const layThongTinCumRapAction = createAsyncThunk(
  "quanLyRap/layThongTinCumRapAction",
  async (maHTRap) => {
    try {
      const { data } = await quanLyRapServices.layThongTinCumRap(maHTRap);
      if (data.statusCode === 200) {
        return data.content;
      }
    } catch (error) {
      console.log(error.response.data.content);
    }
  }
);
