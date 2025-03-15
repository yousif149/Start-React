import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Nav";
import { Outlet } from "react-router";

export default function Layout(){


    return(
        <>

        <Navbar />
       <div className="container-fluid p-0 m-0">
           <Outlet />
       </div>
        <Footer />
        </>
    )
}