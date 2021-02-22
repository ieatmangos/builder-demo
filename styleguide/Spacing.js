import React from "react";
import { Layout } from "./Layout";

export const Spacing = () => {
  return (
    <Layout name={"Spacing"}>
      <div className="inline-block">
        <span className="inline-block w-10 mx-xs pt-xxs px-xs bg-primary">
          &nbsp;
        </span>
        <span className="block">xxs</span>
      </div>
      <div className="inline-block">
        <span className="inline-block w-10 mx-xs pt-xs px-xs bg-primary">
          &nbsp;
        </span>
        <span className="block">xs</span>
      </div>
      <div className="inline-block">
        <span className="inline-block w-10 mx-xs pt-sm px-xs bg-primary">
          &nbsp;
        </span>
        <span className="block">sm</span>
      </div>
      <div className="inline-block">
        <span className="inline-block w-10 mx-xs pt-md px-xs bg-primary">
          &nbsp;
        </span>
        <span className="block">md</span>
      </div>
      <div className="inline-block">
        <span className="inline-block w-10 mx-xs pt-lg px-xs bg-primary">
          &nbsp;
        </span>
        <span className="block">lg</span>
      </div>
      <div className="inline-block">
        <span className="inline-block w-10 mx-xs pt-xl px-xs bg-primary">
          &nbsp;
        </span>
        <span className="block">xl</span>
      </div>
    </Layout>
  );
};
