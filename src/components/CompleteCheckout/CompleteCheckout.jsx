import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinNguoiDungAction } from '../../store/actions/QuanLyNguoiDungActionThunk'
import { quanLyNguoiDungSelector } from '../../store/selector/selector'
import _ from 'lodash'
const CompleteCheckout = () => {
  const dispatch=useDispatch()
  const {thongTinNguoiDung}=useSelector(quanLyNguoiDungSelector)
  useEffect(()=>{
      dispatch(layThongTinNguoiDungAction())
  },[])
 const renderTicketItem=()=>{
  return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
    const firstSeat = _.first(ticket.danhSachGhe);
    return (
      <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src={ticket.hinhAnh}
          />
          <div className="flex-grow">
            <h2 className="text-red-600 text-2xl font-bold">{ticket.tenPhim}</h2>
            <p className="text-gray-500">Thời lượng phim: {ticket.thoiLuongPhim} phút</p>
            <p className="text-gray-500">
              Thời gian:{" "}
              <span className="text-xl font-bold">
                {moment(ticket.ngayDat).format("hh:mm A - DD/MM/yyyy")}
              </span>
            </p>

            <p className="text-gray-500">
              Địa điểm: <span className="text-xl font-bold">{firstSeat.tenHeThongRap}</span>
            </p>
            <p className="text-gray-500">
              Tên rạp: <span className="text-xl font-bold">{firstSeat.tenCumRap}</span>
            </p>
            <p>
              Ghế:{" "}
              {ticket.danhSachGhe.map((ghe, index) => {
                return (
                  <span className="ml-2 inline-block text-2xl font-bold text-green-600" key={index}>
                    [{ghe.tenGhe}]
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    );
  });
 }
  return (
    <div className="p-5">
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-600">
							Lịch sử đặt vé khách hàng
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Kiểm tra thông tin về vé, chổ ngồi, giá trước khi thanh toán !!!
						</p>
					</div>
					<div className="flex flex-wrap -m-2">{renderTicketItem()}</div>
				</div>
			</section>
		</div>
  )
}

export default CompleteCheckout