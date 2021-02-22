import sections from "../../sections/allSections";

export function getComponentByLabel(label){
  return sections.filter((x) => x.label === label)[0].c
}
