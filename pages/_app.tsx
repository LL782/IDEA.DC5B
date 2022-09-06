import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import "../styles/globals.css";
import SEO from "../next-seo.config";
import { BagContext, useBagState } from "../shoppingBag/ui/useBag";
import { Navigation } from "../navigation/Navigation";
import Footer from "../footer/Footer";

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
