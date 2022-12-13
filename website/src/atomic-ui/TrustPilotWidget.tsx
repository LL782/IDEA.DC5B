import Head from "next/head";
import { useEffect, useState } from "react";

import styles from "./TrustPilotWidget.module.css";

export const TrustPilotWidget = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  if (isBrowser === false) {
    return null;
  }
  return (
    <div
      className={`trustpilot-widget ${styles.widget}`}
      data-locale="en-GB"
      data-template-id="5419b6a8b0d04a076446a9ad"
      data-businessunit-id="637fe0297ad7dce2c685b5ea"
      data-style-height="24px"
      data-style-width="100%"
      data-theme="light"
      data-min-review-count="10"
      data-without-reviews-preferred-string-id="1"
      data-style-alignment="center"
    >
      <Head>
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
      </Head>
      <a
        href="https://uk.trustpilot.com/review/dc5b.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Trustpilot
      </a>
    </div>
  );
};
