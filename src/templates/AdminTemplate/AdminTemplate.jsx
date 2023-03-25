import { Layout, Menu } from "antd";
import logo from "../../assets/imgs/logo.png";
import React, { Fragment, useState } from "react";
import {
  BarChartOutlined,
  FileAddOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { TOKEN, USER_LOGIN } from "../../config/setting";
import _ from "lodash";
import { useSelector } from "react-redux";
import { quanLyNguoiDungSelector } from "../../store/selector/selector";
import { HiOutlineLogout } from "react-icons/hi";
const { Header, Content, Sider } = Layout;
const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { userLogin } = useSelector(quanLyNguoiDungSelector);
  const navigate = useNavigate();
  const operations = (
    <Fragment>
      {_.isEmpty(userLogin) ? (
        ""
      ) : (
        <Fragment>
          <button
            className="mx-5 flex items-center text-lg"
            onClick={() => {
              navigate("profile");
            }}
          >
            <span className="mr-3 w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center">
              {userLogin.taiKhoan.substr(0, 1).toUpperCase()}
            </span>{" "}
            Xin chào, {userLogin.taiKhoan}
          </button>
          <button
            onClick={() => {
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(TOKEN);

              navigate("/");
              window.location.reload();
            }}
            className="flex items-center mr-5"
          >
            Đăng xuất
            <HiOutlineLogout style={{ fontSize: 20, marginLeft: 5 }} />
          </button>
        </Fragment>
      )}
    </Fragment>
  );
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo p-2">
            <img src={logo} alt="logo" />
          </div>
          <div
            className={collapsed ? "text-center" : "text-right pr-2"}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            style={{ cursor: "pointer", color: "#fff", fontSize: 20 }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <BarChartOutlined />,
                label: <NavLink to="/admin">Dashboard</NavLink>,
              },
              {
                key: "2",
                icon: <TeamOutlined />,
                label: "Users",
                children: [
                  {
                    key: "21",
                    icon: <ProfileOutlined />,
                    label: <NavLink to="/admin/users">Users</NavLink>,
                  },
                  {
                    key: "22",
                    icon: <UserAddOutlined />,
                    label: (
                      <NavLink to="users/adduser">Add user</NavLink>
                    ),
                  },
                ],
              },
              {
                key: "3",
                icon: <UnorderedListOutlined />,
                label: `Films`,
                children: [
                  {
                    key: "31",
                    icon: <ProfileOutlined />,
                    label: <NavLink to="films">Films</NavLink>,
                  },
                  {
                    key: "32",
                    icon: <FileAddOutlined />,
                    label: (
                      <NavLink to="films/addfilms">Add film</NavLink>
                    ),
                  },
                ],
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            className=" flex justify-end "
            style={{ padding: 0, color: "#fff" }}
          >
            {operations}
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              minHeight: 280,
              backgroundColor: "rgb(245, 245, 242)",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminTemplate;
