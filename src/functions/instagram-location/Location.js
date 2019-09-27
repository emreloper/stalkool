import React from 'react';
import { Helmet } from 'react-helmet';

import numberToLetterString from '../../common/numberToLetterString';
import Skeleton from '../../components/skeleton/Skeleton';
import Container from '../../common/container/Container';
import Space from '../../common/space/Space';
import Divider from '../../common/divider/Divider';
import Typography from '../../common/typography/Typography';
import TimelineHero from '../../components/timeline-hero/TimelineHero';
import Timeline from '../../components/timeline/Timeline';

export default function Location({ location }) {
  const {
    id,
    name,
    profile_pic_url,
    edge_location_to_top_posts,
    edge_location_to_media,
    slug
  } = location;

  return (
    <Skeleton>
      <Helmet>
        <title>{`View ${name} Instagram photos and videos online. ${
          edge_location_to_media.count
        } ${name} posts`}</title>
        <meta
          name="description"
          content={`Download ${name} Instagram photos and videos on stalkool.`}
        />
        <link
          rel="canonical"
          href={`https://www.stalkool.com/instagram/location/${id}/${slug}/`}
        />
      </Helmet>
      <Container component="main">
        <Space height={4} />
        <TimelineHero
          avatar={
            <amp-img
              layout="flex-item"
              src={profile_pic_url}
              alt={`${name} Instagram location profile picture`}
            />
          }
          header={
            <>
              <Typography component="h1" variant="h6">
                {name}
              </Typography>
              <Typography variant="body2">
                {numberToLetterString(edge_location_to_media.count)} posts
              </Typography>
            </>
          }
        />
        <Space height={4} />
        <Divider removeGutter />
        <Space height={4} />
        <Timeline
          top={edge_location_to_top_posts.edges}
          recent={edge_location_to_media.edges}
        />
      </Container>
    </Skeleton>
  );
}
