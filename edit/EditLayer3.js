import React from "react";
// import RteOld from "./rte";
import Rte from "./rte/rtehook";
import { useBouncer } from "./utils/useBouncer";
import UploadImage from "./upload_image";
import AutoGrowArea from "./utils/AutoGrowArea.js";
import ToggleShow from "./utils/ToggleShow.js";
import { v4 as uuid } from "uuid";
import { useVariants, useLayouts } from "../hooks";

const EditLayer3 = ({
  i,
  inputVals,
  setInputVals,
  sectionLabel,
  id,
  layout,
  shouldMakeVariants
}) => {
  const key = i[0];
  const key2 = `editLayer3-${key}-${uuid()}`;
  const label = i[1].label;
  const value = inputVals[sectionLabel].data[key]
    ? inputVals[sectionLabel].data[key].value
    : "";

  // Determine which input to render
  // Rich Text Editor, Image, Toggle
  const isRte = i[1].rte ? true : false;
  const isImage = i[1].image ? true : false;
  const isToggleShow = i[1].toggle ? true : false;
  
  const {updateVariant} = useVariants()
  const {updateLayout} = useLayouts()

  const saveToFirebase = () => {
    if (!layout) {
      return;
    }
   
    const sectionsWithData = layout.map((comp, index) => {
      if (comp.id === id) {
        comp.data = inputVals;
      }
      return comp;
    });
      if(shouldMakeVariants){
        const variantWithData = sectionsWithData.filter(i=>i.id===id)[0]
        variantWithData && updateVariant(variantWithData)
      } else {
        updateLayout(sectionsWithData)
      }
  };

  const save = useBouncer(saveToFirebase, 150);

  const setValues = (args) => {
    setInputVals({
      ...inputVals,
      [sectionLabel]: {
        ...inputVals[sectionLabel],
        data: {
          ...inputVals[sectionLabel].data,
          [key]: {
            ...inputVals[sectionLabel].data[key],
            value: args
          }
        }
      }
    });
    save();
  };

  // Update from Rich Text Editor
  // const richUpdateInputVals = (arg) => {
  //   if (!arg) {
  //     return;
  //   }
  //   setValues(arg.toString("html"));
  // };

  // Auto highlight focus
  const setFocus = (val) => {
    setInputVals({ ...inputVals, focus_element: { data: { inner: val } } });
    save();
  };


  return ( 
    <div
      key={key}
      className={`focusColor py-2 border-gray-300 bg-white my-1  `}
    >
      {/* Input Label */}
      <div
        style={{ lineHeight: "160%" }}
        className="capitalize flex items-center w-full text-xs animation-dropdown"
      >
        {label}
      </div>

      {/* 
          1) ToggleShow
          2) Image Uploader or
          3) Rich Text Editor or
          4) AutoGrow Text Area 
      */}

      {isToggleShow ? (
        <ToggleShow value={value} onChange={setValues} />
      ) : (
        <>
          {isImage ? (
            <UploadImage value={value} onChange={setValues} />
          ) : (
            <>
              {isRte ? (
                <>
                {/* <RteOld
                  setFocus={setFocus}
                  value={value}
                  onChange={setValues}
                /> */}
                <Rte
                  setFocus={setFocus}
                  value={value}
                  onChange={setValues}
                />
                {/* {console.log(value)} */}
                </>
              ) : (
                <div
                  className={`animation-dropdown-child text-sb-textColor text-sm  `}
                >
                  {/* TextArea */}
                  <AutoGrowArea
                    onBlur={() => setFocus("")}
                    onFocus={() => setFocus(value)}
                    className=" text-sb-textColor  border  "
                    spellCheck="false"
                    type="text"
                    id={key2}
                    value={value}
                    onChange={(e) => {
                      setValues(e.target.value);
                    }}
                  />
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default EditLayer3;



