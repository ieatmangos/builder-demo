import React from "react";
import sections, { tags } from "../sections/allSections";
import SingleSection from "./SingleSection";

export default function SectionList(props) {

  const tagGroups = groupbyTags(sections);

  return (
    <div id="All" className="">
      {tagGroups.map((group, index) => {
        // Remove the tag 'All'
        if (group.length === 0) {
          return null;
        }
        return (
          <div
            id={tags[index]}
            key={`tag-group-${index}`}
            className="border-b border-sb-lightgray p-8 pb-16"
          >
            {/* Tag/Group Label */}
            <p className="pb-4 pt-8">{tags[index]}</p>

            {/* Tag Group Grid */}
            <div className=" grid grid-cols-2 gap-6 overflow-hidden">
              {group.map((section) => {
                return (
                  <SingleSection
                    key={section.id}
                    {...props}
                    section={section}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}


const groupbyTags = (sections) => {
  return tags.map((tag) => sections.filter((section) => section.tag === tag));
};