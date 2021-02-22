import React from "react";
import EditLayer2 from "./EditLayer2";
import LoadEditableData from "./LoadEditableData";
import { useLayouts, useVariants } from "../hooks";
import { useRouter } from 'next/router'

const EditInputsDrawer = ({
  showInputDrawer,
  selectedInstance,
  setSelectedInstance,
 
}) => {
  const router = useRouter()

  const {layout} = useLayouts();
  const { shouldMakeVariants, flattenedVariants } = useVariants();
  const { makeVariant } = shouldMakeVariants(router);

  // Should the edit inputs work on section layouts or on variants?
  const sections = makeVariant ? flattenedVariants : layout;

  return (
    <div
      className={` animation transform duration-500 ease bg-white h-full overflow-y-auto ${
        showInputDrawer ? "px-4 " : ""
      }`}
      style={{ width: showInputDrawer ? "250px" : "0px" }}
    >
      <div
        className={`animation duration-300 delay-300 ease pb-24	 ${
          showInputDrawer ? "opacity-100 " : " opacity-0"
        }`}
      >
        {sections &&
          sections.map((instance, index) => {
            if (selectedInstance && selectedInstance.id === instance.id) {
              return (
                <EditLayer2
                  key={index + instance.id + index}
                  layout={sections}
                  shouldMakeVariants={makeVariant}
                  setSelectedInstance={setSelectedInstance}
                  instance={instance}
                />
              );
            } else return null;
          })}
      </div>

      {/* Hidden sections map which load up our defaults or editable data */}
      <LoadEditableData sections={sections} />
    </div>
  );
};
export default EditInputsDrawer;
