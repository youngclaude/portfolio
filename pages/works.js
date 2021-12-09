import React from 'react'
import {
    Container,
    Box,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import thumbInkdrop from '../public/images/works/inkdrop-banner.jpg'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import Layout from "../components/layouts/article";
import Section from '../components/Section'
import Image from "next/image";
import NextLink from "next/link";
import { Text, LinkBox, LinkOverlay} from '@chakra-ui/react'
import { Global } from "@emotion/react";


export const GridItem = ({children, href, title, thumbnail}) => (
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

export const WorkGridItem = ({children, id, title, thumbnail}) => (
    <Box w="100%" align="center">
        <NextLink href={`/works/${id}`}>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                />
                <LinkOverlay href={`/works/${id}`} ><Text mt={2} fontSize={20}>{title}</Text></LinkOverlay>
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




const works = () => {
    return (
        <Layout>

        <Container>
            <Heading as="h3" fontSize={20} mb={4}>Works Page</Heading>

            <SimpleGrid column={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                        A markdown note-taking app
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="styly" title="Styly" thumbnail={thumbStyly}>
                        Vr shopping app for adults and kids alike.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="menkiki" title="Menkiki" thumbnail={thumbMenkiki}>
                        On demand soup bowl orders for college students in the city of Osaka
                    </WorkGridItem>
                </Section>
            </SimpleGrid>


        </Container>
        </Layout>

    )
}

export default works
