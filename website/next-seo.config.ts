import { NextSeoProps } from "next-seo";

const seo: NextSeoProps = {
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/branding/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/branding/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/branding/favicon-16x16.png",
    },
    { rel: "manifest", href: "/branding/site.webmanifest" },
    {
      rel: "mask-icon",
      href: "/branding/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
    { rel: "shortcut icon", href: "/branding/favicon.ico" },
  ],
  additionalMetaTags: [
    { name: "msapplication-TileColor", content: "#ff00ff" },
    { name: "msapplication-config", content: "/branding/browserconfig.xml" },
    { name: "theme-color", content: "#ffffff" },
  ],
  defaultTitle: "DC5B Ideas",
  openGraph: {
    description: "You must have a head",
    images: [
      {
        url: "https://idea.dc5b.com/branding/branding.png",
        width: 1280,
        height: 640,
        alt: "",
      },
    ],
    type: "website",
    locale: "en_GB",
    url: "https://idea.dc5b.com/",
    site_name: "DC5B Ideas",
  },
};

export default seo;
