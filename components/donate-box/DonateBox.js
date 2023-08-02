"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import DonateTile from "./DonateTile";
import { donationData, defaultSpendingInfo } from "./donationData";
import Modal from "../modal/Modal";
import Overlay from "../modal/overlay/Overlay";
import closeBtn from "@/public/icons/close.svg";
import { calcProductPrice } from "@/helpers";
import useFetch from "@/hooks/useFetch";
import useDonationSubmit from "@/hooks/useDonationSubmit";
import Spinner from "@/components/spinner/Spinner";

const submitBtnStyles =
  "block mx-auto mt-8 rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow-xl active:translate-y-2 transition-transform duration-200 active:text-primary sm:w-auto border-2 border-secondary-clr hover:bg-primary-clr hover:text-white hover:border-primary-clr disabled:bg-disabled-clr mb-4 disabled:cursor-not-allowed disabled:border-disabled-clr disabled:text-white";

export default function DonateBox({ styles = "", showClosebtn, onCloseDonationBox }) {
  const { handleSubmit, isRedirectingToStripe, setDonationId } = useDonationSubmit();

  const [donation, setDonation] = useState({
    value: null,
    isActive: false,
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const { data, loading, error } = useFetch();

  const { amountToSpend, icon } = donationData[donation.value] || defaultSpendingInfo;

  useEffect(() => {
    if (donation.value !== null) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [donation.value]);

  return (
    <div
      className={`${styles} w-full h-full px-4 flex flex-col justify-center mx-auto rounded bg-white`}>
      {showClosebtn && (
        <button onClick={() => onCloseDonationBox(false)} className="absolute top-4 right-4 ">
          <Image src={closeBtn} width={25} height={25} alt="close button" />
        </button>
      )}
      <h2 className="tracking-wide text-center text-heading2 font-black m-3 mb-4">
        Your donation would help
      </h2>
      <div className="flex justify-center items-center mb-4">
        {/* // create reusable button that takes props - take it frm other project         */}
        <button className="hover:text-white w-32 h-12 border-2 border-primary-clr flex justify-center items-center uppercase font-bold cursor-pointer border-r-0 bg-primary-clr text-white hover:bg-secondary-clr">
          Single
        </button>

        <button className="hover:text-white w-32 h-12 border-2 border-disabled-clr flex justify-center items-center uppercase font-bold cursor-not-allowed hover:bg-disabled-clr">
          Monthly
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {loading || isRedirectingToStripe ? (
          <div className="w-full h-[160px] flex justify-center items-center my-12">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="text-xl grid place-items-center grid-cols-2 sm:grid-cols-3 gap-2">
              {data?.map(product => {
                const donationValue = calcProductPrice(product.unit_amount);
                return (
                  <DonateTile
                    key={product.id}
                    productId={product.id}
                    value={donationValue}
                    onSetDonationId={setDonationId}
                    onSetDonation={setDonation}
                    isTileActive={donationValue === donation.value}
                  />
                );
              })}
            </div>
          </>
        )}

        <div className="sm:w-1/2 lg:w-full h-24 text-lg font-[600] my-4 p-2 flex gap-4 justify-between items-center text-center mx-auto">
          <Image src={icon} alt={icon} width={50} height={50} />
          {amountToSpend}
        </div>

        <button disabled={isDisabled} className={submitBtnStyles} type="submit">
          Donate
        </button>
      </form>

      {/* <Overlay showModal={error || redirectError} >
        <Modal
          // key={showModal.message}
          showModal={error || redirectError}
          
    
          >
          {error.message || redirectError.message}
        </Modal>
      </Overlay> */}
    </div>
  );
}

{
  /* <div className="flex flex-col justify-center items-center gap-2">
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
        </div> */
}
