import Image from "next/image";
import logo from "@/public/images/logo-rebulding-lives.webp";
import FAQ from "./FAQ";

const menuItems = [
  {
    id: 1,
    heading: "How can we help ?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    links: [
      {id:1, name: 'link', path: ''},
      {id:2, name: 'link', path: ''},
      {id:3, name: 'link', path: ''},
    ]
  },
  {
    id: 2,
    heading: "Support us",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    links: [
      {id:1, name: 'link', path: ''},
      {id:2, name: 'link', path: ''},
      {id:3, name: 'link', path: ''},
    ]
  },
];

export default function Menu({ isOpen, setIsOpen }) {
  const transition = isOpen ? "opacity-100" : "opacity-0 ";
  return (
    <>
      <div
        aria-label="navigation"
        className={`fixed inset-0 z-40 w-full bg-white ${transition} ease [transition:opacity_700ms,visibility_700ms] border-2 border-primary-clr`}>
        <Image
          className="mx-auto mt-4 lg:my-0"
          src={logo}
          width={180}
          height={40}
          alt="RBLUK logo"
        />
        <nav id="menuItems" aria-label="navigation" className="relative z-20 h-full w-full text-md">
          {/* loop */}
          <hr className="mx-auto w-3/4 my-8 border-gray-900" />

          {/* FAQ */}
          <div className="space-y-4">
            {menuItems.map(menuItem => {
              return <FAQ key={menuItem.id} menuContent={menuItem} />;
            })}
          </div>
          <hr className="mx-auto w-3/4 mt-12 border-gray-900" />

          {/* SOCIAL MEDIA */}

          <ul className="mt-2 items-center gap-4 flex justify-center">
            <li>
              <span className="sr-only">F</span>
              <a rel="noopener" target="_blank" href=''>
                social media icon
              </a>
            </li>
            <li>
              <span className="sr-only">F</span>
              <a rel="noopener" target="_blank" href=''>
                social media icon
              </a>
            </li>
          </ul>

        </nav>
      </div>
      {isOpen && (
        <button
          className="fixed bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 transform z-40 bg-primary-clr text-white uppercase px-4 py-2"
          type="button"
          onClick={() => setIsOpen(false)}>
          close
          <span className="sr-only">Close Mobile Menu</span>
        </button>
      )}
    </>
  );
}
