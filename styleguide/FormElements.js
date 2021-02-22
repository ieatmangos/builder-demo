import React from "react";
import { Layout } from "./Layout";

const Element = ({ children, name }) => {
  return (
    <div className="my-sm ">
      <span className="text-xs block w-full text-gray-500 mb-xs uppercase">
        {name}
      </span>
      {children}
    </div>
  );
};

const QtySelector = () => {
  const [amount, setAmount] = React.useState(1);
  if (amount < 0) {
    setAmount(0);
  }
  return (
    <div className="grid grid-cols-3 mr-xs border border-gray-600 w-32">
      <button
        onClick={() => setAmount(c => c - 1)}
        className="flex justify-center items-center  "
      >
        &#8722;
      </button>
      <input
        readOnly
        value={amount}
        className="border-r border-l border-gray-600 py-2 px-1 text-center "
      />

      <button
        onClick={() => setAmount(c => c + 1)}
        className="flex justify-center items-center "
      >
        &#43;
      </button>
    </div>
  );
};

const Inputs = () => {
  return (
    <div>
      <p>Form Elements</p>
      <Element name={"Text Field"}>
        <input className="hds-form-input w-full" />
      </Element>
      <Element name={"Dropdown"}>
        <div className="hds-form-input">
          <select className="w-full">
            <option value="select">select</option>
          </select>
        </div>
      </Element>
      <Element>
        <p className="mb-xs">Quantity</p>
        <QtySelector />
      </Element>
      <Element name={"Search"}>
        <div className="hds-form-input flex justify-between items-center">
          <input className="w-full" placeholder="search" />
          <span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 9C14 11.7614 11.7614 14 9 14C6.23858 14 4 11.7614 4 9C4 6.23858 6.23858 4 9 4C11.7614 4 14 6.23858 14 9ZM12.9307 14.793C11.8102 15.5548 10.4571 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 10.6849 15.4047 12.2307 14.413 13.4387L19.6757 18.2628C20.0828 18.636 20.1103 19.2686 19.7372 19.6757C19.364 20.0828 18.7314 20.1103 18.3243 19.7372L12.9307 14.793Z"
                fill="#1B202B"
              />
            </svg>
          </span>
        </div>
      </Element>
      <Element name={"Text Area"}>
        <textarea className="hds-form-input w-full" />
      </Element>
    </div>
  );
};

const Swatches = () => {
  const sizes = ["xs", "s", "m", "l", "xl", "xxl"];
  const colors = [
    "red-500",
    "gray-500",
    "blue-500",
    "gray-900",
    "green-500",
    "yellow-500"
  ];
  return (
    <div className="p-sm my-sm">
      <p className="mb-xs">Swatches</p>
      <div className="mb-sm grid gap-xs">
        {sizes.map(size => (
          <button key={size} className="p-xs row-start-1 border">{size}</button>
        ))}
      </div>
      <div className="grid gap-xs grid-cols-3 lg:grid-cols-6">
        {colors.map(color => (
          <div key={color} className="">
            <button className={`p-sm w-full  bg-${color} `} />
            <p className="text-xs text-gray-500">{color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Buttons = () => {
  return (
    <div>
      <div className="px-sm">
        <p>BUTTONS LARGE</p>
        <div className="grid grid-cols-2 gap-4 ">
          <Element name={"primary fill"}>
            <button className="hds-btn hds-btn__primary">Submit</button>
          </Element>
          <Element name={"primary hollow"}>
            <button className="hds-btn hds-btn__primary-hollow">Submit</button>
          </Element>
          <Element name={"secondary fill"}>
            <button className="hds-btn hds-btn__secondary">Submit</button>
          </Element>
          <Element name={"secondary hollow"}>
            <button className="hds-btn hds-btn__secondary-hollow">
              Submit
            </button>
          </Element>
        </div>
      </div>

      <div className="px-sm">
        <p>BUTTONS SMALL</p>
        <div className="grid grid-cols-2 gap-4 ">
          <Element name={"primary fill"}>
            <button className="hds-btn__small hds-btn__primary">Submit</button>
          </Element>
          <Element name={"primary hollow"}>
            <button className="hds-btn__small hds-btn__primary-hollow">Submit</button>
          </Element>
          <Element name={"secondary fill"}>
            <button className="hds-btn__small hds-btn__secondary">Submit</button>
          </Element>
          <Element name={"secondary hollow"}>
            <button className="hds-btn__small hds-btn__secondary-hollow">
              Submit
            </button>
          </Element>
        </div>
      </div>

      <div className="bg-black text-white p-sm pb-0">
        <div className="">
          <p>LIGHT BUTTONS LARGE</p>
          <div className="grid grid-cols-2 gap-4">
            <Element name={"light fill"}>
              <button className="hds-btn hds-btn__light">Submit</button>
            </Element>
            <Element name={"light hollow"}>
              <button className="hds-btn hds-btn__light-hollow">Submit</button>
            </Element>
          </div>
        </div>

        <div className="">
          <p>LIGHT BUTTONS SMALL</p>
          <div className="grid grid-cols-2 gap-4">
            <Element name={"light fill"}>
              <button className="hds-btn__small hds-btn__light">Submit</button>
            </Element>
            <Element name={"light hollow"}>
              <button className="hds-btn__small hds-btn__light-hollow">Submit</button>
            </Element>
          </div>
        </div>

      </div>
    </div>
  );
};

export const FormElements = () => {
  return (
    <Layout name="Form Elements">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-4/12 mr-sm xl:mr-md">
          <Inputs />
        </div>
        <div className="flex-1 mx-auto">
          <Buttons />
          <Swatches />
        </div>
      </div>
    </Layout>
  );
};
