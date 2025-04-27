import React from 'react'
import { HiChevronRight } from "react-icons/hi2";


function NextArrow({onClick}: any) {
  return (
    <div className="container">
      <div className="absolute -right-2  md:-right-4 lg:-right-10  top-[40%] " onClick={onClick}>
        <div className="bg-gray-500/70 text-white hover:bg-gray-300  shadow-2xl h-[37px]  lg:h-[50px] w-[37px] lg:w-[50px] rounded-full grid place-items-center cursor-pointer">
            <HiChevronRight />

        </div>

    </div>
    </div>
  )
}

export default NextArrow