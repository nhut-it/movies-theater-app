import React, { Fragment } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/imgs/logo.png'
import {HiOutlineLogout} from 'react-icons/hi'
import { useSelector } from 'react-redux';
import { quanLyNguoiDungSelector } from '../../store/selector/selector';
import { TOKEN, USER_LOGIN } from '../../config/setting';
import _ from 'lodash'
const Header = () => {
  const {userLogin} =useSelector(quanLyNguoiDungSelector)
  console.log('userlogin',userLogin)
  const navigate=useNavigate()
  const renderLogin = () => {
		if (_.isEmpty(userLogin)) {
			return (
				<button
					onClick={() => {
						navigate('/auth/login')
					}}
					className="self-center px-8 py-3 rounded">
					Đăng nhập
				</button>
			);
		}
		return (
			<Fragment>
				<button
					className="mx-5 flex items-center text-lg"
					onClick={() => {
						navigate('profile')
					}}>
					<span className="mr-3 w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center">
						{userLogin.taiKhoan.substr(0, 1).toUpperCase()}
					</span>{" "}
					Xin chào, {userLogin.taiKhoan}
				</button>
				<button
					onClick={() => {
						localStorage.removeItem(USER_LOGIN);
						localStorage.removeItem(TOKEN);
						navigate('/')
						window.location.reload();
					}}
					className="flex items-center px-8 py-3">
					Đăng xuất
					<HiOutlineLogout style={{ fontSize: 20, marginLeft: 5 }} />
				</button>
			</Fragment>
		);
	};
  return (
		<nav className="text-white  bg-nav-black">
			<div className="flex justify-between h-16 mx-auto ">
				<NavLink to="/" className="flex-none items-center p-2">
					<img src={logo} alt="logo" className="w-24" />
				</NavLink>
				{renderLogin()}
			</div>
		</nav>
	);
}

export default Header