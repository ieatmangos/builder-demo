import { useState, useEffect,} from "react";
import { useFirebase } from "../firebase/FirebaseContext";


export const useImageStorage = (setLoading) => {
  const firebase = useFirebase();
  const storage = firebase.storage();
 
  const [picture, setPicture] = useState();

  const uploadToStorage = (name, picture) => {
    const upload = storage.child(name).put(picture)
    const getDownloadURL = (callback) =>{
        upload.snapshot.ref.getDownloadURL().then( (downloadURL) => {
            callback(downloadURL);

          });
    }
    return {upload, getDownloadURL}
  }
  

  const [allImages, setImages] = useState([]);

  useEffect(() => {
    let mounted = true

    const fetchImages = async () => {
      
      let result = await storage.listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );
      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();

      setLoading && setLoading(false)
      mounted && setImages(urls);
    };
    
    loadImages();
    return () => mounted = false
  }, [storage]);

  return {
    picture, setPicture, uploadToStorage, allImages
  };
};
