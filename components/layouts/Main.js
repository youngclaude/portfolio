import React from 'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/layout'
import Navbar from '../Navbar'
import VoxelDog from '../voxel-dog'
import NoSSR from '../no-ssr'

const MainLayout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rene Claude - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSSR>
          <VoxelDog />
        </NoSSR>
        {children}
      </Container>
    </Box>
  )
}

export default MainLayout
