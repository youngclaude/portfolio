import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, PortfolioSubHeading, Meta } from '../../components/portfolio'
import P from '../../components/Paragraph'
import ArticleLayout from '../../components/layouts/article'

const Fluke = () => {
  return (
    <ArticleLayout title="Basline">
      <Container>
        <Title>
          Fluke Baseline <Badge>2019-2020</Badge>
        </Title>
        <P>
          work ive done at Fluke
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.you42.com">
              https://www.you42.com <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web, (desktop app on roadmap)</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React </span>
          </ListItem>
        </List>

        <PortfolioSubHeading>App Page</PortfolioSubHeading>
        <p>Landing page view</p>
        <PortfolioImage
          src="/images/portfolio/common-commands-v1.png"
          alt="Common Commands"
        />

        <PortfolioSubHeading>App View</PortfolioSubHeading>
        <p>The view from the Bash page</p>
        <PortfolioImage
          src="/images/portfolio/common-commands-v1-2.png"
          alt="Common Commands"
        />
        
        <PortfolioSubHeading>Github Contribution Page</PortfolioSubHeading>
        <p>The project is open for people to contributions</p>
        <PortfolioImage
          src="/images/portfolio/common-commands-v1-3.png"
          alt="Common Commands"
        />
      </Container>
    </ArticleLayout>
  )
}

export default Fluke
