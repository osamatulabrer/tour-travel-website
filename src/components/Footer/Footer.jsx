import footerVid from "../../../public/video/footer.mp4"
import logo from '../../../public/imges/logo.png'
import { FaTelegramPlane } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Footer = ()=>{
    const [link,setLink] = useState([])
    useEffect(()=>{
        async function getData() {
            
            const conn = await axios.get('http://localhost:4000/FooterLinks')
            const res = await conn.data
            setLink(res) 
        }
        getData() 
    },[])
  
    
    return(
        <div className="relative overflow-hidden p-10 mt-12">
            <video className="absolute right-0 top-0 w-full h-full overflow-hidden z-[-1] object-cover" autoPlay loop muted>
                <source src={footerVid}/>
            </video>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-5 bg-white/80 rounded-t-xl gap-6">
                <div className="space-y-3">
                    <img className="w-28" src={logo} alt="" />
                    <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.
                    </p>
                    <div className="gap-3 flex items-center">
                        <FaTelegramPlane  />
                        <span>Noida, Uttar Pradesh</span>
                    </div>
                    <div className="gap-3 flex items-center">
                        <FaMobileAlt />
                        <span>Noida, Uttar Pradesh</span>
                    </div>
                    <div className="flex text-3xl gap-3">
                        <a href="">

                        <FaInstagram/>
                        </a>
                        <a href="">

                        <FaFacebook/>
                        </a>
                        <a href="">

                        <FaLinkedin/>
                        </a>
                    </div>
                </div>
                {/* important links */}
                <div className="sm:col-span-2">
                    <div className="flex items-center justify-between flex-wrap">

                    <div className=" ">
                        <h1 className="text-xl font-bold mb-3">Important Links</h1>
                        <ul className="space-y-3">
                            {link.map(link =>   <li key={link.id} className="hover:text-primary hover:translate-x-1 transition-all duration-200">
                                <Link to={link.link}>
                                <span>&#11162;</span>
                                <span>{link.title}</span>
                                </Link>
                            </li>)}
                          
                           
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-bold mb-3">Important Links</h1>
                        <ul className="space-y-3">
                            {link.map(link =>   <li key={link.id} className="hover:text-primary hover:translate-x-1 transition-all duration-200">
                                <Link to={link.link}>
                                <span>&#11162;</span>
                                <span>{link.title}</span>
                                </Link>
                            </li>)}
                          
                           
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-bold mb-3">Important Links</h1>
                        <ul className="space-y-3">
                            {link.map(link =>   <li key={link.id} className="hover:text-primary hover:translate-x-1 transition-all duration-200">
                                <Link to={link.link}>
                                <span>&#11162;</span>
                                <span>{link.title}</span>
                                </Link>
                            </li>)}
                          
                           
                        </ul>
                    </div>
                   
                    </div>
                </div>
            </div>
            <div className="bg-primary py-5 text-white text-center border-t-2 border-gray-300/50"> @copyright 2024 All rights reserved || Made with ❤️ by TCJ</div>
        
        </div>
    )
}
export default Footer;