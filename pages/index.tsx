
import { GetStaticProps } from 'next'
import { getAllPostsForHome } from '../lib/api'
import { AboutDan, PageContainer } from '@components'
import { meta } from '@lang'
import QuotesCarousel from '@components/QuotesCarousel/QuotesCarousel'

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
