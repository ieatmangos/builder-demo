import React, { useRef, useEffect, useState } from "react";
import { Layout } from "./Layout";

function RGBToHex(rgb) {
  if (rgb === "rgba(0, 0, 0, 0)") {
    return null;
  }
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  rgb = rgb
    .substr(4)
    .split(")")[0]
    .split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length === 1) r = "0" + r;
  if (g.length === 1) g = "0" + g;
  if (b.length === 1) b = "0" + b;

  return "#" + r + g + b;
}

const Color = ({ name, shades }) => {
  const [myHex, setMyHex] = useState("");
  const colorRef = useRef(null);
  useEffect(() => {
    const style = getComputedStyle(colorRef.current);
    let color = RGBToHex(style.backgroundColor);
    if (color) {
      setMyHex(color);
    }
  }, [colorRef]);
  return (
    <div className="min-h-full flex flex-col mr-sm ">
      <p className="uppercase">{`${name}`}</p>
      <p className="uppercase mb-xs">{`${myHex}`}</p>
      <div className="mb-xs">
        <p className="text-xs text-gray-500">{`${name}`}</p>
        <div ref={colorRef} className={`p-xs w-full bg-${name}`} />
      </div>
      {shades.map(shade => (
        <div key={`${name} ${shade}`} className="mb-xs">
          <p className="text-xs text-gray-500">{`${name}-${shade}`}</p>
          <div className={`p-xs w-full bg-${name}-${shade}`} />
        </div>
      ))}
    </div>
  );
};

export const Colors = () => {
  const data = {
    name: ["primary", "secondary", "tertiary", "dark", "highlight"],
    shades: ["lighter", "dark"]
  };

  return (
    <Layout name={"Colors"}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
        {data.name.map(name => (
          <Color key={name} name={name} shades={data.shades} />
        ))}
      </div>
    </Layout>
  );
};
