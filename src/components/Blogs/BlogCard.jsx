import { getImage } from "../../helper/getImage";


const BlogCard = ({item})=>{
    let imgLink = getImage(`../../../public/imges/${item.image}`)
    return(
        <div className=" bg-gray-50 shadow-md">
        <div>
            <img className="h-56 w-full object-cover" src={imgLink} alt="asd" />
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
    )
}
export default BlogCard;