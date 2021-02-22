import React, { useState, useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Library from "../../builder/library/Library";
import Compiled from "../../builder/compiled/Compiled";
import { copy, reorder } from "../../builder/assets";
import { Global } from "../../global";
import useScript from "../../jquery/useScript";
import { useLayouts, useSavename } from "../../hooks";



function Layout() {
  const { updateLayout } = useLayouts()
  const { items, setItems } = React.useContext(Global);
  const savename = useSavename()
  // let saveName;
  // if (typeof window !== "undefined") {
  //   saveName =  JSON.parse(localStorage.getItem("selected"));
  // }

  // Filtered list of component instances based on what filter is selected in child compoonent
  // We use this list in our Library and then 'copy a component' from it as we drop into the Compiled Side
  const [libraryItems, setFilteredItems] = useState([]);

  // Auto Save
  const autoSave = useCallback(() => {
    updateLayout(items)
  }, [items, updateLayout]);

  // Lets you drag a component over without having a layout selected and prompt you to create a layout
  const [forceCreateNew, setCreateNew] = useState({render: false, component: null, set:null})

  const onDragEnd = useCallback(
    (result) => {
      const { source, destination } = result;

      if (!destination) {
        return;
      }

      switch (source.droppableId) {
        case destination.droppableId: {
          // Component is already in the compiled side and needs to be reordered
          setItems((state) => reorder(state, source.index, destination.index));
          autoSave();
          break;
        }
        case "library_component": {
          // A section was grabbed from the library and dragged over into the builder

          // Check used to open up the save name input in controls/index.js if theres no layout selected
          // const needToCreateNewLayout = false
          const needToCreateNewLayout = (!(savename && savename.length > 0) || savename === 'select to load')
          
          if(needToCreateNewLayout) {
            const item = libraryItems[source.index];
            setCreateNew({render:true, component: item, set: setCreateNew})          
          }
       
          // Grabbed a new component from the Libary and dropped in the builder,
            setItems((state) => copy(libraryItems, state, source, destination));
            savename&&autoSave();
          
          break;
        }
        default:
          break;
      }
    },
    [setItems, libraryItems, autoSave, setCreateNew, savename]
  );


  useScript('./intersectionObserver.js')

  return (
    <div className="builder-app text-primary w-full">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex">

          {/* Side Bar */}
          <Library items={libraryItems} setFilteredItems={setFilteredItems} />

          <div
            style={{ backgroundColor: "#D6D6D6" }}
            className={` flex-1 h-screen overflow-y-scroll overflox-x-hidden  border-l border-gray-500`}
          >
            <Compiled forceCreateNew={forceCreateNew}
            />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
export default Layout;
