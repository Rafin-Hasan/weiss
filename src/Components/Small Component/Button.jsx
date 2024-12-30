import React from "react";
import { MdNavigateNext } from "react-icons/md";

const Button = ({ ButtonTitle }) => {
  return (
    <>
      <button className="gap-2 px-4 h-[40px] bg-[#FF9900] text-[16px] font-bold text-white flex justify-center items-center ">
        {ButtonTitle} <MdNavigateNext className="text-[24px] " />
      </button>
    </>
  );
};

export default Button;
