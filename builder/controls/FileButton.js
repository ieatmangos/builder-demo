import React, { useEffect, useState } from "react";
import { useConfirm } from "./renderConfirm";
import { v4 as uuid } from "uuid";
import Input from "./filebutton_components/Input";
import FileBtn from "./filebutton_components/FileBtn";
import Button from "./filebutton_components/Button";
import { useLayouts } from "../../hooks";

const newLayoutStartingPoint = [
  { id: uuid(), label: "MenuV1", tag: "Menu" },
  { id: uuid(), label: "FooterV1", tag: "Footer" },
];

const FileButton = ({ items, selected, setSelected, forceCreateNew }) => {
  const { layout, createNewLayout, deleteLayout } = useLayouts();

  // Input elements value
  const [saveName, setSaveName] = useState("");
  const takeInputValues = (e) => {
    setSaveName(e);
  };

  // Toggle Value
  const [showOptions, setShowOptions] = React.useState(false);

  // Status options:
  // SAVEAS
  // CREATENEW
  // RENAME
  // DELETE
  const [status, setStatus] = useState("");

  useEffect(() => {
    // User dropped a component without having a saved layout
    if (forceCreateNew.render) {
      setStatus("CREATENEW");
    }
  }, [forceCreateNew]);

  // make local state saveName match the Selected name
  // Should remove from effect and add to Selecter element
  // Also used in delete from firebase below
  // Look into why this is happening
  useEffect(() => {
    if (selected !== undefined) {
      if (typeof window !== "undefined") {
        localStorage.setItem("savename", JSON.stringify(selected));
      }
      setSaveName(selected);
    }
  }, [selected]);

  function saveNew() {
    if (saveName === "select to load") {
      alert("You need to enter a name first");
    } else {
      let confirm = checkOverride(saveName);
      if(!confirm && forceCreateNew.set){
          forceCreateNew.set({ ...forceCreateNew, render: true });
      } else {
        let layoutItems = newLayoutStartingPoint;

        // This is called when you drag a component over without have a layout selected.
        // We wrap the dragged over component between header and footer set above
        if (forceCreateNew.render) {
          const forcedCreate = {
            id: uuid(),
            label: forceCreateNew.component.label,
            tag: forceCreateNew.component.tag,
          };
          layoutItems = [layoutItems[0], forcedCreate, layoutItems[1]];
        }

        // Reset forceCreateNew 
        forceCreateNew.set &&
          forceCreateNew.set({ ...forceCreateNew, render: false });

            localStorage.setItem("savename", JSON.stringify(saveName));
     
        createNewLayout(layoutItems, saveName);
        setSelected(saveName);

        setShowOptions(false);
      }
    }
    setStatus("");
  }
  const {checkOverride, checkDelete} = useConfirm()

  function deleteMe() {
    if (!saveName.length) {
      alert("Nothing to delete");
    } else {
      const confirmed = checkDelete(selected);
      if (confirmed) {
        deleteLayout(saveName);
          localStorage.setItem("savename", JSON.stringify("select to load"));
        
        setSelected("select to load");
      }
    }
    setStatus("");
  }

  function save() {
    if (saveName === "select to load") {
      alert("You need to enter a name first");
    } else {
      let confirm = checkOverride(saveName);
      if (confirm) {
        status === "RENAME" && deleteLayout(selected);
        createNewLayout(items, saveName);

          localStorage.setItem("savename", JSON.stringify(saveName));
        
        setSelected(saveName);
        setShowOptions(false);
      }
    }
    setStatus("");
  }

  // Boolean
  const showInput =
    status === "SAVEAS" || status === "CREATENEW" || status === "RENAME";

  return (
    <div
      id="file-button"
      tabIndex="0"
      className="z-50 relative w-full flex items-center text-gray-600  "
    >
      <div className="flex">
        {/* File Button */}
        <FileBtn setShowOptions={setShowOptions} />

        {/* Input used to change the file name. Used to create new or rename. */}
        {showInput && (
          <Input
            setStatus={setStatus}
            status={status}
            forceCreateNew={forceCreateNew}
            selected={selected}
            takeInputValues={takeInputValues}
            saveNew={saveNew}
            save={save}
          />
        )}
      </div>

      {/* Option buttons */}
      {showOptions && (
        <div
          className="absolute top-0 left-0 mt-8 shadow-lg "
          onMouseLeave={() => setShowOptions(false)}
        >
          <div className="cursor-pointer flex flex-col">
            {layout.length < 0 ? (
              <Button
                text={"New"}
                setStatus={()=>setStatus("CREATENEW")}
              />
            ) : (
              <div className="flex flex-col ">
                <Button
                  text={"New"}
                  setStatus={()=>setStatus("CREATENEW")}

                />
                <Button
                  text={"Save As"}
                  setStatus={()=>setStatus("SAVEAS")}

                />
                <Button
                  text={"Rename"}
                  setStatus={()=>setStatus("RENAME")}

                />
                <Button
                  text={"Delete"}
                  setStatus={()=>setStatus("DELETE")}

                  extraFn={deleteMe}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileButton;
