import React from 'react';
import { Helmet } from 'react-helmet';

import NumberToLetterStringMacro from '../../common/numberToLetterString.macro';
import Skeleton from '../../components/skeleton/Skeleton';
import Space from '../../common/space/Space';
import Container from '../../common/container/Container';
import Divider from '../../common/divider/Divider';
import Typography from '../../common/typography/Typography';
import HomeHero from '../../components/home-hero/HomeHero';
import HashtagCarousel from '../../components/hashtag-carousel/HashtagCarousel';

const INSPIRATIONS = ['style', 'travel', 'food', 'beauty', 'diy'];

export default function Home() {
  return (
    <Skeleton>
      <Helmet>
        <title>{`Instagram Web Viewer, Download Instagram Photos and Videos Online`}</title>
        <meta
          name="description"
          content={`Download Instagram photos and videos online on stalkool.`}
        />
        <link rel="canonical" href={`https://www.stalkool.com/`} />
      </Helmet>
      <NumberToLetterStringMacro />
      <HomeHero />
      <Space height={6} />
      <Container>
        <Typography variant="h5">Top Inspirations</Typography>
        <Space height={4} />
        <Divider />
        {INSPIRATIONS.map(inspiration => (
          <React.Fragment key={`inspiration-${inspiration}`}>
            <Space height={6} />
            <HashtagCarousel hashtag={inspiration} />
          </React.Fragment>
        ))}
      </Container>
    </Skeleton>
  );
}
