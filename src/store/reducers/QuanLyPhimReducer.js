import { createSlice } from "@reduxjs/toolkit";
import { layDSPhimAction, layThongTinPhimAction } from "../actions/QuanLyPhimActionThunk";

const QuanLyPhimReducer = createSlice({
  name: "quanLyPhim",
  initialState: {
    arrFilm: [],
    arrFilmDefault: [],
    movieDetail: null,
  },
  reducers:{
    setThongTinPhim:(state)=>{
        state.movieDetail=null
    }
  },
  extraReducers:build=>{
    build.addCase(layDSPhimAction.fulfilled,(state,action)=>{
        state.arrFilm=action.payload
        console.log('dsPhim',state.arrFilm)
    }).addCase(layThongTinPhimAction.fulfilled,(state,action)=>{
        state.movieDetail=action.payload
    })
  }
});

export default QuanLyPhimReducer
export const {setThongTinPhim}=QuanLyPhimReducer.actions