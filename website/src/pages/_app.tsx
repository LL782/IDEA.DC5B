import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from "next/router";
import SEO from "../../next-seo.config";
import { BagToolkitProvider } from "../shoppingBag/BagToolkit";
import { Navigation } from "../siteLayout/ui/Navigation";
import Footer from "../siteLayout/ui/Footer";
import { NotePageView } from "src/webActions/NotePageView";
import { TrustPilotWidget } from "../atomic-ui/TrustPilotWidget";
import "../siteLayout/ui/globals.css";

const standAlonePages = ["/poster"];

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { route } = useRouter();
  const isStandAlonePage = standAlonePages.includes(route);

  if (isStandAlonePage) {
    return (
      <>
        <NotePageView component={Component} />
        <Component />
      </>
    );
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <BagToolkitProvider>
        <NotePageView component={Component} />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
        <TrustPilotWidget />
      </BagToolkitProvider>
      <Analytics />
    </>
  );
};

export default MyApp;
