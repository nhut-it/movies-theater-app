import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { USER_LOGIN } from "../../config/setting";

const CheckOutThemelate = () => {
  if (localStorage.getItem(USER_LOGIN)) {
    return (
      <div>
        <Outlet />
      </div>
    );
  }else{
    
    return <Navigate to='/auth/login'/>
  }
};

export default CheckOutThemelate;
