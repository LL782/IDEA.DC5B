import { loadStripe, Stripe } from "@stripe/stripe-js";
import { BagItem } from "@types";

let stripe: Stripe | null;

type StripeLineItems = { price?: string; quantity?: number };

interface Props {
  bagItems: BagItem[];
}

export const stripeCheckout = async ({ bagItems }: Props) => {
  const lineItems: StripeLineItems[] = bagItems.map(({ id, quantity }) => ({
    price: id,
    quantity,
  }));

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
