"use client";
import Link from "next/link";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import { useState } from "react";
import Dropdown from "./Dropdown";
import DropdownIcon from "./DropdownIcon";
import { navLinks } from "./links";
import Hamburger from "./mobile/Hamburger";
import logo from "@/public/images/RBLUK-Logo.png";
import Image from "next/image";

const commonStyles = "relative flex items-center justify-between text-md md:px-7";

export default function Navigation() {
  const [selectedLinkId, setSelectedLinkId] = useState(null);
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(2);

  return (
    <header className="lg:h-[80px] flex justify-center items-center z-50 w-full bg-white text-md lg:py-3 py-1 md:py-0">
      <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Image className="mt-2 lg:my-0" src={logo} width={50} height={40} alt="RBLUK logo" />

          <div className="hidden lg:flex justify-between items-center">
            {navLinks.map(({ id, name, path, hasDropDown }) => {
              const isMatch = id === selectedLinkId;

              return hasDropDown ? (
                <button
                  key={id}
                  {...buttonProps}
                  onMouseDown={() => setSelectedLinkId(id)}
                  onKeyDownCapture={() => setSelectedLinkId(id)}
                  className={commonStyles}>
                  {name}
                  <DropdownIcon iconType={isMatch} />

                  {isOpen && isMatch && <Dropdown id={id} itemProps={itemProps} />}
                </button>
              ) : (
                <Link key={id} href={path} className={`hover:text-primary-clr ${commonStyles}`}>
                  {name}
                </Link>
              );
            })}
          </div>
          <Hamburger />
        </div>
      </nav>
    </header>
  );
}
