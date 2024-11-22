
import BannerPic from '../../components/Banner/BannerPic';
import Hero from '../../components/Hero/Hero';
import Places from '../../components/Places/Places';
import bannerVid from '../video/main.mp4'
import bannerImg from '../imges/cover-women.jpg'
import BlogComp from '../../components/Blogs/BlogsComp';
import Banner from '../../components/Banner/Banner';
import bannerImg2 from '../../assets/imges/travel-cover2.jpg'
import Tastimonial from '../../components/Testimonial/Testimonial';





const Home = ()=>{

    
    return(
        <div>
            <div>
                <div className='relative w-full h-[700px]'>
                    <video autoPlay loop muted className="w-full h-[700px] absolute right-0 top-1 z-[-1] object-cover">
                        <source src={bannerVid}/>
                    </video>
                    <Hero/>
                </div>
                    <Places/>
                    <BannerPic bannerImg={bannerImg}/>
                    <BlogComp/>
                    <Banner/>
                    <BannerPic bannerImg={bannerImg2}/>
                    <Tastimonial/>
            </div>
        </div>
    )
}
export default Home;