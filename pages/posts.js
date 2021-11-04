import { Container, Heading, SimpleGrid } from '@chakra-ui/layout'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grit-item'

import thumbMyDeskSetup from '../public/images/content/youtube-my-desk-setup.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My fish workflow"
            thumbnail={thumbMyDeskSetup}
            href="google.com"
          />
          <GridItem
            title="My fish workflow"
            thumbnail={thumbMyDeskSetup}
            href="google.com"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
