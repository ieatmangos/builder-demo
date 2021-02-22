import React from "react";

// function getSidebarTitle(showVariantButtons, showVariantSections) {
//   let result;
//   if (showVariantButtons) {
//     result = "PROJECT SECTIONS";
//   } else if (showVariantSections) {
//     result = "VARIANTS";
//   } else result = "PAGE SECTIONS";
//   return result;
// }

const SideBarTitle = () => {
  return (
    <div  className="p-4 pb-4 text-base font-sbHeading text-white border-b-2 border-sb-gray w-48 z-30 ">
      PAGE SECTIONS
    </div>
  );
};

export default SideBarTitle;
