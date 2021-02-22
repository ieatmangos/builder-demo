import React from "react";
import { useProjectSections, useVariants } from "../hooks";
import SectionList from "./SectionList";
import ScrollToButtons from "./ScrollToButtons";

export default function ChooseSections() {
  const { projectSections, setProjectSections, setNewlyAddedLabel } = useProjectSections();
  const {createNewVariant, flattenedVariants} = useVariants()

  const createNew = (section) =>{
    if(flattenedVariants.filter(i=>i.label===section.label).length>0){
      // Already Created variant
      setProjectSections([...projectSections, section]);
    } else {
      setProjectSections([...projectSections, section]);
      createNewVariant(section)
    }
  }

  const updateChosenSections = (section) => {
    if (projectSections.filter((i) => i.label === section.label).length > 0) {
      // remove
      const removeSection = projectSections.filter((i) => i.label !== section.label)
      setProjectSections(removeSection);
    } else {
      // add
      setNewlyAddedLabel(section.label)
      createNew(section)
    }
  };


  return (
    <div className='flex-1 w-full'>
      <ScrollToButtons/>
      <SectionList updateChosenSections={updateChosenSections} />
    </div>
  );
}
