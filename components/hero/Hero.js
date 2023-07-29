"use client";
import DonateBox from "@/components/donate-box/DonateBox";
import Image from "next/image";
import { useState } from "react";
import piggyBank from "@/public/icons/piggy-bank.svg";
import chat from "@/public/icons/chat.svg";
import Link from "next/link";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showDonationBox, setShowDonationBox] = useState(false);

  return (
    <section className="relative h-[calc(100vh-63px)] lg:h-[calc(100vh-80px)]">
      {!showDonationBox && (
        <div className="lg:hidden absolute z-30 w-full h-12 bg-transparent p-2 flex gap-2">
          <button
            onClick={() => setShowDonationBox(true)}
            className="h-full w-full bg-white rounded flex gap-2 items-center justify-center py-[1.3rem]">
            <Image src={piggyBank} width={27} height={27} alt="piggy bank icon" />
            <strong className="uppercase text-sm text-primary-clr">donate</strong>
          </button>

          <button className="h-full w-full bg-primary-clr rounded flex gap-2 items-center justify-center py-[1.3rem]">
            <Image src={chat} width={27} height={27} alt="piggy bank icon" />
            <strong className="uppercase text-sm text-white">contact us</strong>
          </button>
        </div>
      )}
      {/* COMPONENT */}

      <div className="absolute inset-0 bg-black/70 z-10"></div>
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

      <div className="relative h-full z-20 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex items-center justify-between lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-primary-clr">
            Rebuilding Lives UK
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            Rebuilding Lives UK empowers survivors of domestic abuse on the road to recovery by
            providing practical support including home maintainence, security and repair.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="#"
              className="block w-full rounded bg-primary-clr px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-primary-clr focus:outline-dashed focus:ring focus:ring-white active:bg-primary-clr sm:w-auto">
              Get Started
            </Link>

            <Link
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary-clr shadow hover:bg-primary-clr hover:text-white focus:outline-dashed focus:ring focus:ring-white active:text-primary-clr sm:w-auto">
              Join the team
            </Link>
          </div>
        </div>
        {showDonationBox && (
          <DonateBox
            showClosebtn={showDonationBox}
            onCloseDonationBox={setShowDonationBox}
            styles={"fixed inset-0 z-40"}
          />
        )}
        <div className="h-[600px] w-[450px] hidden xl:flex justify-center items-center">
          <DonateBox />
        </div>
      </div>
    </section>
  );
}
