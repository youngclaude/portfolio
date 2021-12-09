import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/Bio'
import Paragraph from '../components/Paragraph'
import Section from '../components/Section'
import NextLink from 'next/link'
import ArticleLayout from '../components/layouts/article'
import {
  IoLogoGithub,
  IoLogoTwitter
} from 'react-icons/io5'

const Page = () => {
  return (
    <ArticleLayout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('teal', 'whiteAlpha.200')}
          my={6}
          align="center"
          p={3}
          color="white"
        >
          Hello, I am a full-stack developer based in Atlanta!
          <br /> <small><i>Try grabbing, dragging or scrolling-in on the dog</i></small>
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Rene Claude
            </Heading>
            <p>Software Architect / Developer/ Designer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="https://github.com/youngclaude.png"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.9}>
          <Heading as="h3" variant="section-title">
            Work{' '}
          </Heading>
          <Paragraph>
             Whats going on my name is Rene and I work as a Sr. Software Engineer living all
            over the US but in Atlanta, GA for now. I enjoy long dives into
            debugging code that should work the first time ( but that a package team
            just pushed an update with massive breakable changes) and soothing
            strolls through Google or Stack Overflow to see if others are
            have suffered my same pain :) <br /><br />
            For fun I lift weights and do kickboxing. <br />
            Currently learning blockchain 
          </Paragraph>
          <Box align="center" my={7}>
            <NextLink href="/portfolio">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
            Work{' '}
          </Heading>
          <BioSection>
            <BioYear>2021 to present</BioYear>Senior Software Engineer @ Fluke Technologies
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>Achieved AWS Solutions Architect Certification
          </BioSection>
          <BioSection>
            <BioYear>2020-2021</BioYear>Freelance Software Engineer/ Consultant <br />
          </BioSection>
          <BioSection>
            <BioYear>2019-2020</BioYear>Software Developer @ You42 (Web3) <br />
            The You42 platform launched with its own cryptocurrency, the U42 Token, an ERC20 consumer token issued and transacted on the Ethereum public blockchain. The ICO concluded in August 2018 with a raise of nearly $22M. The token is currently used to purchase advertising and promotions on the You42platform.</BioSection>
          <BioSection>
            <BioYear>2018</BioYear><span>SR Wordpress Dev @ Darwin&apos;s List Network (Advertising Agency)</span>
          </BioSection>
          <BioSection>
            <BioYear>2013-2018</BioYear>Freelance PHP Wordpress Dev 
          </BioSection>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
            I {useColorModeValue('🖤', '❤')}{' '}
          </Heading>
          <Paragraph>
            Art, Music, Drawing, Singing, Photography, Cloud Computing
          </Paragraph>
        </Section>

        <Section>
          <List>
            <ListItem>
              <Link href="https://github.com/youngclaude" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  {' '}
                  @youngclaude{' '}
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/youngclaude_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  {' '}
                  @youngclaude_{' '}
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </ArticleLayout>
  )
}

export default Page
