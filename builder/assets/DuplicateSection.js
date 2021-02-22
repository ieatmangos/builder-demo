import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import { useLayouts, useEdit } from "../../hooks";
import { EditMyData } from "../../edit";
import { CopySvg } from "./svg";

const DuplicateSection = ({ id }) => {
  const { layout, updateLayout } = useLayouts();

  const { editMyData } = useContext(EditMyData);
  const myData = editMyData.filter((i) => i.id === id)[0];
  const defaults = myData ? myData.defaults : {};
  const { _ } = useEdit(defaults, id);

  const duplicate = () => {
    // Find the element to copy
    const toDuplicate = layout.filter((i) => i.id === id)[0];
    //  Assign a new id and its respective data
    const newId = { id: uuid() };
    const editableData = { data: _ };

    // Create the duplicated section
    const duplicatedSection = {
      ...toDuplicate,
      ...newId,
      ...editableData,
    };

    // Determine where to place to duplicated section
    const locatePlacement = (element) => element.id === id;
    const index = layout.findIndex(locatePlacement);

    let sectionsBefore = layout.slice(0, index);
    // Add in the duplicated section
    sectionsBefore.push(duplicatedSection);
    const sectionsAfter = layout.slice(index);

    const withDuplicatedSection = [...sectionsBefore, ...sectionsAfter];
    // Update
    updateLayout(withDuplicatedSection);
  };

  // used to changed the fill color of the SVG
  const [status, setStatus] = React.useState(false);
  React.useEffect(() => {
    if (!status) {
      return;
    }
    const timer = setTimeout(() => {
      status && setStatus(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <button
      className={`${
        status ? "bg-sb-tealLight rounded-md" : ""
      } p-2 cursor-pointer transform animation duration-100 hover:-translate-y-1  hover:shadow-sm `}
      onClick={() => {
        duplicate();
        setStatus(true);
      }}
    >
      <CopySvg status={status} />
    </button>
  );
};

export default DuplicateSection;
