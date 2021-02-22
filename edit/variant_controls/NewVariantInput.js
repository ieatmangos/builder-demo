import React, {useState} from 'react'
import { getComponentByLabel, useVariants } from '../../hooks';


export default function NewVariantInput({sectionLabel, toggleInput}){
  const { createNewVariant } = useVariants();
  const [variantName, setVariantName] = useState(`${sectionLabel} (copy)`);


  const handleNewVariant = () => {
    const section = getComponentByLabel(sectionLabel)
    const newName = {variantName}
    createNewVariant({...section, ...newName});
    toggleInput()
  };
  return(
    <input
          style={{ fontSize: "13px", lineHeight: "160.4%" }}
          className="w-full py-1 mb-2 outline-none bg-transparent text-white border-b animation-dropdown-left"
          type="text"
          autoFocus
          value={variantName}
          onFocus={(e) => e.currentTarget.select()}
          onChange={(e) => setVariantName(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleNewVariant();
            }
          }}
          onBlur={toggleInput}
        />
  )
}