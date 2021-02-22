import React, { useState, useEffect } from "react";
import { EditLayer1 } from "../../edit";
import Controls from "../../builder/controls";
import EditIframeGroup from "../../edit/EditIframeGroup";
import ChooseSections from "../../choose_sections/ChooseSections";
import { useRouter } from "next/router";

// Change when you fork the sandbox
export const codesandboxUrl = "http://localhost:3000/";

const Edit = () => {
    const router = useRouter()

  // const url = router.pathname.split("edit/").pop();
  const { slug } = router.query
  const shouldMakeVariants = !slug?false:slug.filter(i=> i==="variants").length>0;
  console.log(slug)
  const route = shouldMakeVariants ? `iframe/${slug}` : "iframe";
  const [iframeSrc, setIframeSrc] = useState(`${codesandboxUrl}${route}`);
  let saveName;
  if (typeof window !== "undefined") {
      saveName = JSON.parse(localStorage.getItem("savename")) || null;
}


  // Re render the iframe if you change layouts
  const [triggerIframe, setTrigger] = useState(false);
  useEffect(() => {
    if (document.getElementById("iframe-id")) {
      document.getElementById("iframe-id").src = document.getElementById(
        "iframe-id"
      ).src;
    }
  }, [triggerIframe]);

  // Re render the iframe if you navigate
  useEffect(() => {
    setIframeSrc(`${codesandboxUrl}${route}`);
  }, [router.pathname, setIframeSrc, route]);

  // Animations
  const [iframDelay, setIframeDelay] = useState(" opacity-0 ");
  useEffect(() => {
    const timer = setTimeout(() => {
      setIframeDelay(null);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  //

  const [chooseSectionsStatus, setChooseSectionsStatus] = useState(true);

  // If no layout is selected
  // if ((!saveName || saveName === "select to load") && !shouldMakeVariants) {
  //   return (
  //     <div className="pt-24">
  //       <Controls soloStyle setTrigger={setTrigger} />
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen w-full">
      <div className="flex w-full">

        {/* Side Bar / Input Drawers  */}
        <div className="h-screen max-h-screen overflow-hidden bg-sb-gray sticky top-0">
          <EditLayer1
            setChooseSectionsStatus={setChooseSectionsStatus}
            chooseSectionsStatus={chooseSectionsStatus}
            iframeSrc={iframeSrc}
            setIframeSrc={setIframeSrc}
          />
        </div>

        {/* Right Side */}
        {chooseSectionsStatus && shouldMakeVariants ? (
          <ChooseSections />
        ) : (
          <EditIframeGroup
            shouldMakeVariants={shouldMakeVariants}
            setTrigger={setTrigger}
            iframDelay={iframDelay}
            iframeSrc={iframeSrc}
          />
        )}
      </div>
    </div>
  );
};

export default Edit;
