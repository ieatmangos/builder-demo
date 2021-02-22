import React from "react";

export default function CreateNewVariantButton({ toggleInput, setRenameStatus }) {
  return (
    <button
      onClick={()=>{
        toggleInput()
        setRenameStatus(false)
      }}
      className="text-white flex justify-center items-center w-6 h-6 border border-white rounded-full hover:bg-white hover:text-sb-gray transition duration-300"
    >
      &#43;
    </button>
  );
}
