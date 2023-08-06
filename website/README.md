# Website

The following are technical notes for the website development.

## Summary

- It's a [Next.js](https://nextjs.org/) application
- Deployed and hosted via my [Vercel dashboard](https://vercel.com/dashboard)
- Bag and payment handling via [Stripe dashboard](https://dashboard.stripe.com/dashboard)

## Getting Started

```bash
yarn i
yarn dev
```

Dev runs at [http://localhost:3000](http://localhost:3000)

### Environment variables

Copy `.env.example` to a file called `.env.local` and populate the values where necessary.

These same variables will have to be defined in each environment where the app runs. For `prod` we store these in Vercel.

## Managing Ideas

Follow the existing examples

1. \[OPTIONAL\] Add to [Stripe > Products](https://dashboard.stripe.com/products)
1. Add the \[same\] title and image to the ideas data in `data`
1. Fill out the other attributes of the idea
1. \[OPTIONAL\] Copy `price` data from Stripe to the `dev` and `prod` files ([Stripe's "test mode"](https://dashboard.stripe.com/test/products) is for `dev`)

### Dev, Test Mode and Prod

When developing a new idea, we can add work in progress to the `dev` file and safely merge this and deploy it. We only release the idea to production when we add it to the `prod` file.

### Deployment

Changes inside this directory will trigger a deployment in [Vercel](https://vercel.com/)https://vercel.com/)
