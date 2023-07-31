import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function usePost(priceId) {
  // add loading state
  const [error, setError] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!priceId) {
      return;
    }

    try {
      console.log("TRY BLOCK runs");

      const { session } = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      }).then(res => res.json);

      const stripe = await stripePromise;

      const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

      if (error) {
        setError(error.message);
      }
    } catch (error) {
      console.log("ERROR block RUNS");
      setError(error.message);
    }
  };

  return { handleSubmit, error };
}
