import React from "react";
import SideBar from "./SideBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar />
        <main className="col py-3 bg-light">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
