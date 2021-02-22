import React from 'react'
import { getComponentByLabel } from '../hooks';

//  Hidden Component Map which configures our editable data 

export default function LoadEditableData({sections}){
  return (
    <div id="get-layout-html-2" className="hidden">
    {sections &&
      sections.map((instance) => {
        const Component = getComponentByLabel(instance.label)
        return (
          <div key={`hidden-parent-of-${instance.id}`} className="text-sm ">
            <Component
              key={`hidden-version-of-${instance.id}`}
              id={instance.id}
            />
          </div>
        );
      })}
  </div>
  )
}