import React, {useRef, useEffect} from "react";
import { Droppable } from "react-beautiful-dnd";
import CompiledDraggable from "./CompiledDraggable";
import Controls from "../controls";
import { FloatingArrow } from "../assets";

function Compiled({forceCreateNew}) {

  // We need to remove this animation class from the drag and drop components, otherwise they get wonky
  const animation = useRef('animation-dropdown-delay-2 ')
  useEffect(()=>{
    const timer = setTimeout(()=>animation.current = '',1500)
    return () => clearTimeout(timer)
  },[])

  


  return (
    <div className=''>
      <div className='z-50'>
        <Controls forceCreateNew={forceCreateNew} />
      </div>

      <Droppable droppableId="BAG">
        {(provided, snapshot) => {
          const {isDraggingOver} = snapshot
    
        
          return (
            <div
              ref={provided.innerRef}
              className={`
              pt-0 min-h-screen mx-auto max-w-4xl  p-4 
             ${animation.current}
             `}
            >
              <div
                style={{ minHeight: "75vh", zIndex: "0" }}
                className={`
                ${isDraggingOver ? ' border-b-0 ': ' overflow-hidden '}
                 animation duration-300 ease border shadow-md  border-sb-gray border-t-0 rounded-b-md  bg-transparent flex flex-col justify-start`}
                id="get-layout-html"
              >
              {forceCreateNew.render && <FloatingArrow/>}
                  <CompiledDraggable/>
              </div>
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
      </div>

  );
}

export default Compiled;
