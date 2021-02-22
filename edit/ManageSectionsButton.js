import React from "react";
export default function ManageSectionsButton({
  chooseSectionsStatus,
  setChooseSectionsStatus,
  setSelectedInstance

}) {
  return (
    <div
      role='button'
      className={`px-4 py-2 w-full text-left font-bold uppercase whitespace-nowrap hover:bg-white hover:text-sb-gray ${
        chooseSectionsStatus ? "bg-white text-sb-gray" : "bg-sb-gray text-white"
      }`}
      style={{ fontSize: "13px", lineHeight: "160.4%" }}
      onClick={()=>{
        setChooseSectionsStatus(c=>!c)
        setSelectedInstance(null)
      }}
    >
      Manage Library
    </div>
  );
}
