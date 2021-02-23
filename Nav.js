/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { sbLogoWhite } from "./assets";
// import "./App.css";
import Link from "next/link";
import { useRouter } from "next/router";

const LinkElement = ({ href, icon, displayName, selected, setSelected }) => {

  return (
    <Link className="" href={`/${href}`} key={href}>
      <li
        onClick={() => setSelected(href)}
        className={`cursor-pointer py-4 px-2 hover:bg-sb-lightgray  border-t border-sb-gray w-full text-white  uppercase ${
          selected === href ? "bg-sb-gray" : "bg-sb-black"
        }
      `}
      >
        <img
          className="mx-auto w-6"
          src={`/images/sb-brand/${icon}.svg`}
          alt={href}
        />
        {displayName ? displayName : href}
      </li>
    </Link>
  );
};

const Nav = () => {
  const router = useRouter();
  const { slug } = router;
  const _path = router.pathname.split("/");

  const [selected, setSelected] = useState("");

  const path = _path.length < 1 ? "home" : _path;
  useEffect(() => {
    let mounted = true
    if(mounted){
   
      setSelected(path[1])
      console.log('Go')
      console.log(path)
    }
    mounted = false
  }, [path])

  if (path.includes("full") || path.includes("iframe")) {
    return null;
  }
  return (
    <div className="font-sbHeading relative h-screen bg-sb-black sticky top-0  ">
      <div style={{ fontSize: "10px" }} className="">
        <div className="py-4 px-2 flex justify-center">
          <Link href={`/`}>
            <img
              className="w-12"
              src="/images/sb-brand/sb-logo-white.svg"
              alt="logo"
            />
          </Link>
        </div>
        <ul className="text-center">
          <LinkElement
            setSelected={setSelected}
            selected={selected}
            icon={"home"}
            path={path}
            href={""}
            displayName={"Home"}
          />
          <LinkElement
            setSelected={setSelected}
            selected={selected}
            icon={"styleguide"}
            slug={slug}
            path={path}
            href={"styleguide"}
          />
          <LinkElement
            setSelected={setSelected}
            selected={selected}
            icon={"edit"}
            path={path}
            href={"edit/variants"}
            displayName={"Sections"}
          />
          <LinkElement
            setSelected={setSelected}
            selected={selected}
            icon={"layouts"}
            path={path}
            href={"layouts"}
          />
          <LinkElement
            setSelected={setSelected}
            selected={selected}
            icon={"edit"}
            path={path}
            href={"edit"}
          />
        </ul>
      </div>
      <div
        style={{ writingMode: "vertical-lr" }}
        className="transform rotate-180 ml-3 mb-3 absolute bottom-0  text-white text-md  uppercase whitespace-no-wrap	"
      >
        <p>Starting Block</p>
        <p>Project Name Here</p>
      </div>
    </div>
  );
};

export default Nav;
