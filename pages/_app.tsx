import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import SEO from "../next-seo.config";
import { BagContextProvider } from "../src/shoppingBag/BagContext";
import { Navigation } from "../src/siteLayout/ui/Navigation";
import Footer from "../src/siteLayout/ui/Footer";
import "../src/siteLayout/ui/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...SEO} />
    <BagContextProvider>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </BagContextProvider>
  </>
);

export default MyApp;
