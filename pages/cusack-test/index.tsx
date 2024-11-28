import Head from 'next/head'
import { PageContent } from '../../src/styles/GlobalStyles'
import { BulletItem, NinetyBullet } from '@components/CusackMode/NinetyBullet';

export default function Contact() {

const NinetyListItem = ({ children }) => (
  <BulletItem>
    <NinetyBullet />
    {children}
  </BulletItem>
);

const CusackBulletList = () => (
    <ul>
      <NinetyListItem>First item</NinetyListItem>
      <NinetyListItem>Second item</NinetyListItem>
      <NinetyListItem>Third item</NinetyListItem>
    </ul>
  );
  return (
    <PageContent>
        <h1>Cusack Tests</h1>
        <CusackBulletList />
    </PageContent>
  )
}
