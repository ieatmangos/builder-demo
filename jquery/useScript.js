import  { useEffect } from "react";

const useScript = (resourceUrl, delay=300) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = resourceUrl;
    const timer = setTimeout(()=>{
      script.async = true;
      document.body.appendChild(script);
    },delay)
    return () => {
      clearTimeout(timer)
      // document.body.removeChild(script);
    };
  }, [resourceUrl, delay]);

};
export default useScript;


