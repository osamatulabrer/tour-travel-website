import { MdLocationPin } from "react-icons/md";
import { getImage } from "../../helper/getImage";

const PlacesCard = ({item})=>{
    let imgLink = getImage('../../../public/imges/${item.image}')
    return(
        <div className=" bg-gray-50 shadow-md">
            <div className="overflow-hidden">
                <img  className="h-56 w-full object-cover hover:scale-125 hover:skew-x-2" src={imgLink} alt="asd" />
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