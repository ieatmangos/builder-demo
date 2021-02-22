import React from "react";
import EditLayer3 from "./EditLayer3";
import {useEdit} from '../hooks'
import { EditMyData } from "../edit";
import StampVariant from './variant_controls/StampVariant'


const EditLayer2 = ({
  setSelectedInstance,
  instance,
  layout,
  shouldMakeVariants
}) => {
  // editMyData: This is either the defaults or the edited data..
  const { editMyData } = React.useContext(EditMyData);

  const id = instance.id;
  const myData = editMyData.filter((i) => i.id === id)[0];
  const defaults = React.useMemo(() => (myData ? myData.defaults : {}), [
    myData
  ]);

  // The shared data between the component instance and its respective EditInputs
  const { _ } = useEdit(defaults, id);

  // Local copy to make updates to
  const [inputVals, setInputVals] = React.useState(_);

  React.useEffect(() => {
    // REORDER the inputs based off default ordering
    // This effect runs each time a firebase object's data changes.
    // Which is a lot so this could be optimized

    if (Object.keys(defaults).length === 0) {
      return;
    }

    // use the passed in Defaults to create arrays which hold the original order for both LevelOne and LevelTwo
    const orderOne = Object.keys(defaults);
    const orderTwo = Object.values(defaults)
      .map((i) => i.data)
      .map((i) => Object.keys(i));

    // Sort Level One
    const levelOneResult = Object.entries(_).sort(function (a, b) {
      return orderOne.indexOf(a[0]) - orderOne.indexOf(b[0]);
    });

    // Sort level Two
    const levelTwoResult = levelOneResult.map((i, index) => {
      const obj = Object.entries(i[1].data).sort(function (a, b) {
        return orderTwo[index].indexOf(a[0]) - orderTwo[index].indexOf(b[0]);
      });
      return Object.fromEntries(obj);
    });

    // Combine both levels
    const combinedSorted = Object.fromEntries(
      levelOneResult.map((i, index) => {
        const objRef = i;
        objRef[1].data = levelTwoResult[index];
        return objRef;
      })
    );

    // Update local version
    setInputVals(combinedSorted);

  }, [_, defaults]);

  // Show Hide DropDown Inputs
  const [showTheseInputs, setShowTheseInputs] = React.useState([]);
  React.useEffect(() => {
    // reset show inputs on mount
    setShowTheseInputs([]);
  }, []);

  const toggleShow = (sectionLabel) => {
    showTheseInputs.includes(sectionLabel)
      ? setShowTheseInputs(showTheseInputs.filter((i) => i !== sectionLabel))
      : setShowTheseInputs([...showTheseInputs, sectionLabel]);
  };

  // Warning message to display if section needs to be 'Configured'
  if (!myData) {
    return (
      <div className="px-4 pt-8 text-orange-400">
        Component is not configured to be edited.
      </div>
    );
  }

  // Normal Return
  return (
    <div className="relative text-sb-textColor ">
      {/* Title */}
      <div className="flex items-center uppercase justify-between font-sbHeading  text-lg">
        <p
          style={{
            textSize: "15px",
            lineHeight: "130%",
            letterSpacing: "0.03em"
          }}
          className="py-4"
        >
          Edit Page Content
        </p>
        <div className="flex items-center gap-2">
          <StampVariant section={instance} />
          <button
            onClick={() => {
              setSelectedInstance(null);
            }}
            className="text-sm font-bold"
            style={{ color: " #7E7F88" }}
          >
            &#10005;
          </button>
        </div>
      </div>

      {/* Level Two */}
      {/* Section Labels */}
      {inputVals &&
        Object.entries(inputVals).map((section) => {
          const sectionLabel = section[0];
          if (sectionLabel === "focus_element") {
            // Hide the focus element needed for highlighting
            return null;
          }
          const displaySectionLabel = sectionLabel.replace("_", " ");
          const sectionData = section[1].data;
          const showThisLabel = showTheseInputs.includes(sectionLabel);
          return (
            <div key={sectionLabel}>
              {/* Section Label Toggle Button */}
              <button
                style={{
                  fontWeight: "500",
                  lineHeight: "27px",
                  letterSpacing: "1px",
                  fontSize: "18px"
                }}
                className="group font-sbHeading uppercase pt-2 mt-2 border-t border-gray-300  flex justify-between items-center w-full text-left"
                onClick={() => toggleShow(sectionLabel)}
              >
                {displaySectionLabel}
                <span
                  style={{
                    transformOrigin: "50% 50%",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    boxSizing: "border-box"
                  }}
                  className={`border-2 border-white group-focus:border-sb-teal px-2 rounded-sm transform animation duration-500 `}
                >
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform ${
                      showThisLabel ? "" : " rotate-180 "
                    }`}
                  >
                    <path
                      d="M1 7.7168L7.575 1.2837L14.15 7.7168"
                      stroke="#110E17"
                      strokeWidth="1.4"
                    />
                  </svg>
                </span>
              </button>

              {/* Level Three */}
              {/* Editable Inputs */}
              <div
                className={`${
                  showTheseInputs.includes(sectionLabel) ? "block " : "hidden "
                }`}
              >
                {Object.entries(sectionData).map((i) => (
                  <EditLayer3
                    shouldMakeVariants={shouldMakeVariants}
                    layout={layout}
                    key={i[0]}
                    id={id}
                    i={i}
                    inputVals={inputVals}
                    setInputVals={setInputVals}
                    sectionLabel={sectionLabel}
                  />
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default EditLayer2;
