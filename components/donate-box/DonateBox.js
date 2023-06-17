"use client";

import React, { useState } from "react";
import Image from "next/image";
import { manIcon } from "@/public/icons/iconsList";

export default function DonateBox() {
  const [donationValue, setDonationValue] = useState(20);
  const [buttonText, setButtonText] = useState("Donate");

  let donationText;
  let icon;

  switch (donationValue) {
    case 10:
      donationText = " a month could be a great idea.......";
      icon = manIcon;
      break;
    case 15:
      donationText = " a month could be ...........";
      icon = manIcon;
      break;
    case 20:
      donationText = " a month could help us ...........";
      icon = manIcon;
      break;
    case 25:
      donationText = " a month could help 1 person..........";
      icon = manIcon;
      break;
    case 30:
      donationText = " a month could help recruit and train a volunteer";
      icon = manIcon;
      break;
  }

  return (
    <div className="w-full h-3/4 p-8 flex flex-col justify-center mx-auto rounded bg-white">
      <div className="flex items-center justify-center font-black m-3 mb-12">
        <h2 className="tracking-wide text-3xl text-gray-900">One-off donation</h2>
      </div>
      <form>
        <fieldset className="space-y-2 my-2">
          <legend className="font-medium text-gray-900 mb-4">
            <p>
              <Image className="inline" src={icon} alt="man icon" width={50} height={50} /> £
              {donationValue} {donationText}
            </p>
          </legend>
          <div aria-hidden="true" className="flex justify-between px-1">
            <span>£10</span>
            <span>£15</span>
            <span>£20</span>
            <span>£25</span>
            <span>£30</span>
          </div>
          <label className="sr-only" htmlFor="donation">
            Choose donation amount
          </label>
          <input
            id="donation"
            onChange={e => setDonationValue(Number(e.target.value))}
            value={donationValue}
            type="range"
            name="donation"
            className="w-full"
            step="5"
            min="10"
            max="30"
          />
        </fieldset>
      </form>

      <button
        onMouseEnter={() => setButtonText("Thank you")}
        onMouseLeave={() => setButtonText("Donate")}
        className="block mx-auto mt-4 rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-lg shadow-rose-200 active:text-rose-500 sm:w-auto border-2 border-rose-200 hover:bg-rose-500 hover:text-white hover:border-rose-500"
        type="submit">
        {buttonText}
      </button>
    </div>
  );
}
