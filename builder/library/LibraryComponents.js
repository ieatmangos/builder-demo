import React, { useRef, useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import { getComponentByLabel } from "../../hooks";
import LibraryDraggable from "./LibraryDraggable";

//  Child
//  Click to drag a Copyable component and then its picks up and drag this component.
const copyComponentToStartDragging = (items) => (provided, snapshot, rubric) => {
  const item = items[rubric.source.index];
  const label = item.label;
  const Component = getComponentByLabel(label);

  if (!Component) {
    return null;
  }
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      style={provided.draggableProps.style}
      id="dr"
      className={` ${
        snapshot.isDragging ? "dragging  " : ""
      }`}
    >
      <Component id={item.id} />
    </div>
  );
};

// Child
function Copyable({ items, droppableId, className }) {
  return (
    <Droppable
      renderClone={copyComponentToStartDragging(items, className)}
      droppableId={droppableId}
      isDropDisabled={true}
    >
      {(provided, snapshot) => (
        <div ref={provided.innerRef} className={className}>
          <LibraryDraggable
            items={items}
            snapshot={snapshot}
            provided={provided}
          />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

// Parent
function LibraryComponents({ showLibary, items, setShowLibary }) {
  let label;
  if (typeof window !== "undefined") {
   label = localStorage.getItem("tag-filter");
  }
  return (
    <div
      style={{ width: showLibary ? "330px" : "0px" }}
      className={` 
      animation duration-500 ease h-screen overflow-y-scroll overflox-x-hidden
     ${showLibary ? " px-4" : ""}
     `}
    >
      <div
        className={`animation delay-500 duration-300 flex items-center uppercase justify-between font-sbHeading text-black 
        ${showLibary ? "opacity-100 " : "opacity-0"}
        `}
      >
        <p className="py-4 text-base">{label}</p>

        {/* X button to close sidebar */}
          <button
            onClick={() => {
                localStorage.setItem("tag-filter", "");
              
              setShowLibary((c) => !c);
            }}
            className={`text-lg  ${showLibary ? "opacity-100 " : "opacity-0"}`}
          >
            &#10005;
          </button>

      </div>
      <Copyable
        droppableId="library_component"
        className={`grid grid-cols-1 gap-4 pb-24 animation transform ease delay-500 duration-300 ${
          showLibary ? "opacity-100 " : "opacity-0"
        }`}
        items={items}
      />
    </div>
  );
}
export default LibraryComponents;
