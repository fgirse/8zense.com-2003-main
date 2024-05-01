"use client";

"use client";

import { headerLinks } from "../../constants/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropDown from "./StaggereDropDown";
import DropDownHome from "./StaggereDropDownHome";
//import MobileNavi from"@/components/share/MobileNavi";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="mx-auto">
        <DropDownHome />
      </div>
      <ul className="md:flex-around flex w-full flex-col justify-start items-center md:justify-around md:flex-row">
        {headerLinks.map((link) => {
          const isActive = pathname === link.route;

          return (
            <>
              <li
                key={link.route}
                className={`${
                  isActive && "text-zenseGray"
                } font-sans py-1 px-1 rounded-lg bg-zinc-700/5  text-slate-200 hover:bg-red-900 hover:border-2 font-black uppercase text-4xl text-left flex-center p-2 whitespace-nowrap md:text-lg lg:mr-5 lg:text-2xl 2xl:text-3xl`}
              >
                <Link href={link.route}>{link.label}</Link>
              </li>
            </>
          );
        })}
      </ul>
      <div className="mx-auto text-xl">
        <DropDown />
      </div>
    </>
  );
};

export default NavItems;
