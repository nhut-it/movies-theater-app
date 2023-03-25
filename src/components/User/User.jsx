import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachNguoiDungAction,
  xoaNguoiDungAction,
} from "../../store/actions/QuanLyNguoiDungActionThunk";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { quanLyNguoiDungSelector } from "../../store/selector/selector";

const { Search } = Input;
const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector(quanLyNguoiDungSelector);
  //   console.log({ users });

  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction(""));
  }, []);

  const onSearch = (value) => {
    dispatch(layDanhSachNguoiDungAction(value));
  };

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      // width: "5%",
      fixed: "left",
      className: "bg-white",
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      // width: "10%",
      
      className: "bg-white",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      // width: "15%",
     
      className: "bg-white",
    },
    {
      title: "Email",
      dataIndex: "email",
      // width: "20%",
      className: "bg-white",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      // width: "10%",
      className: "bg-white",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      // width: "10%",
      className: "bg-white",
    },
    {
      fixed: "right",
      title: "Thao tác",
      // width: "8%",
      className: "bg-white",
      render: (text, user) => {
        // console.log('user',user)
        return (
          <div className="text-center flex">
            <NavLink
              to={`/admin/users/edit/${user.taiKhoan}`}
              className=" text-blue-800"
            >
              <EditOutlined className="text-xl" />
            </NavLink>
            <span
              className="text-red-700 text-xl cursor-pointer mx-2"
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có chắc muốn xóa tài khoản: " + user.taiKhoan
                  )
                ) {
                  dispatch(xoaNguoiDungAction(user.taiKhoan));
                  dispatch(layDanhSachNguoiDungAction(""));
                }
              }}
            >
              <DeleteOutlined />
            </span>
          </div>
        );
      },
    },
  ];
  const data = users;
  return (
    <div className="">
      <h3 className="text-3xl mb-5">Quản lý người dùng</h3>

      <Button
        // type="primary"
        className="bg-[#1677FF] text-white	hover:text-white"
        size="large"
        onClick={() => {
          navigate("adduser");
        }}
      >
        Thêm người dùng
      </Button>

      <Search
        className="my-5 w-full "
        placeholder="Tìm kiếm"
        allowClear
        enterButton
        size="large"
        onSearch={onSearch}
      />
      <Table
        scroll={{
          x: 1300,
        }}
        size="small"
        rowKey="taiKhoan"
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default User;
