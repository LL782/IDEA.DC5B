import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

export const initiateCheckout = async ({ lineItems = {} }) => {
  const stripe = await stripePromise;

  await stripe.redirectToCheckout({
    cancelUrl: `${window.location.origin}/bag`,
    lineItems,
    mode: "payment",
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
  });
};
