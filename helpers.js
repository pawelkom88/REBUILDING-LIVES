import { Stripe, loadStripe } from "@stripe/stripe-js";

export const calcProductPrice = price => price / 100;

let stripePromise;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default getStripe;
