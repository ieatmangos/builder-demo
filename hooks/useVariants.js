import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useFirebase } from "../firebase/FirebaseContext";
import prepareSectionsForFirebase from "./utils/prepareSectionsForFirebase";
import { useProjectSections } from "./useProjectSections";

// Util
const formatVariants = (variants) => {
  return variants.map((i) => {
    const fbKey = i[0];
    return { ...i[1], fbKey };
  });
};

// Util
const shouldMakeVariants = (router) => {
  const url = router.pathname.split("edit/").pop();
  const { slug } = router.query
  const makeVariant = !slug?false:slug.filter(i=> i==="variants").length>0;

  // const makeVariant = url.includes("variants");
  const _sectionLabel = url.split("/").pop();
  const sectionLabel =!slug?null:( slug[0] === "variants" ? slug[1] : null);
  const showVariantButtons = makeVariant;
  const showVariantSections = makeVariant && sectionLabel;
  return { makeVariant, sectionLabel, showVariantButtons, showVariantSections };
};

//
// USE VARIANTS HOOK
export const useVariants = () => {
  const firebase = useFirebase();

  //
  // All Variants grouped by original label
  // {label: 'Label', variants: [{}]}
  const [allVariants, setAllVariants] = useState([]);

  //
  // All Variants without label grouping, aka flattened
  const flattenedVariants = allVariants.reduce(
    (a, c) => a.concat(c.variants),
    []
  );

  // All Variants respective of projectSections. Will only show variants if their original is selected for the project.
  const { projectSections } = useProjectSections();
  const projectVariants = allVariants
    .map((i) => {
      if (projectSections.filter((b) => b.label === i.label).length > 0) {
        return i;
      } else return false;
    })
    .filter(Boolean);
  const flattenedProjectVariants = projectVariants.reduce(
    (a, c) => a.concat(c.variants),
    []
  );

  //
  // Load allVariants from Firebase
  useEffect(() => {
    let mounted = true;
    firebase.variants().on("value", (snapshot) => {
      const data = snapshot ? snapshot.val() : [];
      const _data = data ? Object.entries(data) : null;
      const formatedVariants = !data
        ? null
        : _data.map((i) => {
            const label = i[0];
            const variants = formatVariants(Object.entries(i[1]));
            return { label, variants };
          });
      formatedVariants && mounted && setAllVariants(formatedVariants);
    });
    return () => (mounted = false);
  }, [firebase]);

  //
  // Create New Variant
  const createNewVariant = (section) => {
    const newId = { id: uuid() };
    const objRef = { ...section, ...newId, };
    const toFirebase = prepareSectionsForFirebase(objRef);
    firebase.variants().child(toFirebase.label).push(toFirebase);
  };


  //
  // Get variants by section label
  const getVariantsBySectionLabel = (label) => {
    if (!label) {
      return [];
    }
    let result;
    firebase
      .variants()
      .child(label)
      .once("value", (snapshot) => {
        const data = snapshot ? snapshot.val() : null;
        result = !data ? null : formatVariants(Object.entries(data));
      });
    return result;
  };

  //
  // Get Variant By Id
  const getVariantById = (id) => {
    let res;
    allVariants.forEach((section) => {
      section.variants.forEach((variant) => {
        if (variant.id === id) {
          res = variant;
        }
      });
    });
    return res;
  };

  //
  // update variant
  const updateVariant = (variant) => {
    firebase
      .variants()
      .child(variant.label)
      .child(variant.fbKey)
      .update(variant);
  };

  //
  // Delete Variant
  const deleteVariant = (variant) => {
    firebase.variants().child(variant.label).child(variant.fbKey).set(null);
  };


  return {
    allVariants,
    createNewVariant,
    getVariantsBySectionLabel,
    updateVariant,
    getVariantById,
    shouldMakeVariants,
    flattenedVariants,
    deleteVariant,
    projectVariants,
    flattenedProjectVariants
  };
};
