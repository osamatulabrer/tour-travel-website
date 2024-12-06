import BannerImg from '../../../public/imges/travelbox.png'
import { MdFlight } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { MdOutlineHotel } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
const Banner = ()=>{
    return(
        <div className="mt-10 bg-gray-200 rounded-sm shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className='mx-auto ' data-aos="flip-up">
                    <img src={BannerImg} alt="asd" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-3xl sm:text-4xl font-bold'  data-aos="fade-up">
                    Explore all corners of the world with us</h2>
                    <p  data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis doloremque in mollitia dicta deleniti molestiae itaque nostrum</p>
                    <div className='grid grid-cols-2  gap-6' data-aos="zoom-in">
                        <div className='space-y-6'>

                            <div className='flex items-center gap-4'>
                                <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                                <span>flight</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FaWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-violet-400"/>
                                <span>wifi</span>
                            </div>
                        </div>
                        <div className='space-y-6'>

                            <div className='flex items-center gap-4'>
                                <MdOutlineHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-violet-400"/>
                                <span>hotel</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yello-100 dark:bg-violet-400"/>
                                <span>foods</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;


