import React from "react";
import "./CheckOut.scss";
import {CloseOutlined, UserOutlined} from '@ant-design/icons'
const CheckOut = () => {
    // let classDatVe = danhSachGheDangDat.length === 0 ? "disabledDatVe" : "datVe";
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-9 mt-5">
        <div className="flex flex-col items-center">
          <div className="bg-black w-4/5 p-3"></div>
          <div className='trapezoid text-center'>
            <h2 className="text-black mt-3 text-lg">Màn hình</h2>
          </div>
          <div className="mt-10">
            {/* {renderGhe()} */}
            </div>
        </div>
        <div className="grid grid-cols-4 mt-5">
          <div className="col-span-2 col-start-2 flex justify-around text-center">
            <div>
              <button className="ghe"></button>
              <p>Ghế mặc định</p>
            </div>
            <div>
              <button className="ghe gheDaDat">
                <CloseOutlined style={{ fontSize: 30 }} />
              </button>
              <p>Ghế đã đặt</p>
            </div>
            <div>
              <button className="ghe gheDangDat"></button>
              <p>Ghế đang chọn</p>
            </div>
            <div>
              <button className="ghe gheVIP"></button>
              <p>Ghế VIP</p>
            </div>
            <div>
              <button className="ghe gheBanDat">
                <UserOutlined style={{ fontSize: 20 }} />
              </button>
              <p>Ghế bạn đã đặt</p>
            </div>
          </div>
        </div>
      </div>
      <div className="thongTinDatVe col-span-3 flex flex-col justify-between  ">
        <div className=" p-10">
          <h3 className="text-center text-4xl text-green-600 font-semibold">
            {/* {danhSachGheDangDat
              .reduce((tongTien, ghe, index) => {
                return (tongTien += ghe.giaVe);
              }, 0)
              .toLocaleString()}{" "} */}
            đ
          </h3>
          <hr />
          <h3 className="text-xl">
            {/* {thongTinPhim?.tenPhim} */}
            </h3>
          <p>
            {/* Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap} */}
          </p>
          <p>
            {/* Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} */}
          </p>
          <hr />
          <div className=" my-5 text-lg font-medium">
            <span className="text-red-500">Ghế:</span>
            {/* {_.sortBy(danhSachGheDangDat, ["stt"]).map((ghe, index) => {
              return (
                <span
                  key={index}
                  className="text-green-600 ml-2 text-xl inline-block"
                >
                  {ghe.stt}
                </span>
              );
            })} */}
          </div>
          <hr />
          <div className="my-5">
            <i>Email</i>
            <p className="text-lg">
                {/* {userLogin.email} */}
                </p>
          </div>
          <hr />
          <div className="my-5">
            <i>Phone</i>
            <p className="text-lg">
                {/* {userLogin.soDT} */}
                </p>
          </div>
          <hr />
        </div>
        <div
          onClick={() => {
            // const thongTinDatVe = new ThongTinDatVe();
            // thongTinDatVe.maLichChieu = props.match.params.id;
            // thongTinDatVe.danhSachVe = danhSachGheDangDat;
            // dispatch(datVeAction(thongTinDatVe));
          }}
          className={`
      
          w-full justify-self-end text-center text-xl text-white py-4 font-bold`}
        >
          ĐẶT VÉ
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
