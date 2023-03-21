import React, { useEffect } from 'react'
import {AiOutlineFacebook} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {FiTwitter} from 'react-icons/fi'
import { Space } from 'antd'
import bctImg from '../../assets/imgs/logoSaleNoti.png'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachRapAction } from '../../store/actions/quanLyRapActionThunk'
import { quanLyRapSelector } from '../../store/selector/selector'
const Footer = () => {
    const dispatch=useDispatch()
    const {heThongRapChieu}=useSelector(quanLyRapSelector)
    console.log( {heThongRapChieu})
    useEffect(()=>{
        dispatch(layDanhSachRapAction())
    },[])

    return (
		<footer className="lg:container  mx-0 lg:grid lg:grid-cols-4 py-5  text-white bg-nav-black ">
			<div className="border-r-[1px] border-rose-600">
				<ul>
					<li className="border-b-[1px]  lg:border-b-0 border-rose-600 p-2">
						<a href="#">Điều Khoản Chung</a>
					</li>
					<li className="border-b-[1px]  lg:border-b-0 border-rose-600 p-2">
						<a href="https://www.cgv.vn/default/terms-use/">Điều Khoản Giao Dịch</a>
					</li>
					<li className="border-b-[1px]  lg:border-b-0 border-rose-600 p-2">
						<a href="https://www.cgv.vn/default/payment-policy/">Chính Sách Thanh Toán</a>
					</li>
					<li className="border-b-[1px]  lg:border-b-0 border-rose-600 p-2">
						<a href="https://www.cgv.vn/default/privacy-policy/">Chính Sách Bảo Mật</a>
					</li>
					<li className="border-b-[1px]  lg:border-b-0 border-rose-600 p-2">
						<a href="https://www.cgv.vn/default/faq/">Câu Hỏi Thường Gặp</a>
					</li>
				</ul>
			</div>
			<div className="pt-5 pb-10 text-center border-b-[1px] lg:border-r lg:border-b-0 border-rose-600">
				<h3 className="mb-5 font-bold text-rose-600">ĐỐI TÁC</h3>
				<div className="grid grid-cols-3 gap-7 justify-items-center">
					{heThongRapChieu.map((rapChieu, index) => {
						return <img key={index} className="w-12" src={rapChieu.logo} alt="" />;
					})}
				</div>
			</div>
			<div className="pt-5 text-center border-b-[1px] lg:border-r lg:border-b-0 border-rose-600 p-2">
				<h3 className="mb-7 font-bold text-rose-600">KẾT NỐI VỚI CHÚNG TÔI</h3>
				<Space size="large" style={{ fontSize: 30 }}>
					<AiOutlineFacebook className="text-[38px] hover:text-blue-600 hover:duration-200 hover:scale-125 cursor-pointer" />
					<GrInstagram className="hover:text-red-400 hover:duration-200 hover:scale-125 cursor-pointer" />
					<FiTwitter className="hover:text-blue-400 hover:duration-200 hover:scale-125 cursor-pointer" />
				</Space>
				<img className="w-[200px] mx-auto my-3" src={bctImg} alt=""></img>
			</div>
			<div className="pt-5 text-center">
				<h3 className="mb-7 font-bold text-rose-600">CHĂM SÓC KHÁCH HÀNG</h3>
				<p>
					Hotline: 1900 6017 Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết) Email hỗ trợ:
					hoidap@google.com
				</p>
			</div>
		</footer>
	);
}

export default Footer