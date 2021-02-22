import { useState, useEffect, useCallback, useContext } from "react";
import { useFirebase } from "../firebase/FirebaseContext";
import prepareSectionsForFirebase from "./utils/prepareSectionsForFirebase";
import formatFromFirebase from "./utils/formatFromFirebase";
import { Global } from "../global";

export const useLayouts = () => {
  const firebase = useFirebase();
  let _savename;
  if (typeof window !== "undefined") {
    _savename = localStorage.getItem("savename");
  }
  const savename = _savename ? JSON.parse(_savename) : null;

  const [allLayouts, setAllLayouts] = useState([]);
  const [layout, setLayout] = useState([]);

  // ========== //
  // ========== //
  // ========== //
  // ========== //
  // Load all Layouts
  useEffect(() => {
    let mounted = true;
    firebase.layouts().on("value", (snapshot) => {
      const data = snapshot ? snapshot.val() : null;
      if (mounted) {
        data ? setAllLayouts(formatFromFirebase(data)) : setAllLayouts([]);
      }
    });
    return () => (mounted = false);
  }, [firebase, setAllLayouts]);

  // ========== //
  // ========== //
  // Load current layout
  const { setItems } = useContext(Global);
  useEffect(() => {
    let mounted = true;
    if (!savename || savename.length===0|| savename === 'select to load') {
      return;
    }
  firebase
      .layouts()
      .child(savename)
      .on("value", (snapshot) => {
        const data = snapshot ? snapshot.val() : null;
        if (mounted) {
          // console.log("setting Lahout");
          if(data){
            setLayout(data)
            setItems(data)
          } else {
            setLayout([])
            setItems([])
          }
          // data ? setLayout(data) : setLayout([]);
        }
      });
    return () => (mounted = false);
  }, [firebase, setLayout, savename, setItems]);

  // ========== //
  // ========== //
  // Update Layout
  const updateLayout = (sections) => {
    if(savename === 'select to load'){
      return
    }
    const firebaseSections = prepareSectionsForFirebase(sections);
    firebase.layouts().update({ [savename]: firebaseSections });
    setItems(firebaseSections)
  };


  // ========== //
  // ========== //
  // Create New Layout
  const createNewLayout = (sections, name) => {
    if(name === 'select to load'){
      return
    }
    const firebaseSections = prepareSectionsForFirebase(sections);
    firebase.layouts().update({ [name]: firebaseSections });
  };


  // ========== //
  // ========== //
  // Delete Layout
  const deleteLayout = (name) => {
    firebase.layouts().update({ [name]: null });
    // setItems(firebaseSections)
  };

  // ========== //
  // ========== //
  // Get Layout Section by Id
  const getLayoutSectionById = (id) =>{
    const res = layout.filter((i) => i.id === id)
    if(res.length>0){
      return res[0]
    } else return null
  }

  return {
    allLayouts,
    layout,
    getLayoutSectionById,
    createNewLayout,
    updateLayout,
    deleteLayout
  };
};
