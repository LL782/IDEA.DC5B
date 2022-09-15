import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import SEO from "../next-seo.config";
import { BagToolkitProvider } from "../src/shoppingBag/BagToolkit";
import { Navigation } from "../src/siteLayout/ui/Navigation";
import Footer from "../src/siteLayout/ui/Footer";
import "../src/siteLayout/ui/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...SEO} />
    <BagToolkitProvider>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </BagToolkitProvider>
  </>
);

export default MyApp;
