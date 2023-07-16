import React from "react";
import Link from "next/link";
import Image from "next/image";
import FocusLock from "react-focus-lock";

const dropDownLinksAboutUs = [
  { id: 1, name: "Referral process", path: "/referrals", icon: "/icons/handshake.svg" },
  { id: 2, name: "Our supporters", path: "/our-supporters", icon: "/icons/heart-donation.svg" },
];

const dropDownLinksOurTeam = [
  { id: 1, name: "Trustees", path: "/trustees", icon: "/icons/love.svg" },
  { id: 2, name: "Volunteers", path: "/volunteers", icon: "/icons/friends.svg" },
];

let links;

export default function Dropdown({ id, itemProps }) {
  if (id === 1) {
    links = dropDownLinksAboutUs;
  } else {
    links = dropDownLinksOurTeam;
  }

  return (
    <div
      className="absolute top-[4.5rem] left-[-2rem] w-56 z-30 bg-white flex flex-col gap-4 justify-center items-start p-4 rounded-md shadow-md shadow-primary-clr"
      role="menu">
      {links.map(({ id, name, icon, path }) => {
        return (
          <Link
            key={id}
            {...itemProps[id - 1]}
            href={path}
            className="flex justify-between items-center gap-4 hover:text-primary-clr font-bold">
            <Image src={icon} width={30} height={30} alt="link icon" />
            {name}
          </Link>
        );
      })}
    </div>
  );
}
