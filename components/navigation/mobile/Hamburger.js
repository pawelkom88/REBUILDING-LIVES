import { useState } from "react";
import Menu from "./Menu";

const genericHamburgerLine =
  "h-[3px] w-6 my-[2px] bg-gray-900 transition ease transform duration-300";

export default function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open Menu"
        aria-controls="menuItems"
        aria-expanded={isMenuOpen ? "true" : "false"}
        title="Open Menu"
        className="flex h-12 w-12 flex-col items-center justify-center rounded-full pt-2 mr-2 lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen && "translate-y-[8px] rotate-45 opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen && "-translate-y-[-1px] -rotate-45 opacity-100"
          }`}
        />
        <small
          className={`${
            isMenuOpen ? "opacity-0" : "opacity-100"
          } text-gray-900 transition-opacity duration-200 ease-in-out`}>
          menu
        </small>
      </button>
      {isMenuOpen ? <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} /> : null}
    </>
  );
}
