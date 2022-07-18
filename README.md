# SHOP.DC5B.COM

This is the [source code](https://en.wikipedia.org/wiki/Source_code) for [shop.dc5b.com](https://shop.dc5b.com) – if you're interested in the project of developing this business drop me a comment on [dc5b.dog](https://dc5b.dog).

## Tech

The rest of this document will be notes for me about developing the website.

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

