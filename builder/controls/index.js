import React from "react";
import { Exporter } from "./Exporter";
import { Global } from "../../global";
import Selecter from "./Selecter";
import FileButton from "./FileButton";
import Clear from "./Clear";
import FrameSizeOptions from "./FrameSizeOptions";
import Link from "next/link";
import { EyeSvg } from "../assets";

const Controls = ({
  hideSelecter,
  dynamicWidth,
  frameSizeData,
  setTrigger,
  soloStyle,
  forceCreateNew,
}) => {
  const { items } = React.useContext(Global);
  let localStore;
  if (typeof window !== "undefined") {
    localStore = JSON.parse(localStorage.getItem("savename"));
  }
  const fromEditorView = dynamicWidth ? true : false;
  const viewMobileFrame = frameSizeData
    ? frameSizeData.frameWidth[0] === "375px"
    : false;

  // Selected Layout is shared betweent the file button and selector
  const [selected, setSelected] = React.useState(()=>localStore);

  // Selecter
  const selecterElement = (
    <Selecter
      setSelected={setSelected}
      selected={selected}
      setTrigger={setTrigger}
    />
  );
  // File Button
  const fileButtonElement = (
    <FileButton
      setTrigger={setTrigger}
      forceCreateNew={forceCreateNew}
      items={items}
      selected={selected}
      setSelected={setSelected}
    />
  );

  const viewFullScreenElement = (
    <Link
      className="group animation-dropdown mr-2 rounded-sm border border-gray-400 text-gray-600 bg-white active:bg-gray-300 flex items-center justify-center"
      href={`/full/${localStore}`}
      target="_blank"
      rel="noopener"
    >
    
        <EyeSvg />
    
    </Link>
  );

  // just showing the selecter
  // used as default if you click on edit and no layout has been selected
  if (soloStyle) {
    return (
      <div
        style={{ backgroundColor: "#f0f2f4" }}
        className="max-w-md p-4 px-12 mx-auto border border-sb-gray shadow-md rounded-sm"
      >
        {selecterElement}
      </div>
    );
  }

  // From edit/variants
  if (fromEditorView && hideSelecter) {
    return (
      <div
        style={{
          width: dynamicWidth,
          zIndex: "1000",
          backgroundColor: "#f0f2f4",
        }}
        className="flex justify-center mx-auto rounded-t-md px-5 py-2 border border-sb-gray border-b-0 animation-dropdown-fast animation duration-700 ease"
      >
        <div
          className={`animation-dropdown-delay-1  opacity-0 z-10 ${
            viewMobileFrame ? "row-start-2" : ""
          }`}
        >
          <FrameSizeOptions frameSizeData={frameSizeData} />
        </div>
      </div>
    );
  }

  // From edit
  if (fromEditorView) {
    return (
      <div
        style={{ width: dynamicWidth, zIndex: "1000" }}
        className={`animation-dropdown-fast animation duration-700 ease mx-auto font-sbBody text-sm  
    `}
      >
        <div
          style={{ backgroundColor: "#f0f2f4" }}
          className={` 
          grid rounded-t-md px-5 py-2 border border-sb-gray border-b-0
          grid-cols-12
            ${viewMobileFrame ? " grid-cols-2 gap-2" : ""}
      `}
        >
          {/* Middle */}
          <div
            className={`
            flex h-full py-3 
            ${
              viewMobileFrame
                ? "col-span-12 col-start-1 row-start-1 py-3"
                : "col-span-5 col-start-4 "
            }
          `}
          >
            {viewFullScreenElement}
            {selecterElement}
          </div>
          <div
            className={`animation-dropdown-delay-1  opacity-0 z-10 ${
              viewMobileFrame ? "row-start-2" : ""
            }`}
          >
            <FrameSizeOptions frameSizeData={frameSizeData} />
          </div>

          {/* Clear and Export */}
          <div
            className={` animation-dropdown-delay-2 opacity-0 flex justify-end items-center col-start-12 z-10`}
          >
            <Exporter />
          </div>
        </div>
      </div>
    );
  }

  // default return from the builder / Layouts
  return (
    <div
      style={{ width: dynamicWidth, zIndex: "1000" }}
      className={`animation-dropdown-fast animation duration-500 ease mx-auto font-sbBody text-sm max-w-4xl px-4`}
    >
      <div
        style={{ backgroundColor: "#f0f2f4" }}
        className={` 
        grid rounded-t-md px-5 py-2 border border-sb-gray border-b-0 grid-cols-3 mt-6
          ${viewMobileFrame ? " grid-cols-2 gap-2" : ""}
        `}
      >
        {/* Left Side */}
        <div className="">{fileButtonElement}</div>

        {/* Middle Side */}
        <div
          className={`
          flex h-full
        z-50
            ${viewMobileFrame ? "col-span-2 row-start-1 py-3" : " "}
            `}
        >
          {viewFullScreenElement}
          {selecterElement}
        </div>

        {/* Right Side */}
        {/* Clear and Export */}
        <div
          className={`animation-dropdown-delay-2 flex justify-end items-center `}
        >
          <Clear />
          <Exporter />
        </div>
      </div>
    </div>
  );
};

export default Controls;
