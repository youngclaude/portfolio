import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/Paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Inkdrop">
            <Container>
                <Title>Inkdrop <Badge>2016</Badge></Title>
                <P>
                    A markdown note-taking app with 100 plugins, cross platform compatability, encrypted data sync support. The life-time revenues is more that 200k
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="www.google.com">https://www.inkdrop.app <ExternalLinkIcon /></Link>
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
                        <Link href="google.com">How I've attracted my first customers 500 Paid Users for My SaaS $5/mo <ExternalLinkIcon mx="2px"/></Link>
                    </ListItem>

                </List>

                <WorkImage src="https://raw.githubusercontent.com/craftzdog/craftzdog-homepage/master/public/images/works/inkdrop_01.png" alt="Inkdrop"/>
                <WorkImage src="https://raw.githubusercontent.com/craftzdog/craftzdog-homepage/master/public/images/works/inkdrop_02.png" alt="Inkdrop"/>
            </Container>
        </Layout>
    )
}


export default Work;


