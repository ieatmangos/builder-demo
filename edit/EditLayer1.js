import React from "react";
import EditButton from "./EditButton";
import VariantButton from "./VariantButton";
import ManageSectionsButton from "./ManageSectionsButton";
import EditInputsDrawer from "./EditInputsDrawer";
import SideBarTitle from "./SidebarTitle";
import { useLayouts, useVariants } from "../hooks";
import { useRouter } from "next/router";

const EditLayer1 = (props) => {
  const router = useRouter()

  // Manage Library toggle status, boolean
  const { chooseSectionsStatus, setChooseSectionsStatus } = props;

  // Saved layout
  const {layout} = useLayouts();

  // Variants
  const { shouldMakeVariants, projectVariants } = useVariants();
  const { showVariantButtons, sectionLabel } = shouldMakeVariants(router);
  // Change this value to reveal its edit input drawer
  const [selectedInstance, setSelectedInstance] = React.useState(null);
  const showInputDrawer = selectedInstance;

  return (
    <div className="flex h-full">
      <div className="h-full overflow-y-auto pb-24 ">
        {/* Label */}
        <SideBarTitle />

        {/* Make variants */}
        {showVariantButtons && (
          <div className='flex flex-col'>
            {/* Button which turns on Manage Library aka ChooseSectionsStatus */}
            <ManageSectionsButton
              chooseSectionsStatus={chooseSectionsStatus}
              setChooseSectionsStatus={setChooseSectionsStatus}
              setSelectedInstance={setSelectedInstance}
            />

            {/* Section Label buttons, inside youll find children dropdown lists of their Variants */}
            {projectVariants.map((i, index) => {
              return (
                <VariantButton
                  key={i.label + index}
                  label={i.label}
                  variants={i.variants}
                  iframeSrc={props.iframeSrc}
                  setIframeSrc={props.setIframeSrc}
                  setChooseSectionsStatus={setChooseSectionsStatus}
                  chooseSectionsStatus={chooseSectionsStatus}
                  selectedInstance={selectedInstance}
                  setSelectedInstance={setSelectedInstance}
                />
              );
            })}
          </div>
        )}

        {/* Section buttons which open up their edit input drawer */}
        {/* NOT making variants */}
        {!showVariantButtons &&
          layout &&
          layout.map((instance) => (
            <EditButton
              key={instance.id}
              instance={instance}
              makeVariant={false}
              setIframeSrc={props.setIframeSrc}
              setChooseSectionsStatus={setChooseSectionsStatus}
              selectedInstance={selectedInstance}
              setSelectedInstance={setSelectedInstance}
            />
          ))}
      </div>

      {/* Input Drawer, home of Edit Layer 2 */}
      <EditInputsDrawer
        showInputDrawer={showInputDrawer}
        selectedInstance={selectedInstance}
        setSelectedInstance={setSelectedInstance}
      />
    </div>
  );
};
export default EditLayer1;
