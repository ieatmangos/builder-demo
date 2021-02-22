import React from "react";
import { HoverLinks } from "../assets";

const CompiledPageItem = React.memo(({ id, label, Component }) => {
  return (
    <div className={`relative zoom group`}>
      <HoverLinks label={label} id={id} />

      <Component id={id} />
    </div>
  );
});

export default CompiledPageItem;
