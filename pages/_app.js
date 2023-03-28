import { ChakraProvider } from "@chakra-ui/react"
import '../components/Landing.css';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
