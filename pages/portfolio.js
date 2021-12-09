import React from 'react'
import {
  Container,
  Box,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
// import { PortfolioGridItem, GridItem } from '../components/grit-item'
import thumbInkdrop from '../public/images/portfolio/common-commands-v1.png'
import thumbStyly from '../public/images/portfolio/styly_eyecatch.png'
import thumbMenkiki from '../public/images/portfolio/menkiki_eyecatch.png'
import ArticleLayout from '../components/layouts/article'

import Section from '../components/Section'

import Image from 'next/image'
import NextLink from 'next/link'
import { Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const PortfolioGridItem = ({ children, slug, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/portfolio/${slug}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/portfolio/${slug}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail{
            border-radius: 12px;
        }
    `}
  />
)

const portfolio = () => {
  return (
    <ArticleLayout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Portfolio Page
        </Heading>

        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <PortfolioGridItem slug="common-commands" title="Common Commands" thumbnail={thumbInkdrop}>
              A resource for the most commonly used commands
            </PortfolioGridItem>
          </Section>
          <Section>
            <PortfolioGridItem slug="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A markdown note-taking app
            </PortfolioGridItem>
          </Section>
          <Section>
            <PortfolioGridItem slug="styly" title="Styly" thumbnail={thumbStyly}>
              Vr shopping app for adults and kids alike.
            </PortfolioGridItem>
          </Section>
          <Section>
            <PortfolioGridItem slug="menkiki" title="Menkiki" thumbnail={thumbMenkiki}>
              On demand soup bowl orders for college students in the city of
              Osaka
            </PortfolioGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </ArticleLayout>
  )
}

export default portfolio
