import { ReactElement } from 'react';
import BaseLayout from '../components/layout/BaseLayout';

export default function Home() {
  return <div>This is a home page!!!!!!!</div>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
