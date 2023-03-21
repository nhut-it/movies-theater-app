import React from "react";
import { Outlet } from "react-router-dom";
import bg from '../../assets/imgs/bgLogin.jpg'
const LoginTemplate = () => {
  return (
    <div
      className="w-screen h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Outlet />
    </div>
  );
};

export default LoginTemplate;
