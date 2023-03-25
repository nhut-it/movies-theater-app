import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes, useHref } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Login from "./pages/Login";
import LoginTemplate from "./templates/LoginTemplate";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import { useEffect } from "react";
import CheckOutTab from "./components/CheckOutTab";
import Register from "./components/Register";
import AdminTemplate from "./templates/AdminTemplate";
import Dashboard from "./components/Dashboard";
import User from "./components/User";
import EditUser from "./components/User/EditUser";
import AddUser from "./components/User/AddUser";
import Films from "./components/Films";
import AddFilms from "./components/Films/AddFilms";
import EditFilm from "./components/Films/EditFilm";
import ShowTime from "./components/Films/ShowTime";

function App() {
  const href = useHref();
  // console.log({ href });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [href]);
  return (
    <Routes>
      <Route path="/" element={<HomeTemplate />}>
        <Route index element={<Home />} />
        <Route path="detail/:movieId" element={<MovieDetail />} />
        <Route path="*" element={<Navigate to='/'/>}/>
      </Route>

      <Route path="auth" element={<LoginTemplate />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/checkout/:maLichChieu" element={<CheckOutTab />} />

      <Route path="/admin" element={<AdminTemplate />}>
        <Route index  element={<Dashboard />} />
        <Route path="users" element={<User />} />

        <Route path="users/edit/:id" element={<EditUser />} />
        <Route path="users/adduser" element={<AddUser />} />

        <Route path="films" element={<Films />} />
        <Route path="films/addfilms" element={<AddFilms />} />
        <Route path="films/editfilm/:maPhim" element={<EditFilm />} />
        <Route path="films/showtime/:maPhim" element={<ShowTime/>}/>


        <Route path="*" element={<Navigate to={'/admin'}/>}/>
       
      </Route>
    </Routes>
  );
}

export default App;
