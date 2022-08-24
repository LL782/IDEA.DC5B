import "../styles/globals.css";
import { BagContext, useBagState } from "../bag/useBag";
import { Navigation } from "../navigation/Navigation";
import Footer from "../footer/Footer";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const bag = useBagState();
  return (
    <BagContext.Provider value={bag}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </BagContext.Provider>
  );
};

export default MyApp;
