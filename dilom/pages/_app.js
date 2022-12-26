import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <Navbar />
      <Component />
    <Footer />
    </ChakraProvider>
    )
}

export default MyApp
