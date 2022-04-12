import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import "../assets/styles/globals.css";
import apolloClient from "../graphql/apolloClient";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};
function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <ApolloProvider client={apolloClient}>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </ApolloProvider>
  );
}

export default MyApp;
