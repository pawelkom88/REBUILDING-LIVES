"use client";
import Link from "next/link";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import { useState, Fragment } from "react";
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
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(2);

  return (
    <header className="h-[80px] flex justify-center items-center z-50 w-full bg-white text-md py-3 md:py-0">
      <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>LOGO HERE</div>

          <div className="hidden lg:flex justify-between items-center">
            {navLinks.map(({ id, name, path, hasDropDown, hasIcon }) => {
              return (
                <Fragment key={id}>
                  <Link
                    href={path}
                    onMouseDown={() => setSelectedLinkId(id)}
                    {...(hasDropDown && buttonProps)}
                    className="hover:text-primary-clr relative flex items-center justify-between text-md  md:px-7">
                    {name}

                    {hasIcon && <DropdownIcon iconType={isOpen && id === selectedLinkId} />}

                    {id === selectedLinkId && (
                      <Dropdown id={id} isOpen={isOpen} itemProps={itemProps} />
                    )}
                  </Link>
                </Fragment>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
