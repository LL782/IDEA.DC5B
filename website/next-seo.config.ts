import { NextSeoProps } from "next-seo";

const description =
  "From raw ideas to unique pieces – if it's developed at DC5B you'll find it right here. Come and see what we do, get inspired and tell us about the objeys and gifts of your dreams.";

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
    { name: "description", content: description },
    { name: "robots", content: "index,follow" },
  ],
  defaultTitle: "DC5B Ideas",
  openGraph: {
    description,
    images: [
      {
        url: "https://idea.dc5b.com/branding/branding.jpg",
        width: 2400,
        height: 1260,
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
