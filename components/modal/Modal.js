import Image from "next/image";
import React from "react";
import { timeoutCounter } from "../donate-box/donationData";
import { thankYouMsgIcon, verySadEmotionFaceIcon } from "@/public/icons/iconsList";

const statusHeadings = {
  success: {
    text: "123123123123",
    icon: thankYouMsgIcon,
  },
  error: {
    text: "Error",
    icon: verySadEmotionFaceIcon,
  },
};

export default function Modal({
  showModal,
  status,
  onRequestClose,
  children,
  setCounter,
  countdown = timeoutCounter,
}) {
  const statusData = statusHeadings[status];
  const modalHeading = statusData.text;
  const modalIcon = statusData.icon;

  // const handleCloseModalOnKeyPress = e => {
  //   console.log("asd");

  //   if (e.key === "Escape") {
  //     onRequestClose(false);
  //   }
  // };

  return (
    <>
      {showModal ? (
        <div
          // tabIndex={0}
          onClick={e => {
            e.stopPropagation();
          }}
          // onKeyDown={handleCloseModalOnKeyPress}
          id="modal-box"
          className="relative w-1/3 min-h-[400px] flex flex-col items-center justify-center gap-4 bg-white p-6 rounded-lg z-70 fade-in-on-mount">
          <Image src={modalIcon.src} width={150} height={150} alt="modal icon" />
          <h2>{modalHeading[status]}</h2>
          <p className="text-[1.1rem] text-center">
            {children} {status === "success" ? countdown : ""}
          </p>
          <button
            onClick={() => {
              onRequestClose(false);
              setCounter(6);
            }}
            className="absolute top-4 right-4  ">
            <Image src="/icons/close.svg" width={25} height={25} alt="close button" />
          </button>
        </div>
      ) : null}
    </>
  );
}
