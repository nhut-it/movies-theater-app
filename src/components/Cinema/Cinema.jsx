import { Tabs } from "antd";
import moment from "moment";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { quanLyRapSelector } from "../../store/selector/selector";

const Cinema = () => {
  const { heThongRapChieu } = useSelector(quanLyRapSelector);
  console.log({heThongRapChieu})
  return (
    <div className="h-screen overflow-hidden overflow-y-auto">
      <Tabs
        style={{ backgroundColor: "rgb(245, 245, 242)" }}
        tabPosition="left"
        items={heThongRapChieu?.map((rapChieu, index) => {
          return {
            label: (
              <img
                src={rapChieu.logo}
                alt=""
                className="rounded-full"
                width="50"
              />
            ),
            key: index,
            children: (
              <Tabs
                tabPosition="left"
                items={rapChieu.lstCumRap.map((cumRap, index) => {
                  return {
                    label: (
                      <div className="flex items-center w-[400px]" key={index}>
                        <img src={rapChieu.logo} alt="" width="50" />
                        <div className="ml-2 text-left grow w-full ">
                          <p className="text-lg font-medium mb-1">
                            {cumRap.tenCumRap}
                          </p>
                          <p className="m-0 italic">{cumRap.diaChi}</p>
                        </div>
                      </div>
                    ),
                    key: index,
                    children: cumRap.danhSachPhim.map((phim, index) => {
                      return (
                        <Fragment key={index}>
                          <div className="my-5">
                            <div className="flex">
                              <img
                                style={{ width: 100, height: "100%" }}
                                src={phim.hinhAnh}
                                alt={phim.tenPhim}
                              />
                              <div className="ml-3">
                                <p className="text-lg text-red-600 font-medium">
                                  {phim.tenPhim}
                                </p>
                                <div className="grid grid-cols-5 gap-3">
                                  {phim.lstLichChieuTheoPhim?.map(
                                    (lichChieu) => {
                                     
                                      return (
                                        <NavLink
                                          to={`/checkout/${lichChieu.maLichChieu}`}
                                          key={lichChieu.maLichChieu}
                                          className=" "
                                        >
                                          {moment(
                                            lichChieu.ngayChieuGioChieu
                                          ).format("hh:mm A")}
                                        </NavLink>
                                      )
                                    }
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </Fragment>
                      );
                    }),
                  };
                })}
              />
            ),
          };
        })}
      />
    </div>
  );
};

export default Cinema;
