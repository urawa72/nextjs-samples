import { ReactElement } from 'react';
import BaseLayout from '../components/layout/BaseLayout';

export default function About() {
  return <div>This is a about page!!!!!!!</div>;
}

About.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
