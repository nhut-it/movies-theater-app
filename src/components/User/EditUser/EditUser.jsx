import { Button, Form, Input, Select } from 'antd';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { GROUPID } from '../../../config/setting';
import { capNhatThongTinNguoiDungAction, layDanhSachLoaiNguoiDungAction, layDanhSachNguoiDungAction } from '../../../store/actions/QuanLyNguoiDungActionThunk';
import { quanLyNguoiDungSelector } from '../../../store/selector/selector';
import { validationUserInfo } from '../../../_core/schema/Validate';

const EditUser = () => {

    const dispatch=useDispatch()
	const navigate=useNavigate()
    const {users}=useSelector(quanLyNguoiDungSelector)
    const {userTypes} =useSelector(quanLyNguoiDungSelector)
    console.log('userType',userTypes)
    const {id} = useParams();
 
    useEffect(() => {

		dispatch(layDanhSachLoaiNguoiDungAction());
		dispatch(layDanhSachNguoiDungAction(id));
	}, []);

    const user=users[0]
    const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			taiKhoan: user.taiKhoan,
			matKhau: user.matKhau,
			email: user.email,
			soDt: user.soDt,
			maNhom: GROUPID,
			maLoaiNguoiDung: user.maLoaiNguoiDung,
			hoTen: user.hoTen,
		},
		validationSchema: validationUserInfo,

		onSubmit: (values) => {
            console.log('capnhat',values)
			console.log('gui',typeof values.soDt)
			dispatch(capNhatThongTinNguoiDungAction(values));
			navigate(-1)
		},
	});

    const onChange = (value) => {
		formik.setFieldValue("maLoaiNguoiDung", value);
	};
    return (
		<div className="h-full flex flex-col justify-center">
			<Form
				onSubmitCapture={formik.handleSubmit}
				layout="vertical"
				labelCol={{ span: 10 }}
				wrapperCol={{ span: "100%" }}
				size="large">
				<div
					className="w-2/3 mx-auto border-2 bg-gray-200 p-5 rounded-lg "
					style={{ boxShadow: "2px 4px 10px 1px rgba(201,201,201,0.47)" }}>
					<h3 className="text-2xl text-gray-600 font-bold text-center">CHỈNH SỬA THÔNG TIN NGƯỜI DÙNG</h3>
					<div className="flex justify-center">
						<div className="w-full p-5">
							<Form.Item label="Tài Khoản">
								<Input name="taiKhoan" onChange={formik.handleChange} value={formik.values.taiKhoan} disabled />
							</Form.Item>
							<Form.Item label="Mật khẩu">
								<Input
									type="password"
									name="matKhau"
									value={formik.values.matKhau}
									onChange={formik.handleChange}
									style={formik.errors.matKhau ? { borderColor: "red" } : {}}
								/>
								{formik.errors.matKhau && <p className="text-red-600">{formik.errors.matKhau}</p>}
							</Form.Item>
							<Form.Item label="Nhập lại mật khẩu">
								<Input
									type="password"
									name="matKhauNhapLai"
									onChange={formik.handleChange}
									style={formik.errors.matKhauNhapLai ? { borderColor: "red" } : {}}
								/>
								{formik.errors.matKhauNhapLai && <p className="text-red-600">{formik.errors.matKhauNhapLai}</p>}
							</Form.Item>
						</div>
						<div className="w-full p-5">
							<Form.Item label="Họ tên">
								<Input
									name="hoTen"
									value={formik.values.hoTen}
									onChange={formik.handleChange}
									style={formik.errors.hoTen ? { borderColor: "red" } : {}}
								/>
								{formik.errors.hoTen && <p className="text-red-600">{formik.errors.hoTen}</p>}
							</Form.Item>
							<Form.Item label="Email">
								<Input
									name="email"
									value={formik.values.email}
									onChange={formik.handleChange}
									style={formik.errors.email ? { borderColor: "red" } : {}}
								/>
								{formik.errors.email && <p className="text-red-600">{formik.errors.email}</p>}
							</Form.Item>
							<Form.Item label="Số điện thoại">
								<Input
									type="text"
									name="soDt"
									value={formik.values.soDt}
									onChange={formik.handleChange}
									style={formik.errors.soDt ? { borderColor: "red" } : {}}
								/>
								{formik.errors.soDt && <p className="text-red-600">{formik.errors.soDt}</p>}
							</Form.Item>
							<Form.Item label="Loại người dùng">
								<Select
									onChange={onChange}
									value={formik.values.maLoaiNguoiDung}

									options={userTypes.map((type, index) => {
										return { label: type.tenLoai, value: type.maLoaiNguoiDung };
									})}
								/>
							</Form.Item>
							<div className="flex justify-end">
								<Button htmlType="submit" className='bg-[#1677FF] text-white	hover:text-white' disabled={!formik.isValid}>
									Cập nhật
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Form>
		</div>
	);
}

export default EditUser