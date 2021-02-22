import React from "react";
import CompiledPageItem from "./CompiledPageItem";
import { Draggable } from "react-beautiful-dnd";
import { Global } from "../../global";
import { useLayouts, getComponentByLabel } from "../../hooks";

// Parent
const CompiledDraggable = React.memo(() => {

  // Switch this to use global items if there is a bug with reordering not sticking
  const { items } = React.useContext(Global);
  const { layout } = useLayouts();
  // 
  
  return (items.map((item, index) => {
    return <Child key={index*99} item={item} index={index}/>
  }))
})
export default CompiledDraggable;


const Child = React.memo(({item, index}) => {

  const Component = getComponentByLabel(item.label);
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={provided.draggableProps.style}
        >
          <CompiledPageItem
            id={item.id}
            label={item.variantName? item.variantName : item.label}
            Component={Component}
          />
        </div>
      )}
    </Draggable>
  );
});
