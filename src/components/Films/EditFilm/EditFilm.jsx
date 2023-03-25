import { Button, DatePicker, Form, Input, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GROUPID } from "../../../config/setting";
import {
  capNhatPhimUploadAction,
  layDSPhimAction,
  layThongTinPhimAction,
} from "../../../store/actions/QuanLyPhimActionThunk";
import { quanLyPhimSelector } from "../../../store/selector/selector";
import { validationFilmInfo } from "../../../_core/schema/Validate";

const EditFilm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { maPhim } = useParams();
  const [img, setImg] = useState("");
  // console.log("img", img);
  const { movieDetail } = useSelector(quanLyPhimSelector);
  // console.log("movieDetail", movieDetail);

  useEffect(() => {
    dispatch(layThongTinPhimAction(maPhim));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: movieDetail?.maPhim,
      tenPhim: movieDetail?.tenPhim,
      trailer: movieDetail?.trailer,
      moTa: movieDetail?.moTa,
      ngayKhoiChieu: movieDetail?.ngayKhoiChieu,
      dangChieu: movieDetail?.dangChieu,
      sapChieu: movieDetail?.sapChieu,
      hot: movieDetail?.hot,
      danhGia: movieDetail?.danhGia,
      hinhAnh: null,
      maNhom: GROUPID,
    },
    validationSchema: validationFilmInfo,
    onSubmit: (values) => {
      // console.log('values',values);
      let formData = new FormData();
      // console.log("values", values);

      for (let key in values) {
        // console.log('key',key)

        if (key === "hinhAnh") {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        } else {
          formData.append(key, values[key]);
        }
      }

    
      dispatch(capNhatPhimUploadAction(formData));

      // dispatch(layDSPhimAction());
      navigate("/admin/films");
    },
  });

  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangFile = async (e) => {
    let file = e.target.files[0];
    // console.log('file',file)

    if (
      file.type === "image/png" ||
      file.type === "image/jpg" ||
      file.type === "image/jpeg" ||
      file.type === "image/gif"
    ) {
      await formik.setFieldValue("hinhAnh", file);

      // load img state
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImg(e.target.result);
      };

      // console.log('reader',reader)
    }
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
        size="large"
      >
        <div
          className="w-2/3 mx-auto border-2 bg-gray-200 px-5 rounded-lg"
          style={{ boxShadow: "2px 4px 10px 1px rgba(201,201,201,0.47)" }}
        >
          <h3 className="text-2xl mb-5  font-bold text-gray-600 text-center mt-3 ">
            CHỈNH SỬA THÔNG TIN PHIM
          </h3>
          <Form.Item label="Tên phim">
            <Input
              name="tenPhim"
              onChange={formik.handleChange}
              value={formik.values.tenPhim}
              style={formik.errors.tenPhim ? { borderColor: "red" } : {}}
            />
            {formik.errors.tenPhim && (
              <p className="text-red-600">{formik.errors.tenPhim}</p>
            )}
          </Form.Item>
          <Form.Item label="Trailer">
            <Input
              name="trailer"
              onChange={formik.handleChange}
              value={formik.values.trailer}
            />
          </Form.Item>
          <Form.Item label="Mô tả">
            <Input.TextArea
              name="moTa"
              onChange={formik.handleChange}
              value={formik.values.moTa}
            />
          </Form.Item>
          <Form.Item label="Ngày khởi chiếu">
            <DatePicker
              format={"DD/MM/YYYY"}
              onChange={handleChangeDatePicker}
              value={moment(formik.values.ngayKhoiChieu, [
                moment.ISO_8601,
                "DD/MM/YYYY",
              ])}
            />
          </Form.Item>
          <Form.Item label="Đang chiếu" valuePropName="checked">
            <Switch
              checked={formik.values.dangChieu}
              onChange={handleChangeSwitch("dangChieu")}
            />
          </Form.Item>
          <Form.Item label="Sắp chiếu">
            <Switch
              checked={formik.values.sapChieu}
              onChange={handleChangeSwitch("sapChieu")}
            />
          </Form.Item>
          <Form.Item label="Hot">
            <Switch
              checked={formik.values.hot}
              onChange={handleChangeSwitch("hot")}
            />
          </Form.Item>
          <Form.Item label="Đánh giá">
            <InputNumber
              onChange={(value) => formik.setFieldValue("danhGia", value)}
              min={0}
              max={10}
              value={formik.values.danhGia}
            />
          </Form.Item>
          <Form.Item label="Hình ảnh">
            <input
              type="file"
              onChange={handleChangFile}
              accept="image/png, image/gif, image/jpeg"
            />
            <img
              style={{ width: 150, height: 150, marginTop: 15 }}
              src={img === "" ? formik.values.hinhAnh : img}
              alt=""
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              className="bg-[#1677FF] text-white	hover:text-white"
              disabled={!formik.isValid}
            >
              Cập nhật
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default EditFilm;
