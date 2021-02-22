import React from "react";

const FeatureV5 = () => {
  return (
    <div className="w-full mx-auto p-8 md:pl-0 md:py-md lg:py-xl bg-white text-primary">
      <div className="mx-auto grid md:grid-cols-2 md:gap-md lg:gap-lg">
        {/* <!--         <div className="w-full max-w-3xl ml-auto bg-black rounded-md mb-sm"></div> --> */}
        <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden">
          <img
            className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt=""
          />
        </div>
        <div className="max-w-md lg:mt-md">
          <p className="hds-title__small leading-8 mb-sm">
            Modern design incorporates
          </p>
          <h3 className="font-black hds-title__medium mb-sm md:mb-md">
            It is difficult for designers to assess how closely the wireframe
            needs to depict actual
          </h3>
          <div className="w-full flex flex-wrap">
            <button
              className="mr-sm mb-sm hds-btn border-primary text-primary border-2 hover:bg-primary hover:text-white"
              type="button"
            >
              Button
            </button>
            <button className="mb-sm hds-btn hds-btn__primary" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureV5;
