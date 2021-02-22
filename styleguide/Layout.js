import React from "react";

export const Layout = ({ children, name }) => {
  return (
    <section id={name} className="w-full text-left bg-white py-6 px-4 md:px-10 lg:px-24 font-sans text-gray-900 ">
      <span className="block border-b-2 text-xl font-bold my-4 pb-2 font-sbBody uppercase">{name}</span>
      {children}
    </section>
  );
};
