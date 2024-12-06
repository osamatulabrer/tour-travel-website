import { useState } from "react";



const Hero = ()=>{
    const [priceValue,setPriceValue] = useState(40)
    return(
        <div className="absolute bg-black/20 h-full top-0 right-0 w-full flex items-center justify-center">
            <div className=" bg-primary/10">
            <div className="my-2">
                <p data-aos="fade-up" className="text-white">Our packages</p>
                <h1 data-aos="fade-up"
              data-aos-delay="300" className="text-white font-bold text-4xl">Search Your Destination</h1>
            </div>
            <div className=" py-5 bg-white px-5   gap-4 grid grid-cols-1 sm:grid-cols-3  rounded-md shadow-sm relative" data-aos="fade-up" data-aos-delay="400">
                <div className="space-y-2"  >

                    <label  className="opacity-70 block" htmlFor="">Searh your Destination</label>
                    <input type="text" placeholder="dubai " className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"/>
                </div>
                <div className="space-y-2">

                    <label className="opacity-70 block" htmlFor="">date</label>
                    <input type="date" className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"/>
                </div>
                <div className="space-y-2 ">

                    <label htmlFor="destination" className="opacity-70 block">
                    <div className="w-full flex justify-between items-center">
                        <p>Max Price</p>
                        <p className="font-bold text-xl">$ {priceValue}</p>
                    </div>
                    </label>
                    <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
                    <input
                        type="range"
                        name="destination"
                        id="destination"
                        className=" w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                        min="150"
                        max="1000"
                        value={priceValue}
                        onChange={(e)=>(setPriceValue(e.target.value))}
                    />
                    
                    </div>
                </div>
                <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
              Search Now
            </button>
                </div>
            </div>
            </div>
        // </div>
    )
}
export default Hero;