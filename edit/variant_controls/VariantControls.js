import React, { useState } from "react";
import RenameVariantButton from "./RenameVariantButton";
import CreateNewVariantButton from "./CreateNewVariantButton";
import RenameVariantInputs from "./RenameVariantInputs";
import NewVariantInput from "./NewVariantInput";

export default function VariantControls({
  variants,
  sectionLabel,
  renameStatus,
  setRenameStatus,
  setSelectedInstance
}) {

  // New Variants Name Input
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput((c) => !c);
  };

  return (
    <div className="px-4 bg-sb-lightgray ">
      {/* Create a new Variant Input */}
      {showInput && (
        <NewVariantInput
          toggleInput={toggleInput}
          sectionLabel={sectionLabel}
        />
      )}

      {/* Rename Variant List */}
      {renameStatus && <RenameVariantInputs setRenameStatus={setRenameStatus} sections={variants} />}

      {/* Two Circle Buttons */}
      <div className="flex items-center justify-center gap-2 py-4">
        <RenameVariantButton
          setShowInput={setShowInput}
          setSelectedInstance={setSelectedInstance}
          renameStatus={renameStatus}
          setRenameStatus={setRenameStatus}
        />
        <CreateNewVariantButton
          setRenameStatus={setRenameStatus}
          toggleInput={toggleInput}
        />
      </div>
    </div>
  );
}
