import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, PortfolioSubHeading, Meta } from '../../components/portfolio'
import P from '../../components/Paragraph'
import ArticleLayout from '../../components/layouts/article'

const You42 = () => {
  return (
    <ArticleLayout title="Basline">
      <Container>
        <Title>
            Dede is the best <Badge>2020</Badge>
        </Title>
        <P>
          work ive done at You42
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
            <span>Web, Blockchain</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, React, PHP, Laravel, AWS, Docker </span>
          </ListItem>
          <ListItem>
            <Meta>AWS Services</Meta>
            <span>S3, EC2</span>
          </ListItem>
        </List>

        
        <PortfolioSubHeading>App Page</PortfolioSubHeading>
        <p></p>
        <PortfolioImage
          src="/images/portfolio/common-commands-v1-3.png"
          alt="Common Commands"
        />
      </Container>
    </ArticleLayout>
  )
}

export default You42
