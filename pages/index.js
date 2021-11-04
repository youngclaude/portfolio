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
import Section from '../components/section'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoYoutube
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
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
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Rene Claude
            </Heading>
            <p>Digital Craftzman (Artist / Developer/ Designer)</p>
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
            Iz been workeen owlllll ma life - Charles J Frassier. Whats going on
            my name is Rene and I work as a Sr. Software Engineer living all
            over the US but in Atlanta, GA for now I enjoy long dive into
            debugging code that should work the first time but that package team
            just pushed and update with massive breakable changes and soothing
            strools through Google or Stack Overflow to see if others are or
            have suffered my same pain :) <br />
            For fun I lift weight and do kickboxing. <br />
            Currently learning {`&apos;`}blockchain{`&apos;`}
          </Paragraph>
          <Box align="center" my={7}>
            <NextLink href="/works">
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
            <BioYear>1985</BioYear>Born in Osaka (表意文)
          </BioSection>
          <BioSection>
            <BioYear>2007</BioYear>Move to New York City
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>Became coding master after
            mastering myself
          </BioSection>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
            I {useColorModeValue('🖤', '❤')}{' '}
          </Heading>
          <Paragraph>
            Art, Music, Drawing, playing Drums, Photography, Lecia, Machine
            Learning
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
                  @craftzdog{' '}
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/youngclaude" target="_blank">
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
            <ListItem>
              <Link href="https://youtube.com/youngclaude_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoYoutube} />}
                >
                  {' '}
                  @youngclaude{' '}
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
