import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

export const initiateCheckout = async ({ lineItems = {} }) => {
  stripePromise =
    stripePromise || loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

  const stripe = await stripePromise;

  await stripe.redirectToCheckout({
    cancelUrl: `${window.location.origin}/bag`,
    lineItems,
    mode: "payment",
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
  });
};
