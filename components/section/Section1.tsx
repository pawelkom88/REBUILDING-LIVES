import React from "react";

export default function Section1() {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <h2 className="text-2xl font-bold sm:text-5xl text-center my-12">Section 2</h2>
      <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
            Heading
          </h2>
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus ipsum
            corporis, quis consequuntur laboriosam unde quidem ut veritatis commodi vitae fugit
            facilis? Odit nesciunt autem dicta facilis quod necessitatibus, aliquam eligendi, culpa
            sapiente eum sed sit architecto, iure doloribus sequi id pariatur. Tenetur dolor atque
            delectus, enim omnis modi!
          </p>
          <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">
            Learn More
          </a>
        </div>
        <div className="w-full h-full py-48 bg-gray-200" />
      </div>
      <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-none md:order-2">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
            Heading
          </h2>
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus ipsum
            corporis, quis consequuntur laboriosam unde quidem ut veritatis commodi vitae fugit
            facilis? Odit nesciunt autem dicta facilis quod necessitatibus, aliquam eligendi, culpa
            sapiente eum sed sit architecto, iure doloribus sequi id pariatur. Tenetur dolor atque
            delectus, enim omnis modi!
          </p>
          <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">
            Learn More
          </a>
        </div>
        <div className="w-full h-full py-48 bg-gray-200" />
      </div>
    </section>
  );
}
