import React from "react";

const FeatureV6 = () => {
  return (
    <div className="relative w-screen md:h-full py-sm sm:py-md md:py-lg xl:py-xl">
      {/* <!-- Slider --> */}
      <div className="hide-scrollbar overflow-scroll xl:max-w-6xl mx-auto rounded-md">
        <div className="whitespace-no-wrap ">
          <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden inline-block w-9/12 md:w-1/2 xl:w-full mx-xs md:mx-sm ml-sm">
            <img
              className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
          <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden inline-block w-9/12 md:w-1/2 xl:w-full mx-xs md:mx-sm ml-sm">
            <img
              className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
          <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden inline-block w-9/12 md:w-1/2 xl:w-full mx-xs md:mx-sm ml-0">
            <img
              className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
          {/* <!--         <div className="image rounded-md inline-block bg-black w-9/12 md:w-1/2 xl:w-full mx-2 md:mx-4 ml-8 md:ml-8"></div>
        <div className="image H-64 rounded-md inline-block bg-black w-9/12 md:w-1/2 xl:w-full mx-2 md:mx-4"></div>
        <div className="image rounded-md inline-block bg-black w-9/12 md:w-1/2 xl:w-full mx-2 md:mx-4 mr-8 md:mr-8"></div> --> */}
        </div>
      </div>
      {/* <!-- Below --> */}
      <svg
        className="mx-auto mt-sm"
        width="56"
        height="8"
        viewBox="0 0 56 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
          fill="#1B202B"
        />
        <path
          d="M31.5 4C31.5 5.933 29.933 7.5 28 7.5C26.067 7.5 24.5 5.933 24.5 4C24.5 2.067 26.067 0.5 28 0.5C29.933 0.5 31.5 2.067 31.5 4Z"
          stroke="#DBDEE7"
        />
        <path
          d="M55.5 4C55.5 5.933 53.933 7.5 52 7.5C50.067 7.5 48.5 5.933 48.5 4C48.5 2.067 50.067 0.5 52 0.5C53.933 0.5 55.5 2.067 55.5 4Z"
          stroke="#DBDEE7"
        />
      </svg>
      <div className="max-w-2xl xl:max-w-6xl mx-auto mt-sm px-sm flex justify-evenly flex-wrap text-primary">
        <div className="xl:max-w-xs p-sm">
          <button className="no-border hds-copy font-bold leading-8 mb-sm">
            View more
          </button>
          <div className="leading-8 hds-copy">
            The navigation design should communicate the relationship between
            the links it contains so that users understand the options they have
            for navigating the site.{" "}
          </div>
        </div>
        <div className="invisible xl:visible xl:max-w-xs p-sm opacity-50">
          <button className="no-border hds-copy font-bold leading-8 mb-sm">
            View more
          </button>
          <div className="leading-8 hds-copy ">
            The navigation design should communicate the relationship between
            the links it contains so that users understand the options they have
            for navigating the site.{" "}
          </div>
        </div>
        <div className="invisible xl:visible  xl:max-w-xs p-sm opacity-50">
          <button className="no-border hds-copy font-bold leading-8 mb-sm">
            View more
          </button>
          <div className="leading-8 hds-copy ">
            The navigation design should communicate the relationship between
            the links it contains so that users understand the options they have
            for navigating the site.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureV6;
