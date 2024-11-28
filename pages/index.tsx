
import { GetStaticProps } from 'next'
import { getAllPostsForHome } from '../lib/api'
import { PageContent } from '../src/styles/GlobalStyles'
import QuotesCarousel from '@components/QuotesCarousel'
import { AboutDan } from '../components/AboutDan'

export default function Index({ allPosts: { edges }, preview }) {
  return (
    <PageContent>
      <AboutDan />
      <QuotesCarousel />
    </PageContent>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)


  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
