import { NextSeoProps } from "next-seo";

const seo: NextSeoProps = {
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/branding/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/branding/apple-touch-icon.jpg",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/branding/site.webmanifest",
    },
  ],
  defaultTitle: "S H O P - D C 5 B",
  openGraph: {
    images: [
      {
        url: "/branding/warrier-heading.jpg",
        width: 1280,
        height: 640,
        alt: "DOG.DC5B Artwork",
      },
    ],
    type: "website",
    locale: "en_GB",
    url: "https://shop.dc5b.com/",
    site_name: "SHOP_DC5B",
  },
};

export default seo;
