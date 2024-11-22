import logo from '../../assets/imges/logo.png'
import { NavLink, Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

const Navber = ()=>{
    const dropDownLink = [
        {id:1,link:'Our Services'},
        {id:2,link:'Top Brands'},
        {id:3,link:'Location'}
    ]
    return(
        <nav className='shadow-lg'>
        <div className="sticky top-0 right-0 w-full " >
            <div className="bg-gradient-to-t from-primary to-secondary text-white">
                <div className="hidden sm:block py-[2px]">

                <div className="flex justify-between items-center ">
                    <p>20% off on next booking</p>
                    <p>Mobile No. +91 123456789</p>
                </div>
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center py-[2px]'>
            {/* logo section */}
            <div>
                <img src= {logo} alt="" className='h-16'/>
            </div>
            {/* navLink section */}
            <div className='hidden sm:block'>





                <ul className='flex gap-6 items-center'>
                    <li className='py-4 capitalize '><NavLink to="/" >Home</NavLink></li>
                    <li className='py-4 capitalize'><NavLink to="/Blog" >Blogs</NavLink></li>
                    <li className='py-4 capitalize'><NavLink to="/PlaceRoutes" >Best Places</NavLink></li>
                    <li className='py-4 capitalize'><NavLink to="/About" >About</NavLink></li>
                    <li className='py-4 relative group'>
                        <div className='flex'>
                            <a href='/#home' className='capitalize'>Quick links</a>
                            <span><MdArrowDropDown className='transition-all duration-200 group-hover:rotate-180 text-2xl'/></span>
                        </div>
                        
                            <ul className='bg-white rounded-md p-3 shadow-md space-y-3 w-40 hidden group-hover:block absolute -left-9 top-[50px] z-[9999] '>
                               
                            {dropDownLink.map(link =>( <li key={link.id}><a className='inline-block w-full hover:bg-primary/20 py-1 px-2 rounded' href="">{link.link}</a></li>))}
                            </ul>
                       

                    </li>
                </ul>
                    
            </div>
        <div className='gap-6  flex items-center'>
            <button  className='text-white bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600  px-3 py-1 rounded-full'>book now</button>
        <HiMenuAlt3 className='sm:hidden text-2xl'/>
        </div>
        </div>
        </nav>
    )
}
export default Navber;