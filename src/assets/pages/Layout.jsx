import { Outlet } from "react-router-dom";
import Navber from "../../components/Navber/Navbar";
import Footer from "../../components/Footer/Footer";



const Layout = ()=>{
    return(
        <>
        <Navber/>
        <Outlet/>

        <Footer/>
        </>
    )
}
export default Layout;


























