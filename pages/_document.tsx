import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HN8K3DEZQ8"
        />

        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag(
          'config',
          'G-HN8K3DEZQ8',
          {
            'allow_google_signals': false,
            'allow_ad_personalization_signals': false,
            'restricted_data_processing': true,
            'anonymize_ip': true
          });
          `}</Script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
