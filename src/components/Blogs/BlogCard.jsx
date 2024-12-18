import { Link } from "react-router-dom";



const BlogCard = ({item})=>{
    return(
        <Link to={`/Blogs/${item.title}`}>

        <div className=" bg-gray-50 shadow-md">
        <div className="overflow-hidden">
            <img className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110" src={item.img} alt={item.name} />
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
        </Link>
    )
}
export default BlogCard;