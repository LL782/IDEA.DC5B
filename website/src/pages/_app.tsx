import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import SEO from "../../next-seo.config";
import { BagToolkitProvider } from "../shoppingBag/BagToolkit";
import { Navigation } from "../siteLayout/ui/Navigation";
import Footer from "../siteLayout/ui/Footer";
import { NotePageView } from "src/webActions/NotePageView";

import "../siteLayout/ui/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...SEO} />
    <BagToolkitProvider>
      <NotePageView component={Component} />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </BagToolkitProvider>
  </>
);

export default MyApp;
