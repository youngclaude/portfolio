import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import ThemeToggleButton from './theme-toggle-btn'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-heigh: 290px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  // const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
  // <img src="https://img.icons8.com/officel/16/000000/logo.png"/>

  const iconImagePath = `${useColorModeValue('https://img.icons8.com/plumpy/16/000000/logo', 'https://img.icons8.com/officel/16/000000/logo')}.png`


  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={iconImagePath} width={20} height={20} alt="logo"></Image>
          <Text
            color={useColorModeValue('grey', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Rene Claude
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

const LinkItem = ({ href, path, children, ...rest }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('grey200', 'whiteAlpha900')
  return (
    <NextLink href={href} {...rest}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#fff', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
            {/* <LogoComponent /> */}
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/portfolio" path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <a href="https://www.github.com" >
            Github
          </a>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem> <Link as={NextLink} href="/">Home</Link> </MenuItem>
                <MenuItem> <Link to="/portfolio" as={NextLink} href="/portfolio">Work</Link> </MenuItem>
                <MenuItem> <Link to="/posts" as={NextLink} href="/posts"> Posts </Link> </MenuItem>
                <MenuItem as={Link} href="https://www.github.com"> Github </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
