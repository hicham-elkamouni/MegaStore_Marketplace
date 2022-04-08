
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import "../assets/styles/globals.css"
import apolloClient from '../graphql/apolloClient'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
