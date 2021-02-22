import React from "react";
import { useProjectSections, useVariants } from "../../hooks";


export const LibraryFilters = ({
  setShowLibary,
  showLibary,
  setFilteredItems
}) => {
  const { flattenedProjectVariants } = useVariants()
  const {  projectTags } = useProjectSections()

  const handleClick = (tag) =>{
    if(tag==='All'){
      setFilteredItems(flattenedProjectVariants)
    } else{
      setFilteredItems(flattenedProjectVariants.filter(i=>i.tag===tag))
    }

  }
  return (
    <div className="flex flex-col items-start text-sm text-white bg-sb-gray  ">
      <p className=" px-4 py-4 text-base font-sbHeading">
        PAGE SECTIONS
      </p>
      {projectTags && projectTags.map((tag) => (
        <button
        style={{fontSize: '13px', lineHeight: '160.4%'}}
         
          key={tag}
          className={`
            w-full px-4 py-2 cursor-pointer text-left
            hover:bg-white hover:text-sb-gray
               `}
          onClick={() => {
            !showLibary && setShowLibary(true);
            handleClick(tag)
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};
