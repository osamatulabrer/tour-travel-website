import { useEffect, useState } from 'react';
import BlogComp from '../../components/Blogs/BlogsComp';


const Blog = ()=>{
     const [blogsData,setBlogsData] = useState([])
     useEffect(()=>{
         try{
         async function getData() {
             const conn = await fetch('http://localhost:4000/BlogsData')
             const data = await conn.json()
            setBlogsData(data)
             
        }
          getData()
        }catch(error){
          console.log(error);
         
         }
    },[])
     return(
        <>
         <div className='mx-8 mt-28 bg-gray-50'>
            <div className="">
                <h1 className="font-bold text-2xl sm:text-4xl px-3 border-l-8 border-primary my-8">Our latest Blogs</h1>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {blogsData.map(item => (
                            <div className=" bg-gray-50 shadow-md">
                            <div>
                                <img className="h-56 w-full object-cover" src={item.image} alt="asd" />
                            </div>
                            <div className="p-3 space-y-3">
                            <div className="flex items-center justify-between py-2 ">
                                    <div>{item.author}</div>
                                    <div>${item.date}</div>
                                </div>
                                <h2>{item.title}</h2>
                              
                                <p className="line-clamp-2">{item.description}</p>
                               
                            </div>
                        </div>
                        ))}
                    </div>
            </div>
        </div>
        {/* <BlogComp/> */}
        </>
     )
}
export default Blog;