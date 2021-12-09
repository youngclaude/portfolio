import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, Meta } from '../../components/portfolio'
import P from '../../components/Paragraph'
import ArticleLayout from '../../components/layouts/article'

const Work = () => {
  return (
    <ArticleLayout title="Inkdrop">
      <Container>
        <Title>
          Inkdrop <Badge>2020</Badge>
        </Title>
        <P>
          A markdown note-taking app with 100 plugins, cross platform
          compatability, encrypted data sync support. The life-time revenues is
          more that 200k
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="www.google.com">
              https://www.inkdrop.app <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/ macOS/ Linux/ iOS/ Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="google.com">
              How I&apos;ve attracted my first customers 500 Paid Users for My SaaS $5&lsquo;mo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <PortfolioImage
          src="https://raw.githubusercontent.com/craftzdog/craftzdog-homepage/master/public/images/portfolio/inkdrop_01.png"
          alt="Inkdrop"
        />
        <PortfolioImage
          src="https://raw.githubusercontent.com/craftzdog/craftzdog-homepage/master/public/images/portfolio/inkdrop_02.png"
          alt="Inkdrop"
        />
      </Container>
    </ArticleLayout>
  )
}

export default Work
