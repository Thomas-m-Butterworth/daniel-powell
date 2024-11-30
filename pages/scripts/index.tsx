import { GetStaticProps } from 'next'
import { getAllScripts } from '../../lib/api'
import { PageContent } from '../../src/styles/GlobalStyles'
import Link from 'next/link'
import danOverwhelmed from '@images/danOverwhelmed.png'
import danSaussageRoll from '@images/danSaussageRoll.png'
import sparkyBinEater from '@images/sparkyBinEater.png'
import sparkyBumstick from '@images/sparkyBumstick.png'
import sparkyPintGlass from '@images/sparkyPintGlass.png'
import { ListAndImage, ScriptContainer, ScriptLinkDescription, ScriptLinkItem, ScriptListContainer, SideImage } from '@components/Scripts'
import Head from 'next/head'

const images = [
  sparkyBinEater.src,
  danOverwhelmed.src,
  danSaussageRoll.src,
  sparkyBumstick.src,
  sparkyPintGlass.src
];

export default function Scripts({ allPosts: { edges }, preview }) {
  return (
      <PageContent>
        <Head>
          {<title>Daniel Powell - Scripts</title>}
        </Head>
        <ListAndImage>
      <ScriptListContainer>
      {edges.map((script, index) => {
        return (
          <ScriptContainer>
            <SideImage src={images[index % images.length]} />
              <div key={script.node.slug}>
                <Link href={`/scripts/${script.node.slug}`}>
                  <ScriptLinkItem>{script.node.title}</ScriptLinkItem>
                </Link>
                <ScriptLinkDescription dangerouslySetInnerHTML={{__html: script.node.excerpt}} />
              </div>
            </ScriptContainer>
          )
      })}
      </ScriptListContainer>
      </ListAndImage>
      </PageContent>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllScripts(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
