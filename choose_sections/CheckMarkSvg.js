import React from 'react'
export const CheckMark = ({classname})=>{
  return(
  <svg
    className={`absolute top-0 left-0 m-4 ${classname}`}
    width="45"
    height="45"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="22.5" cy="22.5" r="22" fill="#DBF6F8" stroke="#98CCD0" />
    <path
      d="M31.285 15L20 26.567L14.714 21.556L11 25.272L20 34L35 18.715L31.285 15Z"
      fill="#00818A"
    />
  </svg>
);}
