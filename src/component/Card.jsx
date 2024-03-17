// import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { product } from "./data";
const Card = () => {

    const {heading ,img, price} = product

  return (
 <div className=" py-14">
      <div className="container">
 <h2 className=" text-center text-[#000] font-bold text-3xl">DAILY DEALS!</h2>
    <div className=" grid  grid-cols-4 gap-6 py-10">
   
       {product.map((e, i) => (
          <>
           <div key={i} className=" text-center">
            <div className="border">
            <img className="w-[100%]  h-auto" src={e.img} alt="img" />
            </div>
            <h2 className=" pt-3 capitalize font-medium text-lg text-[#000]">{e.heading}</h2>
            <span className="text-lg font-medium ">{e.price}</span>
            </div>
          </>
        ))}
       </div>
      </div>
 </div>
   
  );
};

export default Card;
