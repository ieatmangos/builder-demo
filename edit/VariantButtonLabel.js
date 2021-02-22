import React from 'react'
import {useProjectSections} from '../hooks'

const VariantButtonLabel = ({label}) => {
  const { newlyAddedLabel } = useProjectSections();

  return <span className={`animation duration-300  ${newlyAddedLabel===label? 'text-sb-tealMedium':'text-white'}`}>{label}</span>;
};


export default VariantButtonLabel