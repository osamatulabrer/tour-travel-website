

import PlacesCard from './PlaceCard'


const Places = ({placesData})=>{

   
    
    return(
        <div className='mx-8 mt-28 bg-gray-50'>
            <div className="">
                <h1 className="font-bold text-2xl sm:text-4xl px-3 border-l-8 border-primary my-8">Best Places to visit</h1>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {placesData?.map(item => (<PlacesCard key={item.id} item={item}/>))}
                    </div>
            </div>
        </div>
    )
}
export default Places;