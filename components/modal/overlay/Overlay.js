import React from "react";

export default function Overlay({ showModal, onRequestClose, children }) {
  return (
    <>
      {showModal ? (
        <div
          onClick={() => onRequestClose(false)}
          className="w-full h-screen bg-[#222] inset-0 fixed bg-opacity-40 z-60 flex justify-center items-center">
          {children}
        </div>
      ) : null}
    </>
  );
}
