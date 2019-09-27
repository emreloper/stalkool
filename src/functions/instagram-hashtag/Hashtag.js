import React from 'react';
import { Helmet } from 'react-helmet';

import numberToLetterString from '../../common/numberToLetterString';
import NumberToLetterStringMacro from '../../common/numberToLetterString.macro';
import Skeleton from '../../components/skeleton/Skeleton';
import Container from '../../common/container/Container';
import Space from '../../common/space/Space';
import Divider from '../../common/divider/Divider';
import Typography from '../../common/typography/Typography';
import TimelineHero from '../../components/timeline-hero/TimelineHero';
import Timeline from '../../components/timeline/Timeline';

export default function Hashtag({ hashtag }) {
  const {
    name,
    profile_pic_url,
    edge_hashtag_to_top_posts,
    edge_hashtag_to_media
  } = hashtag;
  const loadmore = edge_hashtag_to_media.page_info.has_next_page
    ? `https://www.stalkool.com/api/instagram/hashtag/${name}/?first=24&after=${
        edge_hashtag_to_media.page_info.end_cursor
      }`
    : '';

  return (
    <Skeleton>
      <Helmet>
        <title>{`View #${name} Instagram hashtag photos and videos online. ${
          edge_hashtag_to_media.count
        } #${name} inspirations`}</title>
        <meta
          name="description"
          content={`Download #${name} Instagram hashtag photos and videos on stalkool.`}
        />
        <link
          rel="canonical"
          href={`https://www.stalkool.com/instagram/hashtag/${name}/`}
        />
      </Helmet>
      <NumberToLetterStringMacro />
      <Container component="main">
        <Space height={4} />
        <TimelineHero
          avatar={
            <amp-img
              layout="flex-item"
              src={profile_pic_url}
              alt={`#${name} Instagram hashtag profile picture`}
            />
          }
          header={
            <>
              <Typography component="h1" variant="h6">
                #{name}
              </Typography>
              <Typography variant="body2">
                {numberToLetterString(edge_hashtag_to_media.count)} posts
              </Typography>
            </>
          }
        />
        <Space height={4} />
        <Divider removeGutter />
        <Space height={4} />
        <Timeline
          top={edge_hashtag_to_top_posts.edges}
          recent={edge_hashtag_to_media.edges}
          loadmore={loadmore}
        />
      </Container>
    </Skeleton>
  );
}
