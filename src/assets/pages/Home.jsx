
import BannerPic from '../../components/Banner/BannerPic';
import Hero from '../../components/Hero/Hero';
import Places from '../../components/Places/Places';
import bannerVid from '../../../public/video/main.mp4'
import bannerImg from '../../../public/imges/cover-women.jpg'
import BlogComp from '../../components/Blogs/BlogsComp';
import Banner from '../../components/Banner/Banner';
import bannerImg2 from '../../../public/imges/travel-cover2.jpg'
import Tastimonial from '../../components/Testimonial/Testimonial';
import { useEffect, useState } from 'react';
import BlogsDetails from './BlogsDetails';
import axios from 'axios';
import OrderPopup from '../../components/OrderPopup/OrderPopup';
import ResponsiveMenu from '../../components/Navber/ResponsiveMenu';






const Home = ()=>{
const [placesData,setPlacesData] = useState([])
const [blogsData,setBlogsData] = useState([])
const [testimonialData,setTestimonialData] = useState([])

useEffect(()=>{
   try{
    async function getData() {
        const conn = await axios.get('http://localhost:4000/BlogsData')
        const data = await conn.data
        setBlogsData(data)
        
    }
    getData()
   }catch(error){
    console.log(error);
    
   }
},[])
useEffect(()=>{
   try{
    async function getData() {
        const conn = await axios.get('http://localhost:4000/testimonialData')
        const data = await conn.data
        setTestimonialData(data)
        
    }
    getData()
   }catch(error){
    console.log(error);
    
   }
},[])
useEffect(()=>{
   try{
    async function getData() {
        const conn = await axios.get('http://localhost:4000/PlacesData')
        const data = await conn.data
        setPlacesData(data)
        
    }
    getData()
   }catch(error){
    console.log(error);
    
   }
},[])
    
    return(
        <div>
            <div>
                <div className='relative w-full h-[700px]'>
                    <video autoPlay loop muted className="w-full h-[700px] absolute right-0 top-1 z-[-1] object-cover">
                        <source src={bannerVid}/>
                    </video>
                    <Hero/>
                </div>
              
                    <Places placesData={placesData}/>
                    <BannerPic bannerImg={bannerImg}/>
                    <BlogComp blogsData={blogsData}/>
                    <Banner/>
                    <BannerPic bannerImg={bannerImg2}/>
                    <Tastimonial testimonialData={testimonialData}/>
                    
            </div>
        </div>
    )
}
export default Home;