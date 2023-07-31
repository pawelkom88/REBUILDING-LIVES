import Image from "next/image";
import React from "react";

const logos = [
  "../images/logos/8.svg",
  "../images/logos/2.svg",
  "../images/logos/3.svg",
  "../images/logos/4.svg",
  "../images/logos/5.svg",
  "../images/logos/6.svg",
];

const Partners = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="mx-auto">
          <div className="grid grid-cols-2 gap-0.5 md:grid-cols-6">
            {logos.map((logoPath, index) => (
              <div key={index} className="flex justify-center col-span-1 px-8">
                <Image
                  width={200}
                  height={200}
                  className="max-h-12"
                  src={logoPath}
                  alt={`logo-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
