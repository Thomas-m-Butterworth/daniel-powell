
import { GetStaticProps } from 'next'
import { getAllPostsForHome } from '../lib/api'
import QuotesCarousel from '@components/QuotesCarousel'
import { AboutDan } from '../components/AboutDan'
import { PageContainer } from '@components'
import { meta } from '@lang'

export default function Index({ allPosts: { edges }, preview }) {
  return (
    <PageContainer head={meta.pages.home.head}>
      <AboutDan />
      <QuotesCarousel />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)


  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
