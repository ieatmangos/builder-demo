import React, { useState } from "react";
import { useLayouts } from "../../hooks";

const Selecter = ({
  selected,
  setSelected,
  className,
  setTrigger
}) => {
  const [open, setOpen] = useState(false);
  const {allLayouts} = useLayouts()
  
  if (allLayouts.length === 0) {
    return null;
  }

  const changeHandler = (e) => {
   
      localStorage.setItem("savename", JSON.stringify(e));

    setTrigger && setTrigger((c) => !c);
    setSelected(e);
    setOpen(false);
  };

  return (
    <div style={{zIndex: '500'}} className={`relative w-full h-full text-sb-black z-50 ${className}`}>
      <div
        role="button"
        onClick={() => setOpen((c) => !c)}
        className={`h-full flex items-center m-0 w-full h-full rounded-sm border border-gray-400 px-2 bg-white ${className}`}
      >
        <span className="text-center flex-1">{selected}</span>
        <svg
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.44629 7L10.4463 0L0.446289 -4.27682e-07L5.44629 7Z"
            fill="#00818A"
          />
        </svg>
      </div>

      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
        
          className="absolute top-0 left-0 mt-8 w-full  shadow-lg bg-white flex flex-col z-50 "
        >
          <button
            onClick={() => changeHandler("select to load")}
            className="text-left  text-sb-lightgray py-2 px-6"
          >
            select to load
          </button>
          {allLayouts.map((el, index) => {
            return (
              <button
                onClick={() => changeHandler(el[0])}
                className="bg-white text-sb-gray hover:bg-sb-tealLight hover:text-sb-teal text-left py-4 px-6 z-50"
                key={index * 200}
              >
                {el[0]}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Selecter;

// {/* <AddSvg /> */}
// {/* <select
//   className=" pl-4 w-full text-center"
//   onChange={(e) => changeHandler(e.target.value)}
//   value={selected}
// >
//   <option>select to load</option>
//   {firebaseData.map((el, index) => {
//     return <option className='' key={index * 200}>{el[0]}</option>;
//   })}
// </select> */}
