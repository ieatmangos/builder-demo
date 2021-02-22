import React, { useState } from "react";
import { EditMyData } from "../edit";
import Firebase from "../firebase/Firebase";

import { FirebaseContext } from "../firebase/FirebaseContext";
import { Global } from "../global";
import Nav from "../Nav";
import "../styles/tailwind.css";
import "../styles/EditAnimations.css";
import "../styles/FloatingArrow.css";
import "../styles/HoverLinks.css";
import "../styles/progress_spinner.css";
import "../styles/Rte.css";
import "../styles/StartingBlock.css";

//  Child
const WithEdit = ({ children }) => {
  // When an 'edtiable' Section is mounted we push its ID and defaults/data here
  // This is how we pair the Section Instance with its Editable Data.
  const [editMyData, setEditMyData] = React.useState([]);
  return (
    <EditMyData.Provider value={{ editMyData, setEditMyData }}>
      {children}
    </EditMyData.Provider>
  );
};

// Child
const WithGlobalState = ({ children }) => {
  // Use this array to drag into, Reorder, Delete from, Copy and Paste.
  // We save this Array to firebase onDragEnd
  // My theory is we could remove this all together and save directly to firebase instead of this context value
  const [items, setItems] = useState([]);

  // console.log('globalItems:', items)

  return (
    <Global.Provider value={{ items, setItems }}>{children}</Global.Provider>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
    <WithGlobalState>
      <WithEdit>
        <div className='flex w-screen overflow-hhidden'>
        <Nav/>
        <Component {...pageProps} />
        </div>
      </WithEdit>
    </WithGlobalState>
    </FirebaseContext.Provider>
  );
}

export default MyApp;
