import Image from "next/image";
import React from "react"
// import icons from "./ui/icons";
import Link from "next/link";

import { MdPersonOutline } from "react-icons/md";
 import { CiSearch } from "react-icons/ci";
 import { GoHeart } from "react-icons/go";
 import { AiOutlineShoppingCart } from "react-icons/ai";
// header 
export default function Navbar(){
    return(
        <div>
            <div className="w-[1440px] h-[4835px] bg-[#FFFFFF] flex">
      <div className="w-[1452px] h-[798.83px] gap-[-1428px]  bg-[#FFFFFF] flex">
        <div className="w-[1440px] h-[100px] bg-[#FFFFFF] flex ">
        <div className="w-[1286px] h-[41px] flex">
    
              <img 
          src={"/logo.jpeg"}
          alt=""
          className="w-185 h-41 mr-5 flex" 
        /> 
     
          <div className="w-[430px] h-[24px] gap-[75px] text-[#000000] text-[16px] font-medium mx-[505px] my-[38px] justify-between grid grid-cols-4">
          <Link className="w-[48px] h-[24px] "  href="/home">Home</Link>
            <Link className="w-[42px] h-[38px] " href="/shop">Shop</Link>
            <Link className="w-[49px] h-[24px] " href="/about">About</Link>
            <Link className="w-[66px] h-[24px] " href="/contact">Contact</Link>
          </div>
          
          <div className="icons">
         <MdPersonOutline />
         <CiSearch />
         <GoHeart />
         <AiOutlineShoppingCart />

</div>
        </div>
        
      </div>
      </div>
      </div>
      </div>
)

}