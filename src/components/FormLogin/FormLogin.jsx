import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { danhNhapAction } from "../../store/actions/QuanLyNguoiDungActionThunk";
import logo from "../../assets/imgs/logo.png";
import { motion } from "framer-motion";
const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginSchema = yup.object().shape({
    taiKhoan: yup.string().required("Không được bỏ trống"),
    matKhau: yup.string().required("Không được bỏ trống"),
  });
  const formikLogin = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      // console.log({ values });
      dispatch(danhNhapAction(values));
      navigate(-1);
    },
  });
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0, scale: 0 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex justify-center items-center  "
    >
      <form
        onSubmit={formikLogin.handleSubmit}
        className="flex w-[400px] flex-col px-5 py-5 bg-white rounded-lg animate-fade-in-down"
      >
        <img className="w-40 mx-auto" src={logo} alt="logo" />
        <label className="mt-10 relative cursor-pointer">
          <input
            style={formikLogin.errors.taiKhoan ? { borderColor: "red" } : {}}
            type="text"
            name="taiKhoan"
            value={formikLogin.values.taiKhoan}
            onChange={formikLogin.handleChange}
            placeholder="tài khoản"
            className="w-full h-12 pl-3 text-xl bg-transparent border-gray-300 border rounded-lg  outline-none focus:border-2 focus:border-blue-500   transition duration-200"
          />

          {formikLogin.errors.taiKhoan && (
            <p className="text-red-600">{formikLogin.errors.taiKhoan}</p>
          )}
        </label>
        <label className="mt-10 relative cursor-pointer">
          <input
            type="password"
            name="matKhau"
            onChange={formikLogin.handleChange}
            placeholder="Mật Khẩu"
            value={formikLogin.values.matKhau}
            className="w-full h-12 pl-3 text-xl bg-transparent border-gray-300 border rounded-lg  outline-none focus:border-2 focus:border-blue-500   transition duration-200"
            style={formikLogin.errors.matKhau ? { borderColor: "red" } : {}}
          />

          {formikLogin.errors.matKhau && (
            <p className="text-red-600">{formikLogin.errors.matKhau}</p>
          )}
        </label>
        <p className="mt-10 text-center">
          Chưa có tài khoản?
          <NavLink to="/register" className="text-blue-500 underline ml-3">
            Đăng ký ngay
          </NavLink>
        </p>
        {/* <p className="text-center mt-10">
          Admin account: nts1 / Password: 123456
        </p> */}
        <button
          type="submit"
          className="mt-10 py-3 bg-blue-500 text-white text-xl font-bold tracking-wide rounded-md hover:bg-blue-700 transiton duration-200"
        >
          ĐĂNG NHẬP
        </button>
      </form>
    </motion.div>
  );
};

export default FormLogin;
