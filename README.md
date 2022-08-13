# SHOP.DC5B.COM

## Welcome 👋

This is the [source code](https://en.wikipedia.org/wiki/Source_code) for [shop.dc5b.com](https://shop.dc5b.com)

If you're interested in the project drop me a comment on [dc5b.dog](https://dc5b.dog)

### Issues and milestones

In GitHub you'll find [Issues](https://github.com/LL782/DC5B-SHOP/issues) and [Milestones](https://github.com/LL782/DC5B-SHOP/milestones). These show you what's being worked on and suggest a path for the future of the shop. If you'd like to contribute, you'd be most welcome.

## Tech

The following are technical notes for the website development.

### Summary

- It's a [Next.js](https://nextjs.org/) application
- Deployed and hosted via my [Vercel dashboard](https://vercel.com/dashboard)
- Product and payment handling integrated with my [Stripe dashboard](https://dashboard.stripe.com/dashboard)

### Getting Started

```bash
yarn i
yarn dev
```

Dev runs at [http://localhost:3000](http://localhost:3000)

### Managing Products

1. Manage them in Stripe
1. Duplicate the product details in the `product.{ENV}.json` files

Everything about the products gets duplicated, price, description, title, image, etc.

### Products on Dev and Prod

The files in `data/products` are arranged to feature toggle unfinished products. We work on products "in dev" (meaning locally) by adding their details to the `dev` data. This means we can have file changes related to them merged into the main branch and deployed without any problems. The new products are only released to the public when we add their details to the `prod` data.

