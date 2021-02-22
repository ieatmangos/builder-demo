import React, { useEffect, useRef } from "react";

const AutoGrowElement = (props) => {
  const myRef = useRef(null)
  const onInput = (value) => {
    myRef.current.dataset.replicatedValue = value;
  };
  useEffect(()=>{
    onInput(props.value)
  },[props.value])
  return (
    <div ref={myRef} className="grow-wrap ">
      <textarea {...props} onInput={(e) => onInput(e.target.value)}></textarea>
    </div>
  );
};

export default AutoGrowElement

// Found in App.css
// .grow-wrap {
//   /* easy way to plop the elements on top of each other and have them both sized based on the tallest one's height */
//   display: grid;
// }
// .grow-wrap::after {
//   /* Note the weird space! Needed to preventy jumpy behavior */
//   content: attr(data-replicated-value) " ";
 
//   /* This is how textarea text behaves */
//   white-space: pre-wrap;

//   /* Hidden from view, clicks, and screen readers */
//   visibility: hidden;
// }
// .grow-wrap > textarea {
//   /* You could leave this, but after a user resizes, then it ruins the auto sizing */
//   resize: none;

//   /* Firefox shows scrollbar on growth, you can hide like this. */
//   overflow: hidden;
// }
// .grow-wrap > textarea,
// .grow-wrap::after {
//   /* Identical styling required!! */
//   border: 1px solid black;
//   padding: 0.5rem;
//   font: inherit;

//   /* Place on top of each other */
//   grid-area: 1 / 1 / 2 / 2;
// }