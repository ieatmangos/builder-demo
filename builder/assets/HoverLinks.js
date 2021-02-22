import React, { useState } from "react";
import  Link  from "next/link";
import { useLayouts } from "../../hooks";
import { EyeSvg, DeleteSvg } from "./svg";
import DuplicateSection from "./DuplicateSection";

export const HoverLinks = ({ label, id, children }) => {
  const { layout, updateLayout } = useLayouts();

  const deleteMe = () => {
    const filteredList = layout.filter((el) => el.id !== id);
    updateLayout(filteredList);
  };

  return (
    <div className="opacity-0 hover:opacity-100 flex flex-col items-start absolute z-40 bg-white rounded-sm overflow-hidden  text-black shadow-xl cursor-pointer">
      <p className="pb-2 pt-4 px-4 w-full h-full bg-sb-black text-white text-2xl rounded-sm text-center">
        {label}
      </p>
      <div className=" flex justify-center w-full pt-2">
        <Link
          href={`sections/${label}`}
          className={` p-2 cursor-pointer transform animation duration-100 hover:-translate-y-1 hover:opacity-75 `}
        >
          <span>
          <EyeSvg />
          </span>
        </Link>

        <button
          className={`p-2 cursor-pointer transform animation duration-100 hover:-translate-y-1 hover:opacity-75 `}
          onClick={deleteMe}
        >
          <DeleteSvg />
        </button>
        <DuplicateSection id={id} />
      </div>
      {children}
    </div>
  );
};
