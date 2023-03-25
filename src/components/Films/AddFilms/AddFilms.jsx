import { Button, DatePicker, Form, Input, InputNumber, Switch } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GROUPID } from '../../../config/setting';
import { themPhimUploadHinhAction } from '../../../store/actions/QuanLyPhimActionThunk';
import { validationFilmInfo } from '../../../_core/schema/Validate';

const AddFilms = () => {
    const dispatch=useDispatch()
	const [img, setImg] = useState("");
    const naviagte=useNavigate()




    const handleChangeDatePicker = (value) => {
		let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
		formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
	};


    const formik = useFormik({
		initialValues: {
			tenPhim: "",
			trailer: "",
			moTa: "",
			ngayKhoiChieu: "",
			dangChieu: false,
			sapChieu: false,
			hot: false,
			danhGia: 0,
			hinhAnh: {},
			maNhom: GROUPID,
		},
		validationSchema: validationFilmInfo,
		onSubmit: (values) => {
			let formData = new FormData();
			console.log('values',values)
			for (let key in values) {
				if (key === "hinhAnh") {
					formData.append("File", values.hinhAnh, values.hinhAnh.name);
				} else {
					formData.append(key, values[key]);
				}
			}
            for (let property of formData.entries()) {
				console.log(property[0], property[1]);
			  }
			
			dispatch(themPhimUploadHinhAction(formData));
            naviagte('/admin/films')
		},
	});


    const handleChangFile = (e) => {
		let file = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onload = (e) => {
			setImg(e.target.result);
		};

		formik.setFieldValue("hinhAnh", file);
	};

    const handleChangeSwitch = (name) => {
		return (value) => {
			formik.setFieldValue(name, value);
		};
	};


    return (
		<div className="h-full flex flex-col justify-center ">
			<Form
				onSubmitCapture={formik.handleSubmit}
				labelCol={{
					span: 4,
				}}
				wrapperCol={{
					span: "100%",
				}}
				layout="horizontal"
				size="large">
				<div
					className="w-2/3 mx-auto border-2 bg-gray-200 px-5 rounded-lg"
					style={{ boxShadow: "2px 4px 10px 1px rgba(201,201,201,0.47)" }}>
					<h3 className="text-2xl font-bold text-gray-600 text-center mt-3 ">THÊM PHIM MỚI</h3>
					<Form.Item label="Tên phim">
						<Input
							name="tenPhim"
							onChange={formik.handleChange}
							style={formik.errors.tenPhim ? { borderColor: "red" } : {}}
						/>
						{formik.errors.tenPhim && <p className="text-red-600">{formik.errors.tenPhim}</p>}
					</Form.Item>
					<Form.Item label="Trailer">
						<Input name="trailer" onChange={formik.handleChange} />
					</Form.Item>
					<Form.Item label="Mô tả">
						<Input name="moTa" onChange={formik.handleChange} />
					</Form.Item>
					<Form.Item label="Ngày khởi chiếu">
						<DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
					</Form.Item>
					<Form.Item label="Đang chiếu" valuePropName="checked" onChange={handleChangeSwitch("dangChieu")}>
						<Switch />
					</Form.Item>
					<Form.Item label="Sắp chiếu" valuePropName="checked" onChange={handleChangeSwitch("sapChieu")}>
						<Switch />
					</Form.Item>
					<Form.Item label="Hot" valuePropName="checked" onChange={handleChangeSwitch("hot")}>
						<Switch />
					</Form.Item>
					<Form.Item label="Đánh giá">
						<InputNumber onChange={(value) => formik.setFieldValue("danhGia", value)} min={0} max={10} />
					</Form.Item>
					<Form.Item label="Hình ảnh">
						<input
							type="file"
							name="hinhAnh"
							onChange={handleChangFile}
							accept="image/png, image/gif, image/jpeg, image/jpg"
						/>
						<img style={{ width: 150, height: 150, marginTop: 15 }} src={img} alt="" />
					</Form.Item>
					<Form.Item>
						<Button
						 className="bg-[#1677FF] text-white	hover:text-white"
						disabled={!formik.isValid} type="success" size="large" htmlType="submit">
							Thêm phim
						</Button>
					</Form.Item>
				</div>
			</Form>
		</div>
	);
}

export default AddFilms