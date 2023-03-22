import { createSlice } from "@reduxjs/toolkit";

import { TOKEN, USER_LOGIN } from "../../config/setting";
import { danhNhapAction, layThongTinNguoiDungAction } from "../actions/QuanLyNguoiDungActionThunk";

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const quanLyNguoiDungReducer = createSlice({
  name: "quanLyNguoiDung",
  initialState: {
    userLogin: user,
    thongTinNguoiDung: {},
    users: [],
    userTypes: [],
  },
  extraReducers: (build) => {
    build.addCase(danhNhapAction.fulfilled, (state, action) => {
      localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload));
      localStorage.setItem(TOKEN, action.payload.accessToken);
      state.userLogin = action.payload;
    
    }).addCase(layThongTinNguoiDungAction.fulfilled,(state,action)=>{
        state.thongTinNguoiDung=action.payload
    })
  },
});

export default quanLyNguoiDungReducer;
