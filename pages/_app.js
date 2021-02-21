import "../styles/globals.css";
import { BagContext, useBagState } from "../bag/useBag";

function MyApp({ Component, pageProps }) {
  const bag = useBagState();
  return (
    <BagContext.Provider value={bag}>
      <Component {...pageProps} />
    </BagContext.Provider>
  );
}

export default MyApp;
