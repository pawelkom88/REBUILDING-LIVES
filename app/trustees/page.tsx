import PeopleSection from "@/components/our-team/OurTeam";
import React from "react";

const OurTeam = () => {
  return (
    <>
      <div className="mt-24 mb-4 md:mx-auto sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
          Trustees
        </p>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
          Welcome our talented team of professionals
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem
          aperiam, eaque ipsa quae.
        </p>
      </div>
      <PeopleSection />;
    </>
  );
};

export default OurTeam;
