import { Rate, Tabs } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { layThongTinChiTietPhimAction } from "../../store/actions/quanLyRapActionThunk";
import { quanLyRapSelector } from "../../store/selector/selector";
import "./CirclePercent.scss";
import {motion} from 'framer-motion'
const MovieDetail = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { filmDetail } = useSelector(quanLyRapSelector);

  console.log({ filmDetail });
  useEffect(() => {
    dispatch(layThongTinChiTietPhimAction(movieId));
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
        margin: 15,
      }}
      className="shadow-lg shadow-[#C780FF]"
    >
      <motion.div
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{duration:.8}}
        style={{
          boxShadow: "20px 20px 50px rgba(0,0,0,.5)",
          background: "rgba(255,255,255,0.1)",
          borderTop: "1px solid rgba(255,255,,255,.5)",
          borderBottom: "1px solid rgba(255,255,,255,.5)",
          backdropFilter: "blur(10px)",
        }}
        className="min-h-full w-full pt-36 my-9  "
      >
        <div className="grid grid-cols-12 ">
          <div className="col-span-3 col-start-2 mr-2">
            <img
              className="rounded-md"
              src={filmDetail.hinhAnh}
              //   style={{ height: 300 }}
              alt=""
            />
          </div>
          <div className="col-span-5 text-white">
            <div className="  my-auto">
              <p className="text-rose-800">
                Ngày chiếu:{" "}
                {moment(filmDetail.ngayKhoiChieu).format("DD.MM.yyyy")}
              </p>
              <p className="text-4xl ">{filmDetail.tenPhim}</p>
              <p className="py-4 px-5 text-sm italic" style={{background:'rgba(0,0,0,.3)',backdropFilter:'blur(20px)',boxShadow:'10px 5px 5px rgba(255,255,255,.5)'}}>{filmDetail.moTa}</p>
            </div>
          </div>
          <div className="col-span-3 flex flex-col items-center my-auto">
            <div className={`c100 p${filmDetail.danhGia * 10} green`}>
              <span className="">{filmDetail.danhGia * 10}%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
            <Rate disabled allowHalf value={filmDetail.danhGia / 2} />
          </div>
        </div>

        <div className=" tabThongTin mt-10 w-2/3 mx-auto">
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: <h3 className="text-white">Lịch chiếu</h3>,
                key: "1",
                children: (
                  <Tabs
                    style={{ color: "#fff" }}
                    tabPosition="left"
                    items={filmDetail.heThongRapChieu?.map((htr, index) => {
                      return {
                        label: (
                          <div className="text-lg flex flex-row items-center">
                            <img width={50} height={50} src={htr.logo} alt="" />
                            <div className="ml-3">{htr.tenHeThongRap}</div>
                          </div>
                        ),
                        key: index,
                        children: htr.cumRapChieu?.map((cumRap, index) => {
                          return (
                            <div key={index} className="mt-5">
                              <div className="flex flex-row items-center mb-3">
                                <img
                                  src={cumRap.hinhAnh}
                                  alt=""
                                  width={50}
                                  height={50}
                                />
                                <div className="ml-3 ">
                                  <p className="text-xl font-medium mb-2">
                                    {cumRap.tenCumRap}
                                  </p>
                                  <p className="m-0  italic ">
                                    {cumRap.diaChi}
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-8 gap-4">
                                {cumRap.lichChieuPhim?.map(
                                  (lichChieu, index) => {
                                    return (
                                      <NavLink
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        key={index}
                                        className="text-green-300 font-semibold text-base "
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("mm:hh A")}
                                      </NavLink>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          );
                        }),
                      };
                    })}
                  />
                ),
              },
              {
                label: <h3 className="text-white">Thông tin</h3>,
                key: "2",
                children: `Content of Tab Pane 2`,
              },
              {
                label: <h3 className="text-white">Đánh giá</h3>,
                key: "3",
                children: `Content of Tab Pane 3`,
              },
            ]}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default MovieDetail;
