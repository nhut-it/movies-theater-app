import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

import { TOKEN, USER_LOGIN } from "../../config/setting";
import {
  capNhatThongTinNguoiDungAction,
  dangKyAction,
  danhNhapAction,
  layDanhSachLoaiNguoiDungAction,
  layDanhSachNguoiDungAction,
  layThongTinNguoiDungAction,
} from "../actions/QuanLyNguoiDungActionThunk";

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const quanLyNguoiDungReducer = createSlice({
  name: "quanLyNguoiDung",
  initialState: {
    userLogin: user,
    userResgister: {},
    thongTinNguoiDung: {},
    users: [],
    userTypes: [],
  },
  extraReducers: (build) => {
    build
      .addCase(danhNhapAction.fulfilled, (state, action) => {
        localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload));
        localStorage.setItem(TOKEN, action.payload.accessToken);
        state.userLogin = action.payload;
      })
      .addCase(layThongTinNguoiDungAction.fulfilled, (state, action) => {
        state.thongTinNguoiDung = action.payload;
      })
      .addCase(dangKyAction.fulfilled, (state, action) => {
        // console.log('dangki',action.payload)
        state.userResgister = action.payload;
      })
      .addCase(layDanhSachNguoiDungAction.fulfilled, (state, action) => {
        state.users = action.payload;
      }).addCase(layDanhSachLoaiNguoiDungAction.fulfilled,(state,action)=>{
        state.userTypes=action.payload
      })
  },
});

export default quanLyNguoiDungReducer;
