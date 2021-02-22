import React from "react";
import { CheckMark } from "./CheckMarkSvg";
import { useProjectSections } from "../hooks";

const SingleSection = ({ updateChosenSections, section }) => {
  const { projectSections } = useProjectSections();

  const Component = section.c;
  const iAmChosen =
    projectSections.filter((i) => i.label === section.label).length > 0;
  return (
    <div className="relative">
      {/* <MakeVariantButton section={section}/> */}
      <p className='text-sb-lightgray text-xs'>{section.label}</p>
      <div
        role="button"
        onClick={() => updateChosenSections(section)}
        className={`relative cursor-pointer`}
      >
        <div
          className={`relative zoom-2 ${
            iAmChosen ? "border-sb-teal" : "border-gray-400"
          } border-4 `}
        >
          {/* Colored Overlay */}
          {iAmChosen && (
            <div className="absolute inset-0 z-40 ">
              <CheckMark />
              <div
                style={{ opacity: "0.1" }}
                className="w-full h-full bg-sb-teal "
              />
            </div>
          )}

          {/* Section */}
          <Component />
        </div>
      </div>
    </div>
  );
};

export default SingleSection