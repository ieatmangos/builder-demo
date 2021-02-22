import React, { useState } from "react";
import { useImageStorage } from "../../hooks";
import ProgressSpinner from "./utils/ProgressSpinner";

const ImagePicker = ({ updateImage, setStatus }) => {
  const [loading, setLoading] = useState(true)
  const {allImages} = useImageStorage(setLoading)

  const [gridSize, setGridSize] = useState("grid-cols-3");

  return (
    <div>
      <div className="grid grid-cols-3 text-xs pb-2 border-b border-sb-gray">
        <button onClick={() => setStatus("default")}>&#8592;</button>
        <button onClick={() => setGridSize("grid-cols-3")}>sm</button>
        <button onClick={() => setGridSize("grid-cols-1")}>lg</button>
      </div>
        {loading
        ? <ProgressSpinner/>
        : <div className={`grid ${gridSize}`}>
        {allImages.length < 1 ? (
          <div className="col-span-3 py-1 px-2 bg-red-200 text-xs text-red-700">
           no images found
          </div>
        ) : (
          allImages.map((image) => (
            <button
              key={image}
              className="hover:opacity-75 animation duration-300 ease"
              onClick={() => updateImage(image)}
            >
              <img
                className="object-cover"
                key={image+1}
                src={image}
                alt="picker"
              />
            </button>
          ))
        )}
      </div>}
    </div>
  );
};

export default ImagePicker;
