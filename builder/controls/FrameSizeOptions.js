import React from "react";
import {
  MobileSvg,
  TabletSvg,
  DesktopSvg,
  Rotate1,
  Rotate2
} from "../assets";

const FrameSizeOptions = ({
  frameSizeData,
}) => {
  const {  frameWidth,
    setFrame,
    setRotate,
    rotate,
    widthOptions} = frameSizeData
  return (
    <div className='w-full h-full flex items-center '>
    <div className="flex-1 flex justify-start items-center">
      {/* Rotate button*/}
        <button
          onClick={() => setRotate(!rotate)}
          className={`p-2 flex justify-center transform scale-75
          ${frameWidth[0] !== '100%' ? " opacity-100" : " opacity-50 "}
          `}
        >
          {rotate ? <Rotate2 /> : <Rotate1 />}
        </button>
      
      {/* Window size buttons */}
      {widthOptions.map((option) => {

        const image = (isSelected) => {
          if (option[0] === 'mobile'){
          return <MobileSvg fill={isSelected? 'white':'#110E17'}/>
          } else if (option[0] === 'tablet'){
            return <TabletSvg fill={isSelected? 'white':'#110E17'}/>
          } else return <DesktopSvg fill={isSelected? 'white':'#110E17'}/>
        }

        const isSelected = option[1][0] === frameWidth[0]

        return (
          <button
            className={`p-2 flex flex-col items-center hover:opacity-75  ${
              isSelected ? " opacity-100 bg-sb-teal rounded-md" : ""
            }`}
            key={option[0]}
            onClick={() => {
              setFrame(option[1]);
            }}
          >
            {image(isSelected)}
          </button>
        );
      })}
    </div>
    </div>
  );
};

export default FrameSizeOptions