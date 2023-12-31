import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <section>
       <h2 className="text-2xl font-bold sm:text-5xl text-center my-12">Section 3</h2>
      {/* Testimonials */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
          <div className="hidden md:block mb-24 md:mb-0 sm:px-6">
            <div className="relative">
              <Image
                width={600}
                height={800}
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=500&h=600&q=80"
                alt="Image Description"
              />
              {/* SVG Element */}
            </div>
          </div>
          {/* End Col */}
          <div>
            {/* Blockquote */}
            <blockquote className="relative">
              <svg
                className="absolute top-0 left-0 transform -translate-x-8 -translate-y-4 h-24 w-24 text-gray-200 dark:text-gray-700"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"
                />
              </svg>
              <div className="relative z-10">
                <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-gray-200">
                  Survivor stories
                </p>
                <p className="text-xl font-medium italic text-gray-800 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-gray-200">
                  I have suffered horrific abuse now for many years. But it didn’t start off that
                  way, for the first 6 months I couldn’t believe my luck, I thought I had found
                  love.
                </p>
              </div>
              <footer className="mt-6">
                <div className="flex items-center">
                  <div className="md:hidden flex-shrink-0">
                    <Image
                      width={50}
                      height={50}
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="ml-4 md:ml-0">
                    <div className="text-base font-semibold text-gray-800 dark:text-gray-200">
                      Nicole Grazioso
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Builder</div>
                  </div>
                </div>
              </footer>
              <div className="mt-8 lg:mt-14">
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm lg:p-4 dark:focus-visible:ring-offset-gray-800"
                  href="#">
                  Read the story
                </a>
              </div>
            </blockquote>
            {/* End Blockquote */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Testimonials */}
    </section>
  );
}
