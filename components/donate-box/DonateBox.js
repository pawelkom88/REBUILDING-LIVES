"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DonateTile from "./DonateTile";
import {
  donateBoxValues,
  donationData,
  defaultSpendingInfo,
  modalMessages,
  timeoutCounter,
  minimumDonationAmount,
  maximumDonationAmount,
} from "./donationData";
import Modal from "../modal/Modal";
import Overlay from "../modal/overlay/Overlay";
import getStripe from "./DonateBox";
import { fetchPostJSON } from "@/app/api/helpers";

// const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function DonateBox() {
  const [donation, setDonation] = useState({
    value: null,
    isActive: false,
  });
  const router = useRouter();
  const [otherDonationValue, setOtherDonationValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [showModal, setShowModal] = useState({ isVisible: false, status: "", message: "" });
  const [counter, setCounter] = useState(timeoutCounter);

  console.log(donation, otherDonationValue);

  useEffect(() => {
    if (donation.value !== null || otherDonationValue !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [donation.value, otherDonationValue]);

  useEffect(() => {
    if (counter === 0) return;

    const timer = setInterval(() => {
      if (showModal.status === "success") {
        setCounter(prevCount => prevCount - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [counter, showModal.status]);

  // useEffect(() => {
  //   if (counter === 0) handleRedirectToStripe();
  // }, [counter]);

  // const handleRedirectToStripe = () => {
  //   // env var
  //   // router.push("https://www.bbc.co.uk/");
  //   resetState();
  // };

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
    return !donation.value && otherDonationValue < minimumDonationAmount;
  };

  const validateMaximumDonation = () => {
    return !donation.value && otherDonationValue > maximumDonationAmount;
  };

  const processDonation = async donation => {
    const checkoutSession = await fetchPostJSON(
      "/api/checkout_sessions",
      //storing the amount in the session or number ??
      { amount: donation }
    );

    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message);

      return;
    }

    // Redirect to Checkout.
    //was await !!!
    const stripe = getStripe();

    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSession.id,
    });

    console.warn(error.message);

    resetState();

    // setShowModal({
    //   isVisible: true,
    //   status: "success",
    //   message: modalMessages.success,
    // });
  };

  const resetState = () => {
    setOtherDonationValue("");
    setDonation({ value: null, isActive: false });
  };

  const showModalError = message => {
    setShowModal({
      isVisible: true,
      status: "error",
      message,
    });
  };

  const handleDonationSubmit = event => {
    event.preventDefault();

    switch (true) {
      case validateDonation():
        showModalError(modalMessages.invalidAmount);
        return;

      case validateMinimumDonation():
        showModalError(modalMessages.minimumDonation);
        return;

      case validateMaximumDonation():
        showModalError(modalMessages.maximumDonation);
        return;

      default:
        processDonation(donation.value || otherDonationValue);
    }
  };

  const { amountToSpend, icon } = donationData[donation.value] || defaultSpendingInfo;

  return (
    <div className="w-full h-full px-4 flex flex-col justify-center mx-auto rounded bg-white">
      <div className="flex items-center justify-center font-black m-3 mb-4">
        <h2 className="tracking-wide text-2xl text-gray-900">Your donation would help</h2>
      </div>
      <div className="flex justify-center items-center mb-4">
        {/* // create reusable button that takes props - take it frm other project         */}
        <button className="hover:text-white w-32 h-12 border-2 border-primary-clr flex justify-center items-center uppercase font-bold cursor-pointer border-r-0 bg-primary-clr text-white hover:bg-secondary-clr">
          Single
        </button>

        <button className="hover:text-white w-32 h-12 border-2 border-disabled-clr flex justify-center items-center uppercase font-bold cursor-not-allowed hover:bg-disabled-clr">
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
          {amountToSpend}
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
          disabled={isDisabled}
          className="block mx-auto mt-8 rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow-xl active:translate-y-2 transition-transform duration-200 active:text-primary sm:w-auto border-2 border-secondary-clr hover:bg-primary-clr hover:text-white hover:border-primary-clr disabled:bg-disabled-clr mb-4 disabled:cursor-not-allowed disabled:border-disabled-clr disabled:text-white"
          type="submit">
          Donate
        </button>
      </form>


      
      <Overlay showModal={showModal.isVisible} onRequestClose={setShowModal}>
        <Modal
          key={showModal.message}
          showModal={showModal.isVisible}
          onRequestClose={setShowModal}
          status={showModal.status}
          setCounter={setCounter}
          countdown={counter}>
          {/* Thanks for donating, you will be redirect to payment page in ...(env var) */}
          {showModal.message}
        </Modal>
      </Overlay>
    </div>
  );
}
