import React from 'react'
const Button = ({setStatus, extraFn, text}) => {
  return (
    <div
    role='button'
    className="py-4 px-6 bg-white text-sb-gray hover:bg-sb-tealLight hover:text-sb-teal text-left z-50"
    onClick={(e) => {
      setStatus()
      extraFn && extraFn(e)
    }}
  >
    {text}
  </div>
  )
}
export default Button