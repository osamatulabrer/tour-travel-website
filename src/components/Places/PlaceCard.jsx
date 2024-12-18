import { MdLocationPin } from "react-icons/md";
import { getImage } from "../../helper/getImage";

const PlacesCard = ({item})=>{
    return(
        <div className=" bg-gray-50 shadow-md">
            <div className="overflow-hidden">
                <img  className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110" src={item.img} alt={item.name} />
            </div>
            <div className="p-3 space-y-3">
                <h2>{item.title}</h2>
                <div className="flex gap-2 text-slate-700 items-center">
                    <MdLocationPin />
                    <span>{item.location}</span>
                </div>
                <p className="line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between py-2 border-t border-gray-200">
                    <div>{item.type}</div>
                    <div>${item.price}</div>
                </div>
            </div>
        </div>
    )
}
export default PlacesCard;