import React, { useEffect } from "react";
import { Outlet, useHref } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function HomeTemplate() {

  return (
    <div className="font-Roboto font-medium tracking-wide bg-[#222]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
