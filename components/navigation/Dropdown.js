import React from "react";
import Link from "next/link";
import Image from "next/image";

const dropDownLinksAboutUs = [
  { id: 1, name: "Referral process", path: "/referrals", icon: "/icons/handshake.svg" },
  { id: 2, name: "Our supporters", path: "/our-supporters", icon: "/icons/heart-donation.svg" },
];

const dropDownLinksOurTeam = [
  { id: 1, name: "Trustees", path: "/trustees", icon: "/icons/love.svg" },
  { id: 2, name: "Volunteers", path: "/volunteers", icon: "/icons/friends.svg" },
];

let links;

export default function Dropdown({ id }) {
  if (id === 1) {
    links = dropDownLinksAboutUs;
  } else {
    links = dropDownLinksOurTeam;
  }

  return (
    <div
      className="visible absolute top-24 z-30 bg-white flex flex-col gap-4 justify-center items-start p-4 rounded-md shadow-md shadow-primary-clr"
      role="menu">
      {links.map(({ id, name, icon, path }) => {
        return (
          <Link
            className="flex justify-between items-center gap-4 hover:text-primary-clr font-bold"
            key={id}
            href={path}>
            {/* <Image src={icon} width={30} height={30} alt="link icon" /> */}
            {name}
          </Link>
        );
      })}
    </div>
  );
}
