import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useHref } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Login from "./pages/Login";
import LoginTemplate from "./templates/LoginTemplate";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import { useEffect } from "react";
import CheckOut from "./components/CheckOut";
import CheckOutThemelate from "./templates/CheckOutTemplate/CheckOutThemelate";
import CheckOutTab from "./components/CheckOutTab";
import Register from "./components/Register";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Dashboard from "./components/Dashboard/Dashboard";
import User from "./components/User";
import EditUser from "./components/User/EditUser";

function App() {
  const href = useHref();
  console.log({ href });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [href]);
  return (
    <Routes>
      <Route path="/" element={<HomeTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="detail/:movieId" element={<MovieDetail />} />
      </Route>
      <Route path="auth" element={<LoginTemplate />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/checkout/:maLichChieu" element={<CheckOutTab />} />

      <Route path="/admin" element={<AdminTemplate />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<User />} />

        <Route path="users/edit/:id" element={<EditUser />} />
      </Route>
    </Routes>
  );
}

export default App;
