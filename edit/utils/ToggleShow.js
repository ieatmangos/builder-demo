import React from 'react'
const ToggleShow = ({value, onChange}) => {
  // console.log(value)
    return <button className='w-6 h-6 rounded-sm flex items-center justify-center border border-sb-gray' onClick={()=>onChange(!value)}>
     {value && <span className='w-5 h-5 bg-sb-teal rounded-sm'></span>}
    </button>;
  };

  
  export default ToggleShow