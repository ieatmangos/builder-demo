import React from "react";

const FeatureV7 = () => {
  return (
    <div className="bg-black text-white md:py-xl">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 md:col-gap-sm lg:col-gap-lg mx-auto align-center p-0 md:px-sm">
        {/* <!--     <div className="w-full md:max-w-xl rounded-md bg-white"></div> --> */}
        <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden">
          <img
            className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt=""
          />
        </div>
        <div className="p-sm md:my-auto">
          <h4 className="font-black hds-title__medium mb-sm md:mb-md">
            Features
          </h4>
          <div className="flex mb-sm md:mb-md">
            <svg
              className="mr-xs"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 20C15.9706 20 20 15.9706 20 11H18C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C12.1118 4 13.1631 4.25921 14.0967 4.72049L15.4306 3.1643C14.1226 2.42313 12.6107 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM17.7433 7.66896C18.1128 7.25845 18.0795 6.62616 17.669 6.2567C17.2585 5.88725 16.6262 5.92053 16.2567 6.33104L10.6641 12.545L8.7094 10.5776C8.32014 10.1858 7.68698 10.1837 7.29519 10.573C6.9034 10.9622 6.90135 11.5954 7.2906 11.9872L9.99065 14.7048C10.1844 14.8998 10.4499 15.0065 10.7247 14.9997C10.9995 14.9929 11.2594 14.8733 11.4433 14.669L17.7433 7.66896Z"
                fill="white"
              />
            </svg>
            <div className="flex-1">
              <p className="mb-xs font-bold hds-copy">Feature</p>
              <p className="hds-copy leading-6">
                Since wire-frame renderings are relatively simple and fast and
                easy to calculate
              </p>
            </div>
          </div>
          <div className="flex mb-sm md:mb-md">
            <svg
              className="mr-xs"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 20C15.9706 20 20 15.9706 20 11H18C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C12.1118 4 13.1631 4.25921 14.0967 4.72049L15.4306 3.1643C14.1226 2.42313 12.6107 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM17.7433 7.66896C18.1128 7.25845 18.0795 6.62616 17.669 6.2567C17.2585 5.88725 16.6262 5.92053 16.2567 6.33104L10.6641 12.545L8.7094 10.5776C8.32014 10.1858 7.68698 10.1837 7.29519 10.573C6.9034 10.9622 6.90135 11.5954 7.2906 11.9872L9.99065 14.7048C10.1844 14.8998 10.4499 15.0065 10.7247 14.9997C10.9995 14.9929 11.2594 14.8733 11.4433 14.669L17.7433 7.66896Z"
                fill="white"
              />
            </svg>
            <div className="flex-1">
              <p className="mb-xs font-bold hds-copy">Feature</p>
              <p className="hds-copy leading-6">
                Since wire-frame renderings are relatively simple and fast and
                easy to calculate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureV7;
