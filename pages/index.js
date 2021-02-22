/* eslint-disable no-unused-vars */
import React from "react";
// import { sbLogoTextBlack } from "../assets";
// import { layouts, styleguide } from "../builder/assets";
import Link from "next/link";
import { useLayouts } from "../hooks";

const selectALayout = (e) => {
  localStorage.setItem("savename", JSON.stringify(e));
};

// Child
const ApprovedLayouts = () => {
  const { allLayouts } = useLayouts();

  const hydrated =
    allLayouts.length > 0 && allLayouts !== null && allLayouts !== undefined;

  return (
    <div className="w-full text-md">
      <h3
        style={{
          letterSpacing: "0.07em",
          lineHeight: "29px",
          fontWeight: "500",
        }}
        className="font-sbHeading font-medium text-lg border-b border-gray-600 py-4 md:px-2 lg:px-8"
      >
        APPROVED LAYOUTS
      </h3>
      {!hydrated ? (
        <div className="py-4">
          <p className="mb-8">You currently don't have any pages built out.</p>
          <ol>
            <li className="py-2">
              Build out your <span className="font-bold"> Style Guide </span>
            </li>
            <li className="py-2">
              Choose which sections you'd like to be in your project.
            </li>
            <li className="py-2">
              Click <span className="font-bold">'Build New Page'</span> to get
              started
            </li>
          </ol>
        </div>
      ) : (
        allLayouts.map((i) => {
          return (
            <div
              key={i}
              className="flex w-full  justify-between border-b border-gray-600 py-4 md:px-2 lg:px-8"
            >
              <Link href="/layouts">
                <button
                  onClick={() => selectALayout(i[0])}
                  style={{ lineHeight: "19px" }}
                >
                  {i[0]}
                </button>
              </Link>
              <div>
                <Link href={`/full/${encodeURIComponent(i[0])}`}>
                  <button
                    style={{
                      lineHeight: "14px",
                      fontWeight: "500",
                      letterSpacing: "1px",
                    }}
                    onClick={() => selectALayout(i[0])}
                    className=" text-xs mr-2 p-2 hover:text-gray-600 text-sb-teal"
                  >
                    VIEW
                  </button>
                </Link>
                <Link href="/layouts">
                  <button
                    style={{
                      lineHeight: "14px",
                      fontWeight: "500",
                      letterSpacing: "1px",
                    }}
                    onClick={() => selectALayout(i[0])}
                    className=" text-xs mr-2 p-2 hover:text-gray-600 text-sb-teal"
                  >
                    EDIT
                  </button>
                </Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

// Parent
const Home = () => {
  return (
    <div
      style={{ backgroundColor: "#f0f2f4" }}
      className="text-sb-textColor font-sbBody min-h-screen w-full"
    >
      <div className="bg-white">
        <img src="/images/sb-brand/sb-logo-text-black.svg" alt="logo" className="mx-auto py-12 max-w-md" />
        <p
          style={{ lineHeight: "30px", letterSpacing: "0.225em" }}
          className="font-sbHeading text-xl max-w-lg mx-auto text-center uppercase pb-8"
        >
          Client and project name
        </p>
      </div>

      <div className="py-4 mt-4 grid md:grid-cols-2">
        <div className="">
          <div className="w-full px-8 md:px-0 md:w-10/12  lg:w-9/12 xl:w-8/12 mx-auto grid grid-cols-2 gap-4 mt-8">
            <Link href="/styleguide">
              <div
                role="button"
                className="py-8 px-2 bg-sb-blue active:opacity-75 items-center flex flex-col rounded-md"
              >
                <img width="89px" src='/images/sb-brand/styleguide.svg' alt="Builder" />
                <p
                  style={{ lineHeight: "14px", letterSpacing: "1px" }}
                  className="mt-2 text-white uppercase text-xs font-medium"
                >
                  View Styleguide <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </Link>

            <Link href="/layouts" onClick={() => selectALayout([])}>
              <div
                role="button"
                className="py-8 px-2 bg-sb-blue active:opacity-75 items-center flex flex-col rounded-md"
              >
                <img width="89px" src="/images/sb-brand/layouts.svg" alt="Builder" />
                <p
                  style={{
                    lineHeight: "14px",
                    fontWeight: "500px",
                    letterSpacing: "1px",
                  }}
                  className="mt-2 text-white uppercase text-xs"
                >
                  Build Pages <span className="ml-1">&rarr;</span>
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="md:mr-16 px-8 md:px-0 mt-8 md:mt-2 ">
          <ApprovedLayouts />
        </div>
      </div>
    </div>
  );
};

export default Home;
