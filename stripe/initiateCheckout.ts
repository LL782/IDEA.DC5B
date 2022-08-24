import { loadStripe, Stripe } from "@stripe/stripe-js";
import type { StripeLineItems } from "./StripeLineItems";

let stripe: Stripe | null;

interface Props {
  lineItems: StripeLineItems[];
}

export const initiateCheckout = async ({ lineItems }: Props) => {
  if (!stripe) {
    stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY || "");
  }

  if (stripe === null) {
    throw new Error("Stripe failed to initiate");
  }

  await stripe.redirectToCheckout({
    cancelUrl: `${window.location.origin}/bag`,
    lineItems,
    mode: "payment",
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
  });
};
