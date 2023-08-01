import PeopleSection from "@/components/our-team/OurTeam";
import React from "react";

const OurTeam = () => {
  return (
    <>
      <div className="mt-24 mb-4 md:mx-auto sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
          A Team of Visionaries
        </p>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
          Meet Our Dedicated Trustees
        </h2>
      </div>
      <PeopleSection />;
    </>
  );
};

export default OurTeam;

{/* <div className="text-center text-gray-500 dark:text-gray-400">
<Image
  width={image.width}
  height={image.height}
  className="mx-auto mb-4 w-36 h-36 rounded-full"
  src={image.src}
  alt={name}
/>
<h2 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
  <p>{name}</p>
</h2>
<p className="text-base text-gray-700">{role}</p>
<br />
<Link className="underline font-medium" href="/more">
  Read more
</Link>
</div> */}