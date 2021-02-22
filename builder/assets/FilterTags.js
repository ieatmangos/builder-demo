import React from "react";
import { tags } from "../../sections/allSections";

export const FilterTags = ({ filter, setFilter }) => {
  return (
    <div className="flex my-5 items-start text-sm text-gray-600 ">
      <p className="mx-4 font-bold whitespace-no-wrap">SECTION TYPES:</p>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <button
          key={tag}
          className={`border-b-4 border-transparent ${
            filter === tag && "border-black"
          } mr-2 cursor-pointer`}
          onClick={() => {
            
              localStorage.setItem("tag-filter", tag)
            
            
            setFilter(tag)
          }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};
