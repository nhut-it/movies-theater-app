import { HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { TOKEN, USER_LOGIN } from '../../config/setting';

import { quanLyDatVeSelector, quanLyNguoiDungSelector } from '../../store/selector/selector';
import CheckOut from '../CheckOut/CheckOut';
import CompleteCheckout from '../CompleteCheckout/CompleteCheckout';

const CheckOutTab = (props) => {
    const {tabActive} =useSelector(quanLyDatVeSelector)
    const {userLogin}=useSelector(quanLyNguoiDungSelector)
    const navigate=useNavigate()
    const operations = (
		<Fragment>
			
				<div className="flex items-center">
					<button
						className="mx-5 flex items-center text-lg"
						onClick={() => {
							// history.push("/profile");
                            navigate('profile')
						}}>
						<span className="mr-3 w-9 h-9 rounded-full bg-blue-400 flex items-center justify-center">
							{userLogin.taiKhoan.substr(0, 1).toUpperCase()}
						</span>{" "}
						Xin chào, {userLogin.taiKhoan}
					</button>
					<button
						className="flex items-center"
						onClick={() => {
							localStorage.removeItem(USER_LOGIN);
							localStorage.removeItem(TOKEN);
							
                                navigate('/')
							window.location.reload();
						}}>
						Đăng xuất
						<LogoutOutlined style={{ fontSize: 20, marginLeft: 5, marginRight: 10 }} />
					</button>
				</div>
			
		</Fragment>
	);
  return (
    <div className="tabDatVe min-h-screen">
    <Tabs
        tabBarExtraContent={operations}
        activeKey={tabActive}
        onChange={(key) => {
            // dispatch({ type: CHUYEN_TAB, number: key });
        }}
        items={[
            {
                label: (
                    <NavLink style={{ color: "black", marginLeft: 12 }} to="/">
                        <HomeOutlined style={{ fontSize: 30 }} />
                        Trang chủ
                    </NavLink>
                ),
                key: 3,
            },
            {
                label: `01. CHỌN GHẾ & THANH TOÁN`,
                key: 1,
                children: <CheckOut  />,
            },
            {
                label: `02. KẾT QUẢ ĐẶT VÉ`,
                key: 2,
                children: <CompleteCheckout/>,
            },
        ]}
    />
</div>
  )
}

export default CheckOutTab