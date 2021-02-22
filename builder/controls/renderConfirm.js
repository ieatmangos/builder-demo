// ============================================== //

import { useLayouts } from "../../hooks";

// ============================================== //
// export const compareSaveAndSelected = () => {
//     const saveName = JSON.parse(localStorage.getItem("savename"));
//     const selected = JSON.parse(localStorage.getItem("selected"));
//     if (saveName === selected) {
//       return true;
//     } else return false;
//   };
  
  // ============================================== //
  // ============================================== //
//   export const renderConfirm = (name, type, firebase) => {
//     const areTheSame = compareSaveAndSelected();
  
//     let isOverriding = false;
  
//     firebase &&
//       firebase.items().once("value", snapshot => {
//         const data = snapshot.val();
//         let result = data ? Object.entries(data).filter(i => i[0] === name) : [];
//         if (result.length < 1) {
//           return (isOverriding = false);
//         } else return (isOverriding = true);
//       });
  
//     const words = `You are about to ${type} file:\n${name}`;
//     if (!areTheSame && type !== "delete" && !isOverriding) {
//       return true;
//     } else if (areTheSame || type === "delete" || isOverriding) {
//       var response = window.confirm(words);
//     }
//     if (response) {
//       return response;
//     }
//   };


export const useConfirm = () => {
    const {allLayouts} = useLayouts()
    
    const checkDelete = (name) => {
        let response = window.confirm(`
        You are about to permanently delete the layout named:
        ${name}
        Are you sure you want to do this?`)
        return response
    }
    
    const checkOverride = (name) => {
        const nameAlreadyExists = allLayouts.filter(layout=>layout[0]===name).length > 0
        let response = true;
        if (nameAlreadyExists){
            response = window.confirm(`
            There is already a layout with this name:
            ${name}
            Do you want to override it?
            Clicking OK will permanently delete the old layout "${name}".`)
        } 
        return response
    }
    return {
        checkOverride,
        checkDelete
    }
}