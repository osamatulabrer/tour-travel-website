import { Outlet,  } from "react-router-dom";
import Navber from "../../components/Navber/Navbar";
import Footer from "../../components/Footer/Footer";
import 'aos/dist/aos.css';
import AOS from 'aos'; 
import { useEffect } from 'react';



const Layout = ()=>{
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 900,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
      }, []);

    return(
        <>
        <Navber/>
        <Outlet />
        <Footer/>
        </>
    )
}
export default Layout;


























