import { Button, DatePicker, Form, InputNumber, Select } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { taoLichChieuAciton } from "../../../store/actions/QuanLyDatVeActionThunk";
import {
  layThongTinCumRapAction,
  layThongTinHeThongRapAction,
} from "../../../store/actions/quanLyRapActionThunk";
import { quanLyRapSelector } from "../../../store/selector/selector";
import { validationShowTime } from "../../../_core/schema/Validate";

const ShowTime = () => {
  const {maPhim} = useParams();
  const dispatch = useDispatch();

  const { thongTinRapChieu, thongTinCumRap } = useSelector(quanLyRapSelector);

//   console.log('param',param)
  useEffect(() => {
    dispatch(layThongTinHeThongRapAction());
  }, []);

  const formik = useFormik({
    initialValues: {
      maPhim: maPhim,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    validationSchema: validationShowTime,
    onSubmit: async (values) => {
      console.log("values", values);
    dispatch(taoLichChieuAciton(values))
    },
  });

  const handleChangeHTR = async (value) => {
    dispatch(layThongTinCumRapAction(value));
  };

  const handleChangeValue = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
      // console.log('value',value)
    };
  };

  const onChangeDate = (value) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss")
    );
  };

  return (
    <div className="h-full flex flex-col justify-center ">
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: "100%",
        }}
        layout="horizontal"
        size="large"
      >
        <div
          className="w-1/2 mx-auto border-2 bg-gray-200 p-5 rounded-lg"
          style={{ boxShadow: "2px 4px 10px 1px rgba(201,201,201,0.47)" }}
        >
          <h3 className="text-2xl text-gray-600 font-bold text-center">
            TẠO LỊCH CHIẾU
          </h3>

          <Form.Item label="Hệ thống rạp">
            <Select
              className="mr-3"
              onChange={handleChangeHTR}
              options={thongTinRapChieu?.map((htr) => ({
                label: htr.tenHeThongRap,
                value: htr.maHeThongRap,
              }))}
            />
          </Form.Item>
          <Form.Item label="Cụm rạp">
            <Select
              onChange={handleChangeValue("maRap")}
              options={thongTinCumRap?.map((cumRap) => ({
                label: cumRap.tenCumRap,
                value: cumRap.maCumRap,
              }))}
            />
            {formik.errors.maRap && (
              <p className="text-red-600">{formik.errors.maRap}</p>
            )}
          </Form.Item>
          <Form.Item label="Ngày chiếu, giờ chiếu">
            <DatePicker
              name="ngayChieuGioChieu"
              format="DD/MM/YYYY hh:mm:ss"
              showTime
              onOk={onChangeDate}
            />
            {formik.errors.ngayChieuGioChieu && (
              <p className="text-red-600">{formik.errors.ngayChieuGioChieu}</p>
            )}
          </Form.Item>
          <Form.Item label="Giá vé">
            <InputNumber
              min={1}
              max={150000}
              onChange={handleChangeValue("giaVe")}
              style={formik.errors.giaVe ? { borderColor: "red" } : {}}
            />
            {formik.errors.giaVe && (
              <p className="text-red-600">{formik.errors.giaVe}</p>
            )}
          </Form.Item>

          <Form.Item>
            <Button
              className="bg-[#1677FF] text-white	hover:text-white"
              htmlType="submit"
              type="primary"
              size="large"
              disabled={!formik.isValid}
            >
              Tạo lịch chiếu
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default ShowTime;
