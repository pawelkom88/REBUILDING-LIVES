"use client";
import DonateBox from "@/components/donate-box/DonateBox";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative lg:h-[calc(100vh-80px)]">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      {isPlaying ? (
        <video
          onEnded={() => setIsPlaying(false)}
          preload="metadata"
          autoPlay
          poster="/images/video-poster.webp"
          muted
          className="absolute inset-0 object-cover w-full h-full">
          <source src="/video/main-video.mp4" type="video/mp4" />
          {/* <source src="movie.ogg" type="video/ogg"> */}
          {/* <source src="/media/cc0-videos/flower.webm" type="video/webm"> */}
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          className="absolute inset-0 object-cover w-full h-full fade-in-on-mount"
          width={1920}
          height={1080}
          src="/images/111.jpg"
          alt="hero-bg"
        />
      )}

      {/* components!!! */}

      <div className="relative h-full z-20 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 ">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-rose-500">
            Rebuilding Lives UK
            <strong className="block text-white mt-2">
              Supporting Survivors of Domestic Abuse
            </strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            Rebuilding Lives UK empowers survivors of domestic abuse on the road to recovery by
            helping them with emotional support, home maintenance, security and repair
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-dashed focus:ring focus:ring-white active:bg-rose-500 sm:w-auto">
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-dashed focus:ring focus:ring-white active:text-rose-500 sm:w-auto">
              Join the team
            </a>
          </div>
        </div>
        <div className="h-[600px] w-[450px] hidden xl:flex justify-center items-center">
          <DonateBox />
        </div>
      </div>
    </section>
  );
}
