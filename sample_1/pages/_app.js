import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "../components/navbar/Navbar"
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <Navbar />
      <Component />
    </ChakraProvider>
    )
}

export default MyApp
