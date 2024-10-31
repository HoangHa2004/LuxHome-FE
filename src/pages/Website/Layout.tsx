import React from "react";
import Header from "../../component/ui/website/Header";
import Footer from "../../component/ui/website/Footer";
import { Outlet } from "react-router-dom";

type Props = {};

const LayoutWebSite = (props: Props) => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default LayoutWebSite;
