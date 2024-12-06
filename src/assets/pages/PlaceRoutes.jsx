import { useEffect, useState } from 'react';
import { MdLocationPin } from "react-icons/md";

const PlaceRoutes = ()=>{
    const [placesData,setPlacesData] = useState([])
    useEffect(()=>{
        try{
         async function getData() {
             const conn = await fetch('http://localhost:4000/PlacesData')
             const data = await conn.json()
             setPlacesData(data)
             
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
                <h1 className="font-bold text-2xl sm:text-4xl px-3 border-l-8 border-primary my-8">Best Places to visit</h1>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {placesData?.map(item => (
                             <div className=" bg-gray-50 shadow-md">
                             <div>
                                 <img className="h-56 w-full object-cover" src={item.img} alt="asd" />
                             </div>
                             <div className="p-3 space-y-3">
                                 <h2>{item.title}</h2>
                                 <div className="flex gap-2 text-slate-700 items-center">
                                     <MdLocationPin />
                                     <span>{item.location}</span>
                                 </div>
                                 <p>{item.description}</p>
                                 <div className="flex items-center justify-between py-2 border-t border-gray-200">
                                     <div>{item.type}</div>
                                     <div>${item.price}</div>
                                 </div>
                             </div>
                         </div>
                        ))}
                    </div>
            </div>
        </div>
            {/* <Places/> */}
        </>
    )
}
export default PlaceRoutes;