import { Container, Heading, SimpleGrid } from '@chakra-ui/layout'
import ArticleLayout from '../components/layouts/article'
import Section from '../components/Section'
import { GridItem } from '../components/grid-item'

import thumbMyDeskSetup from '../public/images/content/youtube-my-desk-setup.jpg'

const Posts = () => (
  <ArticleLayout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>

          <GridItem
            title="My fish workflow"
            thumbnail={thumbMyDeskSetup}
            href="http://google.com"
          />
          <GridItem
            title="My fish workflow"
            thumbnail={thumbMyDeskSetup}
            href="http://google.com"
          />

        </SimpleGrid>
      </Section>
    </Container>
  </ArticleLayout>
)

export default Posts
