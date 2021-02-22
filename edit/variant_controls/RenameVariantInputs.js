import React, { useState } from "react";
import { useVariants } from "../../hooks";

export default function RenameVariantInputs({ sections, setRenameStatus }) {
  return (
    <div className="flex flex-col">
      {sections &&
        sections.map((instance, index) => (
          <RenameInput
            sections={sections}
            key={instance.variantName + index}
            setRenameStatus={setRenameStatus}
            instance={instance}
          />
        ))}
    </div>
  );
}

const RenameInput = ({ instance, setRenameStatus, sections }) => {
  const [name, setName] = useState(instance.variantName);

  const { updateVariant, deleteVariant } = useVariants();

  const handleEnter = () => {
    const variantName = { variantName: name };
    const withNewName = { ...instance, ...variantName };
    updateVariant(withNewName);
    setRenameStatus(false);
  };

  const handleDelete = () => {
    deleteVariant(instance);
    // For some reason the last item doesnt delete itself so we check the length and close down the component to bypass bug
    sections.length === 1 && setRenameStatus(false);
  };

  return (
    <div
      style={{ fontSize: "13px", lineHeight: "160.4%" }}
      className="flex items-center gap-2 border-b border-white"
    >
      <input
        className="w-32 py-2 outline-none bg-transparent text-white"
        type="text"
        value={name}
        onFocus={(e) => e.currentTarget.select()}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleEnter();
          }
        }}
      />
      <DeleteButton handleDelete={handleDelete} />
    </div>
  );
};

const DeleteButton = ({ handleDelete }) => {
  return (
    <div
      onClick={handleDelete}
      role="button"
      style={{ fontSize: "10px" }}
      className="text-white  animation-dropdown"
    >
      &#10005;
    </div>
  );
};
