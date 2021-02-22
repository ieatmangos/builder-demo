import { useState, useEffect, useCallback } from "react";
import { useFirebase } from "../firebase/FirebaseContext";
import prepareSectionsForFirebase from "./utils/prepareSectionsForFirebase";

export const useProjectSections = () => {
  const firebase = useFirebase();
  const [projectSections, setSections] = useState([]);

  // Update data
  const setProjectSections = (sections) => {
    const firebaseSections = prepareSectionsForFirebase(sections);
    firebase.projectSections().set(firebaseSections);
  };

  // Load the data from firebase
  useEffect(() => {
    let mounted = true;
    firebase.projectSections().on("value", (snapshot) => {
      const data = snapshot ? snapshot.val() : [];
      if (mounted) {
        data ? setSections(data) : setSections([]);
      }
    });
    return () => (mounted = false);
  }, [firebase, setSections]);

  const [newlyAddedLabel, setLabel] = useState("");

  const setNewlyAddedLabel = useCallback(
    (label) => {
      firebase.newlyAddedLabel().set(label);
    },
    [firebase]
  );
  useEffect(() => {
    let mounted = true;
    firebase.newlyAddedLabel().on("value", (snapshot) => {
      const data = snapshot ? snapshot.val() : "";
      if (mounted) {
        data ? setLabel(data) : setLabel("");
      }
    });
    const timer = setTimeout(() => {
      setNewlyAddedLabel("");
    }, 1000);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [firebase, setLabel, setNewlyAddedLabel]);

  let projectTags = Array.from(new Set(projectSections.map((i) => i.tag)));
  projectTags.unshift("All");

  return {
    projectSections,
    projectTags,
    setProjectSections,
    newlyAddedLabel,
    setNewlyAddedLabel
  };
};
