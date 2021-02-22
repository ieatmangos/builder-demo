import React, { useState, useEffect } from "react";
import EditButton from "./EditButton";
import VariantControls from './variant_controls/VariantControls'
import VariantButtonLabel from './VariantButtonLabel'
import { codesandboxUrl } from "../pages/edit/[[...slug]]";

export default function VariantButton({
  label,
  variants,
  selectedInstance,
  setSelectedInstance,
  iframeSrc,
  setIframeSrc,
  setChooseSectionsStatus,
  chooseSectionsStatus

}) {
  // Rename and delete variants
  const [renameStatus, setRenameStatus] = useState(false);

  const handleClick = () => {
    // Expand its dropdown
    expand((c) => !c);

    // Turn off Manage Library 
    setChooseSectionsStatus(false);

    // Closes its edit input drawer if its the current selected instance
    if (expanded && selectedInstance && (selectedInstance.label === label)) {
      setSelectedInstance(null);
    }
 
    const newIframe = `${codesandboxUrl}iframe/variants/${label}`
    const oldIframe = iframeSrc.split('#')[0]
    oldIframe !== newIframe && !expanded && setIframeSrc(newIframe);

  };

  // Expand ? show its variants underneath
  const [expanded, expand] = useState(false);

// Auto close if Managing Library
  useEffect(()=>{
    if(chooseSectionsStatus){
      expand(false)
    }
  },[chooseSectionsStatus, expand])


  return (
    <div className='w-full flex flex-col'>
      {/* Label Buttons */}
      <div
        role="button"
        onClick={handleClick}
        className={`px-4 py-2 text-left flex justify-between gap-2 items-center font-bold uppercase hover:bg-sb-lightgray
        ${expanded ? "bg-sb-lightgray" : "bg-sb-gray"}
        `}
        style={{ fontSize: "13px", lineHeight: "160.4%" }}
      >
        <VariantButtonLabel label={label}/>
        <Carrot expanded={expanded} />
      </div>

      {/* Edit Buttons */}
      {/* Section buttons which open up their edit input drawer */}
      {(expanded && !renameStatus) &&
        variants.map((instance) => {
          return (
            <EditButton
              makeVariant
              setIframeSrc={setIframeSrc}
              selectedInstance={selectedInstance}
              setSelectedInstance={setSelectedInstance}
              setChooseSectionsStatus={setChooseSectionsStatus}
              key={instance.id}
              instance={instance}
            />
          );
        })}

        {/* Variant Controls */}
        {/* Lets you rename and delete variants */}
        {expanded && <VariantControls
            variants={variants}
            setSelectedInstance={setSelectedInstance}
            renameStatus={renameStatus}
            setRenameStatus={setRenameStatus}
            sectionLabel={label}
          />}

    </div>
  );
}


const Carrot = ({ expanded }) => {
  return (
    <div>
    <svg
      className={`transform ${expanded ? "rotate-90" : "rotate-180"}`}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.13916 1.70714L1.00008 5.84623L0.292969 5.13912L5.13912 0.292969L5.84619 1.00004L5.84623 1L10.0001 5.15385L9.29297 5.86095L5.13916 1.70714Z"
        fill="white"
      />
    </svg>
    </div>
  );
};
