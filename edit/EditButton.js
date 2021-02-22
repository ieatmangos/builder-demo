import React from "react";
import { codesandboxUrl } from "../pages/edit/[[...slug]]";
const EditButton = ({
  instance,
  selectedInstance,
  setSelectedInstance,
  setIframeSrc,
  makeVariant,
  setChooseSectionsStatus
}) => {
  const { variantName, label } = instance;

  const route = makeVariant
    ? `iframe/variants/${label}#${instance.id}`
    : `iframe#${instance.id}`;

  return (
    <div
      role='button'
      style={{ fontSize: "13px", lineHeight: "160.4%" }}
      onClick={() => {
        setChooseSectionsStatus&&setChooseSectionsStatus(false)
        setIframeSrc(`${codesandboxUrl}${route}`);
        setSelectedInstance(instance);
      }}
      key={instance.id}
      className={`
        ${
          selectedInstance && selectedInstance.id === instance.id
            ? " bg-white text-sb-gray "
            : " bg-sb-gray text-white "
        }
        ${makeVariant && (!selectedInstance||(selectedInstance&&selectedInstance.id !== instance.id)) ? 'bg-sb-lightgray':''}
        text-left px-4 py-2 transition duration-400  text-sm hover:bg-white hover:text-sb-gray`}
    >
      {variantName ? variantName : label}
    </div>
  );
};
export default EditButton;
