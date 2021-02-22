export default function prepareSectionsForFirebase(sections) {
  if (Array.isArray(sections)){
    return sections.map((i) => {
      return {
        id: i.id,
        label: i.label,
        tag: i.tag,
        variantName: i.variantName || '',
        data: i.data || {}
      };
    });
  } else {
    return {
      id: sections.id,
      label: sections.label,
      tag: sections.tag,
      variantName: sections.variantName || '',
      data: sections.data || {}
    };
  }
};