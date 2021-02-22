import React from "react";
import { useRouter } from "next/router";
import useScript from "../../jquery/useScript";
import { useLayouts, getComponentByLabel, useVariants } from "../../hooks";

// This is used to render the iframe of components seen in Edit.js
const Iframe = ({ fallback = null, refresh, }) => {
    const router = useRouter()

  const {layout} = useLayouts()
  const { getVariantsBySectionLabel, shouldMakeVariants } = useVariants();
  const { makeVariant, sectionLabel } = shouldMakeVariants(router);
 
  const sections = makeVariant
  ? getVariantsBySectionLabel(sectionLabel)
  : layout;
  
  // useScript("./intersection.js");

  if (sections) {
    return (
      <div className='w-full'>
        {sections.map((item, index) => {
          const Component = getComponentByLabel(item.label)
          return <Component id={item.id} key={item + index} />;
        })}
      </div>
    );
  }
  return fallback;
};
export default Iframe;
