

import BlogCard from './BlogCard';



const BlogComp = ({blogsData})=>{
  
    return(
        <div className='mx-8 mt-28 bg-gray-50' >
            <div className="" data-aos="fade-up">
                <h1 className="font-bold text-2xl sm:text-4xl px-3 border-l-8 border-primary my-8">Our latest Blogs</h1>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {blogsData.map(item => (<BlogCard key={item.id} item={item}/>))}
                    </div>
            </div>
        </div>
    )
}
export default BlogComp;