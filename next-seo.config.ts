import { NextSeoProps } from "next-seo";

const seo: NextSeoProps = {
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/branding/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/branding/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/branding/site.webmanifest",
    },
  ],
  defaultTitle: "S H O P - D C 5 B",
  openGraph: {
    description: "You must have a head",
    images: [
      {
        url: "https://shop.dc5b.com/branding/branding.jpg",
        width: 1280,
        height: 640,
        alt: "",
      },
    ],
    type: "website",
    locale: "en_GB",
    url: "https://shop.dc5b.com/",
    site_name: "SHOP_DC5B",
  },
};

export default seo;
