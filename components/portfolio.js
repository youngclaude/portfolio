import NextLink from 'next/link'
import {
  Box,
  Heading,
  Link,
  Badge,
  Image
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/portfolio">
      <Link>Portfolio</Link>
    </NextLink>
    <span>
      <ChevronRightIcon />
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} md={4}>
      {children}
    </Heading>
  </Box>
)
export const PortfolioImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
export const PortfolioSubHeading = ({ children }) => (
  <h3 style={{fontSize: '20px'}} mr={2}>
    {children}
  </h3>
)
