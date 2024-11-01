import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutWebSite from "../pages/website/Layout";
import Filter from "../pages/website/Filter";
import Home from "../pages/website/Home";
import Test from "../pages/website/Test";
import Detail from "../pages/website/Detail";
import Order from "../pages/website/Order";
import Register from "../pages/website/auth/Register";
import Login from "../pages/website/auth/Login";
import Account from "../pages/website/profile/Account";
import Favorite from "../pages/website/profile/Favorite";
import Seting from "../pages/website/profile/Seting";
import MyHotel from "../pages/website/profile/MyHotel";

type Props = {};

const Router = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebSite />}>
            <Route index element={<Home/>} />
            <Route path="/filter" element={<Filter/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="/order" element={<Order/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/profile/account" element={<Account/>} />
            <Route path="/profile/favovite" element={<Favorite/>} />
            <Route path="/profile/myhotel" element={<MyHotel/>} />
            <Route path="/profile/seting" element={<Seting/>} />
            <Route path="/test" element={<Test/>} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
