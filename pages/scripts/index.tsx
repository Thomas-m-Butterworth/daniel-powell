import { GetStaticProps } from 'next'
import { getAllScripts } from '../../lib/api'
import { ListAndImage, ScriptContainer } from '@components/Scripts'
import { CopyContainer, PageContainer } from '@components'
import { copy, meta } from '@lang'
import { images } from './images'

export default function Scripts({ allPosts: { edges } }) {
  console.log('scripts', {edges})
  return (
    <PageContainer head={meta.pages.scripts.head}>
      <CopyContainer title={copy.scripts.title} copy={copy.scripts.copy} />
      <ListAndImage>
          {edges.map((script, index) => (
              <ScriptContainer
                imageSrc={images[index % images.length].src}
                imageAlt={images[index % images.length].alt}
                key={script.node.slug}
                title={script.node.title}
                content={script.node.excerpt}
                href={`/scripts/${script.node.slug}`}
              />
            )
          )}
      </ListAndImage>
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllScripts(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
