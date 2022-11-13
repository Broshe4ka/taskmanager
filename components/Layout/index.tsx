import Header from "../Header";
import Footer from "../Footer";
import { IndexInfo } from "typescript";
import { LayoutProps } from "./index.props";
import { FC } from "react";
import React from "react";




const Layout:FC<LayoutProps> = ({children}) => (
  <>
    <Header/>
    <div className="wrapper">
      {children}
    </div>
    <Footer/>
  </>
);

export default React.memo(Layout);