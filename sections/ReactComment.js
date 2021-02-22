import React from "react";
const ReactComment = props => {
  const el = React.useRef();
  React.useEffect(() => {
    el.current.outerHTML = `<!-- ${props.text} -->`;
  }, []);
  return <div ref={el} />;
};

export default ReactComment;

// example

// <ReactComment text={`A  that will get rendered in HTML`} />
