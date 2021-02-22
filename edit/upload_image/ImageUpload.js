import React, { useState } from "react";
// import ImageUploader from "react-images-upload";

// const ImageUpload = ({ onDrop }) => {
//   return (
//     <>

//      <ImageUploader
//        singleImage={true}
//        withIcon={false}
//        withLabel={false}
//        fileContainerStyle={{
//          boxShadow: "none",
//          padding: "0px",
//          margin: "0px"
//        }}
//        buttonText="UPLOAD"
//        buttonStyles={{
//          padding: "8px 24px",
//          background: "transparent",
//          border: "1px solid #e2e8f0",
//          color: "#110E17",
//          borderRadius: "0.125em",
//          letterSpacing: "1px",
//          margin: "0px"
//        }}
//        onChange={onDrop}
//        withPreview
//        imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
//        maxFileSize={5242880}
//      />
//     </>
//   );
// };

const ImageUpload = ({ onDrop }) => {
  const handleImageChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    file && onDrop(file);
  };
  return (

      <label
        className="text-sb-textColor border border-sb-lightGray px-6 py-2 rounded-sm text-sm mx-auto bg-transparent active:bg-sb-tealLight cursor-pointer"
        style={{
          letterSpacing: "1px",
        }}
      >
        UPLOAD
        <input
          className="hidden"
          type="file"
          onChange={(e) => handleImageChange(e)}
        />
      </label>
  
  );
};
export default ImageUpload;
