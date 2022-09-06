import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import SEO from "../next-seo.config";
import { BagContext, useBagState } from "../src/shoppingBag/ui/useBag";
import { Navigation } from "../src/siteLayout/ui/Navigation";
import Footer from "../src/siteLayout/ui/Footer";
import "../src/siteLayout/ui/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const bag = useBagState();
  return (
    <>
      <DefaultSeo {...SEO} />
      <BagContext.Provider value={bag}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </BagContext.Provider>
    </>
  );
};

export default MyApp;
