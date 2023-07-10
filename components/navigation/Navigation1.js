"use client";
import { useState } from "react";
import Link from "next/link";
import { Fragment } from "react";
import Dropdown from "./Dropdown";
import DropdownIcon from "./DropdownIcon";

const navLinks = [
  {
    id: 1,
    name: "About us",
    hasDropDown: true,
    path: "",
    hasIcon: true,
  },
  {
    id: 2,
    name: "Our team",
    hasDropDown: true,
    path: "",
    hasIcon: true,
  },
  {
    id: 3,
    name: "Survivor stories",
    hasDropDown: false,
    path: "/survivor-stories",
    hasIcon: false,
  },
  {
    id: 4,
    name: "Support us",
    hasDropDown: false,
    path: "/support-us",
    hasIcon: false,
  },
  {
    id: 5,
    name: "Latest News and Media",
    hasDropDown: false,
    path: "/latest-news-and-media",
    hasIcon: false,
  },
];

export default function Navigation() {
  const [selectedLinkId, setSelectedLinkId] = useState(null);

  return (
    <header className="h-[80px] flex justify-center items-center z-50 w-full bg-white text-md py-3 md:py-0">
      <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>LOGO HERE</div>

          <div className="hidden lg:flex justify-between items-center">
            {navLinks.map(({ id, name, path, hasDropDown, hasIcon }) => {
              const isDropdownOpen = hasDropDown && id === selectedLinkId;

              return (
                <Fragment key={id}>
                  <Link
                    onClick={() => setSelectedLinkId(id)}
                    href={path}
                    className="hover:text-primary-clr relative flex items-center justify-between text-md  md:px-7">
                    {name}
                    {hasIcon && <DropdownIcon iconType={id === selectedLinkId} />}
                  </Link>
                  {isDropdownOpen && <Dropdown id={id} />}
                </Fragment>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
