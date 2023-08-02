import { useState } from "react";
import { useRouter } from "next/navigation";

const useDonationSubmit = () => {
  const [isRedirectingToStripe, setIsRedirectingToStripe] = useState(false);
  const [redirectError, setRedirectError] = useState(null);
  const [donationId, setDonationId] = useState("");
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    setRedirectError(null);

    const controller = new AbortController();
    const signal = controller.signal;

    setIsRedirectingToStripe(true);

    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ donationId }),
        signal,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch checkout session");
      }

      const { url } = await response.json();
      router.push(url);
      setIsRedirectingToStripe(false);
    } catch (error) {
      console.error("Error during API call:", error.message);
      setRedirectError(error.message);
      setIsRedirectingToStripe(false);
    }
  };

  return {
    handleSubmit,
    isRedirectingToStripe,
    redirectError,
    donationId,
    setDonationId,
  };
};

export default useDonationSubmit;
