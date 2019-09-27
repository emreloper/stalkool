import React from 'react';
import { Helmet } from 'react-helmet';

import Skeleton from '../../components/skeleton/Skeleton';
import Container from '../../common/container/Container';
import Space from '../../common/space/Space';

export default function Home({ title, description, canonical, children }) {
  return (
    <Skeleton>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <Container>
        <Space height={4} />
        <main>{children}</main>
      </Container>
    </Skeleton>
  );
}
