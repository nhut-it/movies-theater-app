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
      </Route>
      <Route path="/checkout" element={<CheckOutThemelate />}>
          <Route path=":maLichChieu" element={<CheckOutTab />} />
        </Route>
    </Routes>
  );
}

export default App;
