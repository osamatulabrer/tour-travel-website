
import { IoMdClose } from "react-icons/io";
import React from 'react'

const OrderPopup = ({onClose}) => {
  return (
    <div className='bg-black/40  w-full h-screen fixed top-0 left-0 z-10'>
        <div className='p-4 bg-white shadow-sm rounded mx-auto fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
        <div className="flex justify-between">
            <h4 className="capitalize ">book your trip</h4>
            <IoMdClose className="cuorsor-" onClick={()=> onClose()}/>
        </div>
        <div className="space-y-4 my-4">
            <input className="w-72 block py-2 px-3 rounded-full text-gray-600 border-gray-300 focus:outline-none capitalize border" placeholder="name" type="text" />
            <input className="w-72 block py-2 px-3 rounded-full text-gray-600 border-gray-300 focus:outline-none capitalize border" placeholder="email" type="text" />
            <input className="w-72 block py-2 px-3 rounded-full text-gray-600 border-gray-300 focus:outline-none capitalize border" placeholder="address" type="text" />
            
        </div>
        <div className="text-center">

        <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 ">
              book Now
            </button>
        </div>
        </div>
    </div>
  )
}

export default OrderPopup