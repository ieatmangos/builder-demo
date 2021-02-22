import React from 'react'
import { Global } from "../../global";
import { useLayouts } from '../../hooks';

const Clear = () => {
  const { setItems } = React.useContext(Global);
  const { updateLayout } = useLayouts();
 
  return(
    <button
    style={{ letterSpacing: '1px'}}
    className="
      text-gray-600
      bg-transparent cursor-pointer
      hover:text-red-500 hover:opacity-75
      mr-2 md:mr-4
      font-bold text-xs
      "
    onClick={() => {
      setItems([])
      updateLayout([])
    }}
  >
    CLEAR
  </button>
  )
}

export default Clear