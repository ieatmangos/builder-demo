import React from "react";
import { Layout } from "./Layout";

export const Typography = () => {
  return (
    <Layout name="Typography">
      <div className="grid grid-cols-2 gap-sm md:gap-md lg:gap-lg">
        <div className="font-sans">
          <p className="font-bold uppercase">
            Heading <span className="font-normal">- Roboto</span>
          </p>
          <div className="my-md">
            <span className="text-gray-500">extra small | legal copy</span>
            <p className="hds-legal font-normal">
              Try something totally different and cool right now.
            </p>
          </div>

          <div className="my-md">
            <span className="text-gray-500">small | body copy</span>
            <p className="hds-copy font-normal">
              Try something totally different and cool right now.
            </p>
          </div>
          <div className="my-md">
            <span className="text-gray-500">small | small title</span>
            <p className="hds-title__small font-black">
              Try something totally different and cool right now.
            </p>
          </div>
          <div className="my-md">
            <span className="text-gray-500">medium | medium titles</span>
            <h4 className="hds-title__medium font-black ">
              Try something totally different and cool right now.
            </h4>
          </div>
          <div className="my-md ">
            <span className="text-gray-500">large | large titles</span>
            <h4 className="hds-title__large font-black ">
              Try something totally different and cool right now.
            </h4>
          </div>

        </div>

        <div className="font-lato">
          <p className="font-bold uppercase">
            Paragraph <span className="font-normal">- Lato</span>
          </p>
          <div className="my-md">
            <span className="text-gray-500">extra small | legal copy</span>
            <p className="hds-legal font-normal">
              Try something totally different and cool right now.
            </p>
          </div>


          <div className="my-md">
            <span className="text-gray-500">small | body copy</span>
            <p className="hds-copy font-normal">
              Try something totally different and cool right now.
            </p>
          </div>

          <div className="my-md">
            <span className="text-gray-500">small | small title</span>
            <p className="hds-title__small font-black">
              Try something totally different and cool right now.
            </p>
          </div>
          <div className="my-md">
            <span className="text-gray-500">medium | medium titles</span>
            <h4 className="hds-title__medium font-black ">
              Try something totally different and cool right now.
            </h4>
          </div>
          <div className="my-sm ">
            <span className="text-gray-500">large | large titles</span>
            <h4 className="hds-title__large font-black ">
              Try something totally different and cool right now.
            </h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};
