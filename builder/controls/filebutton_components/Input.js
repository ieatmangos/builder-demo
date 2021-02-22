import React from "react";

const Input = ({
  setStatus,
  status,
  forceCreateNew,
  selected,
  takeInputValues,
  saveNew,
  save
}) => {
  const forceNew = forceCreateNew && forceCreateNew.render;
  const focusRef = React.useRef();
  // Effect to handle hide/show of editable name space
  React.useEffect(() => {
    if (status === "SAVEAS" || status === "CREATENEW" || status === "RENAME") {
      focusRef.current.focus();
      focusRef.current.select();
    }
  }, [focusRef, status]);

  const getPlaceholder = () => {
    if(status === "CREATENEW" && forceNew ){
      return 'Create a layout'
    } else if (status === 'RENAME'){
      return selected
    } else if (status === 'SAVEAS'){
      return `${selected} (copy)`
    }
  }
  const placeholder = getPlaceholder()

  return (
    <input
      ref={focusRef}
      type="text"
      name="name"
      onBlur={() => {
        setStatus("");
        // only happens when someones drags a component without a saved layout name
        forceCreateNew.set &&
          forceCreateNew.set({ ...forceCreateNew, render: false });
      }}
      className={`w-full px-3 remove-outline bg-transparent text-gray-600 border-b 
              ${forceNew ? "border-b-2 border-sb-teal" : "border-sb-black"} `}
      placeholder={placeholder}
      onChange={(e) => takeInputValues(e.target.value)}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          if (status === "CREATENEW") {
            saveNew(event);
          } else save();
        }
      }}
    />
  );
};

export default Input;
