import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GROUPID, USER_LOGIN } from "../../config/setting";
import logo from "../../assets/imgs/logo.png";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { dangKyAction } from "../../store/actions/QuanLyNguoiDungActionThunk";
import { validationUserInfo } from "../../_core/schema/Validate";
import { quanLyNguoiDungSelector } from "../../store/selector/selector";
import _ from 'lodash'
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userResgister } = useSelector(quanLyNguoiDungSelector);
  const formikRegister = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: GROUPID,
      hoTen: "",
    },
    validationSchema: validationUserInfo,
    onSubmit: (values) => {
      dispatch(dangKyAction(values));
      if(!_.isEmpty(userResgister)){

        navigate('/auth/login')
        
      
      }
    },
  });
  
    return (
      <div className="h-screen flex justify-center items-center  ">
        <form
          onSubmit={formikRegister.handleSubmit}
          className="flex w-[480px] flex-col px-5 py-5 bg-white rounded-lg animate-fade-in-left"
        >
          <img className="w-40 mx-auto" src={logo} alt="logo" />
          <div className="grid grid-cols-2 gap-3">
            <label className="hoten mt-10 relative cursor-pointer">
              <input
                style={
                  formikRegister.errors.hoTen ? { borderColor: "red" } : {}
                }
                type="text"
                name="hoTen"
                onChange={formikRegister.handleChange}
                placeholder="Họ tên"
                className="w-full h-12 pl-3 text-xl bg-transparent border-gray-300 border rounded-lg  outline-none focus:border-2 focus:border-blue-500  transition duration-200"
              />

              {formikRegister.errors.taiKhoan && (
                <p className="text-red-600 text-sm">
                  {formikRegister.errors.hoTen}
                </p>
              )}
            </label>
            <label className="sdt mt-10 relative cursor-pointer">
              <input
                style={formikRegister.errors.soDt ? { borderColor: "red" } : {}}
                type="text"
                name="soDt"
                onChange={formikRegister.handleChange}
                placeholder="Số điện thoại"
                className="w-full h-12 pl-3 text-xl bg-transparent border-gray-300 border rounded-lg  outline-none focus:border-2 focus:border-blue-500  transition duration-200"
              />

              {formikRegister.errors.soDt && (
                <p className="text-red-600 text-sm">
                  {formikRegister.errors.soDt}
                </p>
              )}
            </label>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <label className="taikhoan mt-10 relative cursor-pointer">
              <input
                style={
                  formikRegister.errors.taiKhoan ? { borderColor: "red" } : {}
                }
                type="text"
                name="taiKhoan"
                onChange={formikRegister.handleChange}
                placeholder="Tài khoản"
                className="w-full h-12 pl-3 text-xl bg-transparent border-gray-300 border rounded-lg  outline-none focus:border-2 focus:border-blue-500  transition duration-200"
              />

              {formikRegister.errors.taiKhoan && (
                <p className="text-red-600 text-sm">
                  {formikRegister.errors.taiKhoan}
                </p>
              )}
            </label>
            <label className="email mt-10 relative cursor-pointer">
              <input
                style={
                  formikRegister.errors.email ? { borderColor: "red" } : {}
                }
                type="text"
                name="email"
                onChange={formikRegister.handleChange}
                placeholder="Email"
                className="w-full h-12 pl-3 text-xl bg-transparent border-gray-300 border rounded-lg  outline-none focus:border-2 focus:border-blue-500  transition duration-200"
              />

              {formikRegister.errors.taiKhoan && (
                <p className="text-red-600 text-sm">
                  {formikRegister.errors.email}
                </p>
              )}
            </label>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <label className="taikhoan mt-10 relative cursor-pointer">
              <input
                style={
                  formikRegister.errors.matKhau ? { borderColor: "red" } : {}
                }
                type="password"
                name="matKhau"
                onChange={formikRegister.handleChange}
                placeholder="Mật khẩu"
                className="w-full h-12 pl-3 text-xl bg-transparent border-gray-300 border rounded-lg  outline-none focus:border-2 focus:border-blue-500  transition duration-200"
              />

              {formikRegister.errors.matKhau && (
                <p className="text-red-600 text-sm">
                  {formikRegister.errors.matKhau}
                </p>
              )}
            </label>
            <label className="email mt-10 relative cursor-pointer">
              <input
                style={
                  formikRegister.errors.matKhauNhapLai
                    ? { borderColor: "red" }
                    : {}
                } 
                type="password"
                name="matKhauNhapLai"
                onChange={formikRegister.handleChange}
                placeholder="Nhập lại mật khẩu"
                className="w-full h-12 pl-3 text-xl bg-transparent border-gray-300 border rounded-lg  outline-none focus:border-2 focus:border-blue-500  transition duration-200"
              />

              {formikRegister.errors.matKhauNhapLai && (
                <p className="text-red-600 text-sm">
                  {formikRegister.errors.matKhauNhapLai}
                </p>
              )}
            </label>
          </div>

          <p className="mt-10 text-center">
            Đã có tài khoản?
            <NavLink to="/auth/login" className="text-blue-500 underline ml-3">
              Đăng nhập ngay
            </NavLink>
          </p>

          <button
            type="submit"
            className="mt-10 py-3 bg-blue-500 text-white text-xl font-bold tracking-wide rounded-md hover:bg-blue-700 transiton duration-200"
          >
            ĐĂNG KÍ
          </button>
        </form>
      </div>
    );
  
};

export default Register;
