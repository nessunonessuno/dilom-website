import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import Navbar_sample from "../components/sample_1/navbar/Navbar"
import logo from "../public/ab.png"

function MyApp({ Component, pageProps, ...appProps }) {

    if ([`/sample_1`, "/sample_1/borrow", "/sample_1/position", "/sample_1/stake"].includes(appProps.router.pathname))
      return (

        <ChakraProvider>
        <div className="sample_main" style={{backgroundColor:"black", backgroundImage:`url(${logo.src})`}}>
        <Navbar_sample />

        <Component {...pageProps} />
        </div>
        </ChakraProvider>)

  return (
    <ChakraProvider>
    <Navbar />
      <Component />
    <Footer />
    </ChakraProvider>
    )
}

export default MyApp
