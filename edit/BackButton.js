import React from "react";
import { useHistory } from "react-router-dom/";

export default function BackButton({
  setSelectedInstance
}) {
  const history = useHistory();

  const handleClick = () => {
    history.push("/edit/variants");
    setSelectedInstance(null);
  };

  return (
    <button onClick={handleClick} className="text-white">
      &#8592;
    </button>
  );
}
