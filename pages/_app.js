/* eslint-disable react/prop-types */
import React from "react";
import "./app.css";
import Head from "next/head";
import { labels } from "../src/utils/labels";
import { colors } from "../src/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* favicon */}
        <link rel="preload" href="/fonts/DejaVuSansMono.ttf" as="font" type="font/ttf" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color={colors.opal} />
        <meta name="msapplication-TileColor" content={colors.champagne} />
        <meta name="theme-color" content="#ffffff" />

        {/* open graph */}
        <meta property="og:title" content="Live Band 🤘 🎸 🎤 🎹 🥁" />
        <meta property="og:description" content="LiveBand.fr - Live karaoke app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.liveband.fr/" />
        <meta property="og:image" content="/live-band-logo.png" />

        <title>{labels.title}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
