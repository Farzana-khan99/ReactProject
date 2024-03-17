import React from "react";
// import img from "../../public/image/"
const HeroSection = () => {
  return (
    <div className="bg-[#f0e0ff]">
      <div className="container">
        <div className=" grid  grid-cols-2 gap-4  items-center">
          <div>
            <h3  className=" text-2xl pb-1">Smart Products</h3>
            <h1 className=" uppercase  text-5xl">
              Summer Offer <span className=" block pt-1">2024 Collection</span>
            </h1>
          </div>
          <div className=" pt-10">
            <img className=" w-full block  h-[70vh] object-contain" src="../../public/image/single-slide-1.webp" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
