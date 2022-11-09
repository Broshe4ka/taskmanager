import Header from "../Header";
import Footer from "../Footer";
import { IndexInfo } from "typescript";
import { LayoutProps } from "./index.props";
import { FC } from "react";


const Layout:FC<LayoutProps> = ({children}) => (
  <>
    <Header/>
      {children}
    <Footer/>
  </>
);

export default Layout;