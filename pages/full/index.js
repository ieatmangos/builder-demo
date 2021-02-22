import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { codesandboxUrl } from "./Edit";

const Full = ({ location }) => {
    const router = useRouter()

  const [refresh, trigger] = useState(true);
  const { pathname } = router;
  const layoutName = pathname.split("/").pop();

  useEffect(() => {
    let currentSaveName;
    if (typeof window !== "undefined") {
      currentSaveName = localStorage.getItem("savename");
    }
    const newSaveName = JSON.stringify(layoutName);

    if (currentSaveName !== newSaveName && layoutName.length > 0) {
        if (typeof window !== "undefined") {
            localStorage.setItem("savename", newSaveName);
        }
    }

    // Trigger a refresh on the IframeView component
    const timer = setTimeout(() => {
      trigger((c) => !c);
    }, 500);
    return () => clearTimeout(timer);
  }, [location, layoutName]);

  const iframeSrc = useRef(`${codesandboxUrl}iframe`);
  return (
    <div className={`w-screen h-screen ${refresh}`}>
      <iframe
        id="iframe-id-2"
        className={``}
        width={"100%"}
        height={"100%"}
        title="iframe-2"
        src={iframeSrc.current}
      />
    </div>
  );
};

export default Full;
