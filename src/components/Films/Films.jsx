import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { quanLyPhimSelector } from "../../store/selector/selector";
import {
  layDSPhimAction,
  xoaFilmsAction,
} from "../../store/actions/QuanLyPhimActionThunk";

const { Search } = Input;
const Films = () => {
  const dispatch = useDispatch();
  const { arrFilmDefault } = useSelector(quanLyPhimSelector);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(layDSPhimAction(""));
  }, []);

  const onSearch = (value) => {
    dispatch(layDSPhimAction(value));
  };

  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      width: "8%",
      fixed: "left",

      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDireactions: ["descend"],
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      width: "15%",

      render: (text, film, index) => {
        return (
          <img
            key={index}
            src={film.hinhAnh}
            alt={film.tenPhim}
            width={80}
            height={80}
            onError={(e) => {
              e.target.onError = null;
              e.target.src = `https://picsum.photos/id/${index}/50/50`;
            }}
          />
        );
      },
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      width: "25%",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = a.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDireactions: ["descend", "ascend"],
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (text, film) => {
        return film.moTa.length > 100
          ? film.moTa.substr(0, 100) + " ..."
          : film.moTa;
      },
      sortDireactions: ["descend", "ascend"],
    },
    {
      title: "Action",
      width: "11%",
      fixed: "right",

      render: (text, film) => {
        // console.log('ma phim',film.maPhim)
        return (
          <div className="text-center flex">
            <NavLink to={`editfilm/${film.maPhim}`} className=" text-blue-800">
              <EditOutlined className="text-xl" />
            </NavLink>
            <span
              className="text-red-700 text-xl cursor-pointer mx-5"
              onClick={() => {
                if (
                  window.confirm("Bạn có chắc muốn xóa phim: " + film.tenPhim)
                ) {
                  dispatch(xoaFilmsAction(film.maPhim));
                  dispatch(layDSPhimAction(""));
                }
              }}
            >
              <DeleteOutlined />
            </span>
            <NavLink
              to={`/admin/films/showtime/${film.maPhim}`}
              className="mr-5 text-blue-800"
            >
              <CalendarOutlined className="text-2xl" />
            </NavLink>
          </div>
        );
      },
    },
  ];

  const data = arrFilmDefault;

  return (
    <div>
      <h3 className="text-3xl mb-5">Quản lý phim</h3>
      <Button
        className="bg-[#1677FF] text-white	hover:text-white"
        size="large"
        onClick={() => {
          navigate("addfilms");
        }}
      >
        Thêm phim
      </Button>
      <Search
        className="my-5"
        // className="bg-[#1677FF] text-white	hover:text-white my-5"
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
        rowKey={(data) => data.maPhim}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default Films;
