"use client";

import React, { useState } from "react";
import Image from "next/image";
import DonateTile from "./DonateTile";
import { donateBoxValues, donationData } from "./donationData";

export default function DonateBox() {
  const [donation, setDonation] = useState({
    value: null,
    isActive: false,
  });
  const [otherDonationValue, setOtherDonationValue] = useState("");

  const handleOtherDonationInputFocus = event => {
    const key = event.key;

    if (key === "Shift" || key === "Tab") return;

    setDonation({ value: null, isActive: true });
  };

  const validateDonation = () => {
    const validationNumbers = /^[0-9]+$/;
    return !donation.value && !otherDonationValue.match(validationNumbers);
  };

  const validateMinimumDonation = () => {
    return !donation.value && otherDonationValue < 10;
  };

  const showErrorModal = message => {
    // Add code to show error modal with the provided message
    alert(message);
  };

  const processDonation = () => {
    // stripe logic
    console.log("donation sent");
  };

  const resetState = () => {
    setOtherDonationValue("");
    setDonation({ value: null, isActive: false });
  };

  const handleDonationSubmit = event => {
    event.preventDefault();

    if (validateDonation()) {
      showErrorModal("Please enter a valid number");
      return;
    }

    if (validateMinimumDonation()) {
      showErrorModal("Minimum donation is £10");
      return;
    }

    processDonation();

    resetState();
  };

  const { spending, icon } = donationData[donation.value] || {
    spending: "' No one has ever become poor by giving. ' - Anne Frank",
    icon: "/icons/quote.svg",
  };

  return (
    <div className="w-full h-full px-4 flex flex-col justify-center mx-auto rounded bg-white">
      <div className="flex items-center justify-center font-black m-3 mb-4">
        <h2 className="tracking-wide text-2xl text-gray-900">Add some text</h2>
      </div>
      <div className="flex justify-center items-center mb-4">
        <button className="hover:text-white w-32 h-12 border-2 border-primary-clr flex justify-center items-center uppercase font-bold cursor-pointer border-r-0 bg-primary-clr text-white hover:bg-secondary-clr">
          Single
        </button>
        <button className="hover:text-white w-32 h-12 border-2 border-gray-800 flex justify-center items-center uppercase font-bold cursor-not-allowed hover:bg-gray-800">
          Monthly
        </button>
      </div>
      <form onSubmit={handleDonationSubmit}>
        <div className="grid grid-cols-3 gap-2">
          {donateBoxValues.map(tile => {
            return (
              <DonateTile
                key={tile.id}
                onSetDonationValue={setDonation}
                onSetOtherDonationValue={setOtherDonationValue}
                isTileActive={tile.value === donation.value}
                value={tile.value}
              />
            );
          })}
        </div>

        <div className="w-full h-24 text-lg font-bold my-4 p-2 flex gap-4 justify-between items-center text-center">
          <Image src={icon} alt={icon} width={50} height={50} />
          {spending}
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <label className="sr-only" htmlFor="other-amount">
            Other amount
          </label>
          <input
            name="other-amount"
            id="other-amount"
            className="uppercase block border border-primary-clr mt-2 p-2 placeholder:text-center shadow-lg"
            type="text"
            placeholder="£ Other amount"
            onChange={e => setOtherDonationValue(e.target.value)}
            value={otherDonationValue}
            onKeyDown={handleOtherDonationInputFocus}
          />
          <small className="text-secondary-clr">
            Due to ..... a minimum donation amount is £10
          </small>
        </div>

        <button
          // disabled={!!donationValue.value}
          className="block mx-auto mt-8 rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow-xl active:translate-y-2 transition-transform duration-200 active:text-primary sm:w-auto border-2 border-secondary-clr hover:bg-primary-clr hover:text-white hover:border-primary-clr disabled:bg-gray-200 mb-4"
          type="submit">
          Donate
        </button>
      </form>
    </div>
  );
}

{
  /* <form>
        <fieldset className="space-y-2 my-2">
          <legend className="font-medium text-gray-900 mb-4">
            <p>
              <Image className="inline" src={icon} alt="man icon" width={50} height={50} /> £
              {donationValue} {donationSpending}
            </p>
          </legend>
          
          <div aria-hidden="true" className="flex justify-between px-1">
            {DonateBoxValues.map(({ id, value }) => (
              <span key={id}>{value}</span>
            ))}
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
            step="10"
            min="25"
            max="350"
          />
        </fieldset>
      </form> */
}
