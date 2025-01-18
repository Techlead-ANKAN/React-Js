import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { Footer } from "./components";



function Layout() {
    return(
        <>
        <Header />

        <Outlet />

        <Footer />
        </>
    )
}

export default Layout;