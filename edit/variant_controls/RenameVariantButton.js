import React from "react";

export default function RenameVariantButton({ renameStatus, setRenameStatus, setSelectedInstance, setShowInput }) {
  return (
    <button
      onClick={() => {
        setRenameStatus((c) => !c)
        setSelectedInstance(null)
        setShowInput(false)
      }}
      className={`text-white flex justify-center items-center w-6 h-6 border rounded-full transition duration-300 hover:bg-white hover:text-sb-gray
      ${renameStatus ? 'bg-white text-sb-gray border-sb-gray':'text-white border-white bg-transparent'}
      `}
    >
      <svg
        className="fill-current transform scale-50"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M18.311 2.828l2.862 2.861-15.033 15.032-3.583.722.723-3.584 15.031-15.031zm0-2.828l-16.873 16.872-1.438 7.127 7.127-1.437 16.874-16.873-5.69-5.689z" />
      </svg>
    </button>
  );
}
