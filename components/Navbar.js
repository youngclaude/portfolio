// import Logo from './layouts/Logo'
// import {Logo} from './layouts/Logo'
import {LogoComponent} from './Logo'
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
    LinkOverlay,
    useColorModeValue,
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import Image from 'next/image'
import {Text} from '@chakra-ui/react'
import styled from '@emotion/styled'
import ThemeToggleButton from './theme-toggle-btn'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-heigh: 290px;
    padding:10px;

    &:hover img{
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`;

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImg} width={20} height={20} alt="logo"></Image>
                    <Text color={useColorModeValue('grey.800', 'whiteAlpha.900')}
                    fontFamily="M PLUS Rounded 1c"
                    fontWeight="bold"
                    ml={3}>Rene Claude</Text>
                </LogoBox>
            </a>
        </Link>
    )
}

const LinkItem = ({href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('grey200', 'whiteAlpha900')
    return (
        <NextLink href={href}>
            <Link p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#202023' : inactiveColor}>{children}</Link>
        </NextLink>
    )
}

const Navbar = props => {
    const {path} = props
    return (
        <Box 
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#fff', '#20202380')}
            style={{backdropFilter: 'blur(10px)'}}
            zIndex={1}
            {...props}>
                <Container 
                    display="flex"
                    p={2}
                    maxW="container.md"
                    wrap="wrap"
                    align="center"
                    justify="space-between">
                        <Flex align="center" mr={5}>
                            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                                <Logo />
                                {/* <LogoComponent /> */}
                            </Heading>
                        </Flex>
                        <Stack 
                            direction={{base: 'column', md: 'row'}}
                            display={{base: 'none', md: 'flex'}}
                            width={{base: 'full', md: 'auto'}}
                            alignItems="center"
                            flexGrow={1}
                            mt={{base: 4, md: 0}}
                            >
                                <LinkItem href="/works" path={path}>Works</LinkItem>
                                <LinkItem href="/posts" path={path}>Posts</LinkItem>
                                <LinkItem href="/github" path={path}>Github</LinkItem>
                        </Stack>
                        <Box flex={1} align="right">
                            <ThemeToggleButton />
                            <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        icon={<HamburgerIcon/>}
                                        variant="outline"
                                        aria-label="Options"
                                    />
                                    <MenuList>
                                        {/* <NextLink href="/" passHref> <MenuItem as={Link}>About</MenuItem></NextLink> */}
                                        {/* <NextLink href="/work" passHref> <MenuItem as={Link}>Works</MenuItem></NextLink> */}
                                        {/* <NextLink href="/posts" passHref> <Link >Posts</Link></NextLink>  */}
                                        {/* <NextLink href="/posts" passHref> <MenuItem as={Link}>Posts</MenuItem></NextLink>  */}
                                        <MenuItem><Link to="/" as={NextLink} href="/"> Home</Link>  </MenuItem>    
                                        <MenuItem> <Link to="/works" as={NextLink} href="/works"> Work</Link> </MenuItem>
                                        <MenuItem> <Link to="/posts" as={NextLink} href="/posts"> Posts</Link> </MenuItem>
                                        <MenuItem as={Link} href="https://github.com">Github</MenuItem> 
                                    </MenuList>
                                </Menu>
                            </Box>
                        </Box>
                </Container>
                
        </Box>
    )
}

export default Navbar;
