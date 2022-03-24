import React, { FC } from "react";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globals";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
