import React from 'react';
import { Helmet } from 'react-helmet';

import styles from './Profile.css';

import NumberToLetterStringMacro from '../../common/numberToLetterString.macro';
import Skeleton from '../../components/skeleton/Skeleton';
import Container from '../../common/container/Container';
import Space from '../../common/space/Space';
import Typography from '../../common/typography/Typography';
import TabsContainer from '../../common/tabs-container/TabsContainer';
import Tab from '../../common/tab/Tab';
import ProfileHero from '../../components/profile-hero/ProfileHero';
import Timeline from '../../components/timeline/Timeline';

export default function Profile({ user }) {
  const {
    biography,
    external_url,
    edge_follow,
    edge_followed_by,
    full_name,
    id,
    is_private,
    username,
    edge_felix_video_timeline,
    edge_owner_to_timeline_media
  } = user;
  const loadmore = edge_owner_to_timeline_media.page_info.has_next_page
    ? `https://www.stalkool.com/api/instagram/profile/${id}/?first=24&after=${
        edge_owner_to_timeline_media.page_info.end_cursor
      }`
    : '';

  return (
    <Skeleton>
      <Helmet>
        <title>{`View ${full_name} (@${username}) Instagram profile online. ${
          edge_followed_by.count
        } followers, ${edge_follow.count} following, ${
          edge_owner_to_timeline_media.count
        } posts`}</title>
        <meta
          name="description"
          content={`Download ${full_name} (@${username}) Instagram photos and videos on stalkool.`}
        />
        <link
          rel="canonical"
          href={`https://www.stalkool.com/instagram/profile/${username}/`}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'Person',
              name: full_name,
              alternateName: username,
              description: biography,
              url: external_url,
              mainEntityofPage: {
                '@type': 'ProfilePage',
                '@id': `https://www.stalkool.com/instagram/profile/${username}/`,
                interactionStatistic: {
                  '@type': 'InteractionCounter',
                  interactionType: 'http://schema.org/FollowAction',
                  userInteractionCount: edge_followed_by.count
                }
              },
              image: ''
            })
          }}
        />
      </Helmet>
      <NumberToLetterStringMacro />
      <Container component="main">
        <Space height={4} />
        <ProfileHero {...user} />
        <Space height={4} />
        <TabsContainer component="div" className={styles['tabs-container']}>
          <Tab
            component="a"
            active={true}
            href={`/instagram/profile/${username}/`}
          >
            Posts
          </Tab>
          {edge_felix_video_timeline.count > 0 && (
            <Tab component="a" href={`/instagram/profile/${username}/igtv/`}>
              IGTV
            </Tab>
          )}
        </TabsContainer>
        <Space height={4} />
        {is_private ? (
          <Typography variant="h5" align="center">
            Private account
          </Typography>
        ) : (
          <Timeline
            recent={edge_owner_to_timeline_media.edges}
            loadmore={loadmore}
          />
        )}
      </Container>
    </Skeleton>
  );
}
