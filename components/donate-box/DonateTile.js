import React from "react";

export default function DonateTile({
  isTileActive,
  onSetDonationId,
  onSetDonation,
  productId,
  value,
  styles = "",
}) {
  return (
    <input
      name="donation"
      type="button"
      value={`£ ${value}`}
      onClick={() => {
        onSetDonation({ value, isActive: true });
        onSetDonationId(productId);
      }}
      className={`${styles} hover:bg-primary-clr hover:text-white w-32 h-12 border-2 border-primary-clr flex justify-center items-center uppercase font-bold cursor-pointer ${
        isTileActive ? "bg-primary-clr text-white" : ""
      }`}
    />
  );
}
