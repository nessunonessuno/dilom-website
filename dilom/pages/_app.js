import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import Navbar_sample from "../components/sample_1/navbar/Navbar"
import Navbar_sample2 from "../components/sample_2/Navbar"
import Head from "next/head"
import logo from "../public/sample_1/ab.png"

import { configureChains, defaultChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WagmiConfig, createClient } from "wagmi";
import { avalanche } from '@wagmi/core/chains';


const { chains, provider } = configureChains([avalanche], [
  publicProvider(),
]);
export const connectors = [
  new CoinbaseWalletConnector({
    chains,
    options: {
      appName: "wagmi demo",
    },
  }),
  new WalletConnectConnector({
    chains,
    options: {
      qrcode: true,
    },
  }),
  new MetaMaskConnector({
    chains,
  }),
];


const client = createClient({
  autoConnect: true,
  connectors,
  provider
});



function MyApp({ Component, pageProps, ...appProps }) {


    if ([`/sample_1`, "/sample_1/borrow", "/sample_1/position", "/sample_1/stake"].includes(appProps.router.pathname))
      return (

        <ChakraProvider>
        <Head>
        <title>Ticino Web Development per il Mondo Crypto - Dilom</title>        
        <meta name="description" content="Sviluppo di soluzioni blockchain personalizzate per il mondo crypto. Contattami per realizzare il tuo progetto." />
        </Head>
        <div className="sample_main" style={{backgroundColor:"black", backgroundImage:`url(${logo.src})`}}>
        <Navbar_sample />
        <Component {...pageProps} />
        </div>
        </ChakraProvider>)

    if ([`/sample_2`].includes(appProps.router.pathname))
      return (
        <ChakraProvider>
        <WagmiConfig client={client}>
        <Head>
        <title>Ticino Web Development per il Mondo Crypto - Dilom</title>        
        <meta name="description" content="Sviluppo di soluzioni blockchain personalizzate per il mondo crypto. Contattami per realizzare il tuo progetto."/>
        </Head>
        <Navbar_sample2 />
        <Component {...pageProps} />
        </WagmiConfig>
        </ChakraProvider>)

  return (
    <ChakraProvider>
      <Head>
      <title>Ticino Web Development per il Mondo Crypto - Dilom</title>        
      <meta name="description" content="Sviluppo di soluzioni blockchain personalizzate per il mondo crypto. Contattami per realizzare il tuo progetto." />
      </Head>
      <Navbar />
      <Component />
      <Footer />
    </ChakraProvider>
    )
}

export default MyApp
