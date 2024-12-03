import { AboutDan, PageContainer } from '@components'
import { meta } from '@lang'
import QuotesCarousel from '@components/QuotesCarousel/QuotesCarousel'

export default function Index() {
  return (
    <PageContainer head={meta.pages.home.head}>
      <AboutDan />
      <QuotesCarousel />
    </PageContainer>
  )
}
