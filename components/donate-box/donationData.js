export const donationData = {
  25: {
    amountToSpend: "To change the locks on a front door and fit a safety chain.",
    icon: "/icons/lock-repair.svg",
  },
  35: {
    amountToSpend: "To patch repair holes in plaster work to a house.",
    icon: "/icons/brick-wall.svg",
  },
  50: {
    amountToSpend: "To replace a room door and repaint.",
    icon: "/icons/door.svg",
  },
  100: {
    amountToSpend: "To replace hand basin and taps.",
    icon: "/icons/sink.svg",
  },
  150: {
    amountToSpend: "To redecorate an average room or replace toilet",
    icon: "/icons/paint-brush.svg",
  },
  300: {
    amountToSpend: "To replace handrail, spindles and newel post for stairs.",
    icon: "/icons/stairs.svg",
  },
  350: {
    amountToSpend: "To replace carpet and underlay to average room",
    icon: "/icons/carpet.svg",
  },
};


export const defaultSpendingInfo = {
  amountToSpend: "' No one has ever become poor by giving. ' - Anne Frank",
  icon: "/icons/quote.svg",
};

export const timeoutCounter = 8;
export const minimumDonationAmount = 10;
export const maximumDonationAmount = 1000;

export const modalMessages = {
  success:
    "We are incredibly grateful for your donation. Your kindness and compassion will make a difference to individuals and families facing challenging circumstances. You will be redirected to a payment page in",
  invalidAmount: "Please enter a valid donation amount.",
  minimumDonation: `Please enter a minimum donation of £${minimumDonationAmount}`,
  maximumDonation: `Maximum donation cannot be greater than £${maximumDonationAmount}`,
};
