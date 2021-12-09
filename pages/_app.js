import { ChakraProvider } from '@chakra-ui/provider'
import MainLayout from '../components/layouts/Main'
import Fonts from '../components/Fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <MainLayout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  )
}

export default Website
