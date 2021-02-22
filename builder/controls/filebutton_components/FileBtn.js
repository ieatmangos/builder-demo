import React from 'react'


const FileBtn = ({setShowOptions}) => {
  return(  <button
    style={{ letterSpacing: "1px" }}
    className="hover:opacity-75 animation-dropdown group text-xs font-bold cursor-pointer flex items-center text-sb-teal "
    onClick={() => setShowOptions(c=>!c)}
  >
    {`FILE`}
    <span className="group-hover:opacity-75 ml-2 mb-2 text-base font-bold">
      &#8964;
    </span>
  </button>)
}


export default FileBtn;