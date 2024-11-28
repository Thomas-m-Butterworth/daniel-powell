import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import { PageContent } from '../../src/styles/GlobalStyles'

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return (
      <div>
        <h1>404</h1>
      </div>
    )
  }
  console.log({posts})

  return (
    <div>
        {router.isFallback ? (
          <h3>Loading…</h3>
        ) : (
          <PageContent>
            <h3>{post.title}</h3>
            <div dangerouslySetInnerHTML={{__html: post.content}} />
            </PageContent>
        )}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: true,
  }
}
