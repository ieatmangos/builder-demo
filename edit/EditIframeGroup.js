import React,{useState} from 'react'
import Controls from "../builder/controls";
import ProgressSpinner from "./upload_image/utils/ProgressSpinner";
const widthOptions = [
  ["desktop", ["100%", "100%"]],
  ["tablet", ["768px", "1024px"]],
  ["mobile", ["375px", "640px"]]
];

export default function EditIframeGroup({
  shouldMakeVariants,
  setTrigger,
  iframDelay,
  iframeSrc
}) {
  const [frameWidth, setFrame] = useState(["100%", "100%"]);
  const [rotate, setRotate] = useState(false);
  const frameSizeData = {
    frameWidth,
    setFrame,
    setRotate,
    rotate,
    widthOptions
  };

  return (
    <div
      style={{ backgroundColor: "#D6D6D6" }}
      className="flex-1 min-h-screen w-full flex flex-col justify-center items-center p-4"
    >
      {/* Top Control Bar */}
      <div className="w-full z-50">
        <Controls
          hideSelecter={shouldMakeVariants}
          setTrigger={setTrigger}
          frameSizeData={frameSizeData}
          dynamicWidth={rotate ? frameWidth[1] : frameWidth[0]}
        />
      </div>

      {/* Placeholder div while Iframe Loads */}
      {/* {!show && <div style={{minHeight: '75vh'}} className='shadow-xl border border-sb-gray border-t-0 rounded-b-md iframDelay duration-500 ease bg-pink-500 w-full flex justify-center items-center'><span>...</span></div>} */}
      {iframDelay && (
        <div
          style={{ width: rotate ? frameWidth[1] : frameWidth[0] }}
          className="w-full h-full flex justify-center items-center border border-t-0 rounded-b-md border-sb-gray  bg-white iframDelay duration-700 ease"
        >
          <ProgressSpinner />
        </div>
      )}

      {/* Iframe, renderes the page, 'IframeView.js*/}
      <iframe
        id="iframe-id"
        className={`shadow-xl border border-sb-gray border-t-0 rounded-b-md animation duration-700 ease ${iframDelay}`}
        width={rotate ? frameWidth[1] : frameWidth[0]}
        height={rotate ? frameWidth[0] : frameWidth[1]}
        title="iframe"
        src={iframeSrc}
      />
    </div>
  );
}
