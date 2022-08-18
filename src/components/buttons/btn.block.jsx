import React from "react";

export default function BtnBlock({ children, ...restProps }) {
  return (
    <button
      {...restProps}
      className="hover:border-2 hover:border-primary-light hover:border-solid text-center bg-primary-light rounded-[10px] md:w-[300px] xl:w-354 h-14 text-primary-white"
    >
      {children}
    </button>
  );
}
