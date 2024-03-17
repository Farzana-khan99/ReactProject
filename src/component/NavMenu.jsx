import React, { useState } from "react";

const NavMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const link = [
    {
      name: "menu 1",
    },
    {
      name: "menu 2",
    },
    {
      name: "menu 3",
    },
    {
      name: "menu 4",
    },
  ];
  return (
    <>
    
        {isOpen && (
              <div onClick={() => setOpen(!isOpen)} className="cursor-pointer z-10  group">
          <div className=" absolute top-14 hover:block  group-hover:block bg-white  text-[#555252]  py-4 px-4">
            <div className=" w-5 h-5  bg-white  -top-2 rotate-45   absolute"></div>
            {link.map((e) => (
              <h2>{e.name}</h2>
            ))}
          </div>
          </div>
        )}
     
    </>
  );
};

export default NavMenu;
