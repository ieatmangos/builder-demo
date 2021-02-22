import React, { useEffect } from "react";
import { focusHighlight } from "../edit/utils/focusHighlight.js";
import { useVariants } from ".";
// import { useLayouts } from "../../hooks";
import { Global } from "../global";

const check = (arg) => {
  if (!arg) {
    return false;
  } else if (arg === "<p><br></p>") {
    return false;
  } else if (arg.length === 0) {
    return false;
  } else return true;
};

const useEdit = (defaults, id) => {
  const { getVariantById } = useVariants();
  // const { getLayoutSectionById } = useLayouts();
  const { items } = React.useContext(Global);

  // our state which we return in this hook
  const [editable, setEdited] = React.useState(null);

  // Find the correct instance of the component from firebase
  var _thisInstance;
  const globalInstance = items.filter((item) => item.id === id);
  if (globalInstance.length > 0) {
    // Its a regular instance
    // We use global items instead of items from firebase so we dont cause a flicker when rearranging in builder
    // Ideally we could use getLayoutSectionById... but it causes a flicker
    // _thisInstance = [getLayoutSectionById(id)]
    _thisInstance = [globalInstance[0]];
  } else {
    // Its a variant!!
    if (id) {
      _thisInstance = [getVariantById(id)];
    }
  }

  if (_thisInstance && _thisInstance[0] && _thisInstance[0].data) {
    const myData = _thisInstance[0].data;
    const a = JSON.stringify(myData).length;
    const b = JSON.stringify(editable).length;
    if (a !== b) {
      setEdited(myData);
    }
  }

  const b = JSON.stringify(editable).length;
  // Pulls editable data from firebase and overrides local state, only if they are different
  useEffect(() => {
    if (_thisInstance && _thisInstance[0] && _thisInstance[0].data) {
      const myData = _thisInstance[0].data;
      const a = JSON.stringify(myData).length;

      if (a !== b) {
        setEdited(myData);
      }
    }
  }, [_thisInstance, b]);

  // AUTO FOCUS EDIT ELEMENTS
  // Highlight
  useEffect(() => {
    focusHighlight(id, editable);
  }, [editable, id]);

  // if (!editable) {
  //   console.log('return defaults')
  //   const _ = defaults
  //   return {_, check};
  // }
  const _ =
    editable && editable.section_styles !== undefined ? editable : defaults;

  return { _, check };
};
export default useEdit;
