import React from 'react'

// Child
const LibraryPageItem = ({instance, Component }) => {
  const {label, id, variantName} = instance
  return (
    <div>
      <p className="text-black text-xs py-2 ">{variantName?variantName:label}</p>
      <div className={`relative library-zoom border border-gray-300 `}>
        <Component id={id} />
      </div>
    </div>
  );
};
export default LibraryPageItem