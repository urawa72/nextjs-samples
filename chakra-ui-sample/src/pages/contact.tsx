import { ReactElement } from 'react';
import BaseLayout from '../components/layout/BaseLayout';

export default function Contact() {
  return <div>This is a contact page!!!!!!!</div>;
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
