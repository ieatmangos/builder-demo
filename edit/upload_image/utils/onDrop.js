import React from 'react'
import { useFirebase } from "../../../firebase/FirebaseContext";

const useDrop = (picture, setStatus, handleSuccess) => {
  const firebase = useFirebase();
  const storage = firebase.storage();
  const _name = picture[0].name.replaceAll(" ", "_");
  const d = new Date();
  var name = `${_name}-(${d.getDate()}-${d.getMonth()}.${d.getMilliseconds()})`;

  // include meta data if you wish
  const metadata = {};
  var upload = storage.child(name).put(picture[0], metadata);

  upload.on(
    "state_changed",
    function () {
      setStatus("start upload");
    },
    function (error) {
      setStatus("error");
      console.log(error);
    },
    function () {
      upload.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        handleSuccess(downloadURL);
      });
    }
  );
};
 export default useDrop