import { NavLink, } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const ResponsiveMenu = ()=>{
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
        <div className="fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black">
            <div className="flex gap-2 items-center">
            <FaUserCircle className="text-6xl text-slate-500"/>
            <div>
                <h1 className="text-slate-500">Hello User</h1>
                <h1 className="text-sm text-slate-500">Premium user</h1>
            </div>
            </div>
            <ul className="space-y-4">
                {link.map(item => {
                    return <li  key={item.id} className='capitalize  text-xl'><NavLink to={item.link} >{item.title}</NavLink></li>
                })}
                
               
            </ul>
        </div>
    )
}
export default ResponsiveMenu;