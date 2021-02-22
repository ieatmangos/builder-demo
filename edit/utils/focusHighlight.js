export function focusHighlight(id, editable){
  const parent = document.getElementById(id);
  if (parent) {
    const allChildren = parent.getElementsByTagName("*");
    const focusedValue =
      editable && editable.focus_element
        ? editable.focus_element.data.inner
        : "";

    Array.from(allChildren).forEach((node) => {
      // Remove all borders first
      const parentHasBorder = parent.className.includes("find-border");
      const nodeHasOutline = node.className.includes("find");
      
      if(parentHasBorder){
        parent.className = parent.className.replace("find-border",' ');
      }
      if (nodeHasOutline) {
        node.className = node.className.replace("find", " ").replace("find-border", " ")
      } 

      // Add border or outline if the input value isnt empty
      // 'find' === outline
      // 'find-border' === border

      // Parent container and the hds-section container BOTH get a border.
      // Because the outline doesnt show up for them.
      // For every other element we can add an outline, that way the box doesnt resize.

      const matchedStyle = node.className.includes(focusedValue)
      const matchedHTML = node.innerHTML.includes(focusedValue)
      const isParentContainer = parent.className.includes(focusedValue)
      const isSectionContainer = node.className.includes('hds-section')

      if (focusedValue.length > 0) {
        if (isParentContainer) {
          // the parent <section />
          parent.className = parent.className + " find-border ";

        } else if (matchedStyle && isSectionContainer) {
          // Check for the inner wrapper we call 'hds-section'
          node.className = node.className + " find-border ";

        } else if (matchedStyle) {
          // Majority of nodes will fall here
          node.className = node.className + " find ";

        } else if (matchedHTML) {
          // Dont want to add the class to the parent elements so,
          // Is it the last child of the dom tree? Okay add the className 'find'
          const isLastChildElement = node.children.length === 0
          const isImage = node.tagName === 'IMAGE'
          if (isImage) {
            node.className = node.className + " find-border ";
          } else if (isLastChildElement) {
            node.className = node.className + " find ";
          }
        }
      }
    });
  }
}