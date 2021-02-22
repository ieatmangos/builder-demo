/* eslint-disable */
import React, { useState } from "react";
import ImagePicker from "./ImagePicker";
import ProgressSpinner from "./utils/ProgressSpinner";
import ImageUpload from "./ImageUpload";
import { useImageStorage } from "../../hooks";
import getPictureName from "./utils/getPictureName";

const UploadImage = ({ onChange, value }) => {
  // Status options:
  // default
  // success
  // remove
  // loading
  // error
  // picker
  const [status, setStatus] = useState("default");

  const { picture, setPicture, uploadToStorage } = useImageStorage();

  React.useEffect(() => {
    // onMount
    // If there is a supplied value then set the Picture and status
    const timer = setTimeout(() => {
      if (value) {
        setPicture(value);
        setStatus("success");
      } else {
        // Else there is no picture meaning its been removed previously, so we update our status
        setPicture(null);
        setStatus("remove");
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);

  const updateImage = (downloadURL) => {
    onChange(downloadURL);
    setPicture(downloadURL);
    setStatus("success");
  };

  const removeImage = () => {
    onChange("");
    setPicture(null);
    setStatus("remove");
  };

  // ON DROP
  const onDrop = (picture) => {

    const name = getPictureName(picture);
    const { upload, getDownloadURL } = uploadToStorage(name, picture);

    upload.on(
      "state_changed",
      () => {
        setStatus("loading");
      },
      (error) => {
        setStatus("error");
        console.log(error);
      },
      () => {
        getDownloadURL(updateImage);
      }
    );
  };

  switch (status) {
    case "error":
      return (
        <p className="text-xs">Oops something went wrong. Check the console.</p>
      );
    case "loading":
      return <ProgressSpinner />;
    case "picker":
      return <ImagePicker setStatus={setStatus} updateImage={updateImage} />;
    case "remove":
      return (
        <div className="border border-sb-lightGray p-4 animation-dropdown text-center">
          <button
            style={{ letterSpacing: "1px" }}
            onClick={() => setStatus("default")}
            className="border border-sb-lightGray px-6 py-2 rounded-sm text-sm mx-auto"
          >
            ADD IMAGE
          </button>
        </div>
      );
    case "success":
      return (
        <div className="relative animation-dropdown flex justify-center items-center rounded-md">
          <div className="absolute inset-0 bg-sb-gray opacity-50 z-0 rounded-md " />
          <button
            onClick={() => setStatus("default")}
            className="z-20 absolute top-0 right-0 m-1  px-2  bg-red-600 text-white text-xs rounded-sm shadow-xl animation duration-200 ease transform hover:-translate-y-px hover:bg-red-200"
          >
            X
          </button>
          <img className="rounded-md z-10" src={picture} alt="preview" />
        </div>
      );
    default:
      return (
        <div>
          <div className="border border-sb-lightGray p-4 animation-dropdown">
            <div className="flex flex-col gap-1">
              {/* Upload button */}
              <ImageUpload onDrop={onDrop} />

              {/* Choose button */}
              <button
                style={{ letterSpacing: "1px" }}
                onClick={() => setStatus("picker")}
                className="border border-sb-lightGray px-6 py-2 rounded-sm text-sm mx-auto"
              >
                CHOOSE
              </button>

              {/* Remove Button */}
              <button
                style={{ letterSpacing: "1px" }}
                onClick={removeImage}
                className="border border-sb-lightGray px-6 py-2 rounded-sm text-sm mx-auto"
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      );
  }
};

export default UploadImage;
