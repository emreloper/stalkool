import React from 'react';
import { Helmet } from 'react-helmet';

import styles from './IGTV.css';

import Skeleton from '../../components/skeleton/Skeleton';
import Container from '../../common/container/Container';
import Space from '../../common/space/Space';
import Grid from '../../common/grid/Grid';
import Typography from '../../common/typography/Typography';
import TabsContainer from '../../common/tabs-container/TabsContainer';
import Tab from '../../common/tab/Tab';
import ProfileHero from '../../components/profile-hero/ProfileHero';
import IGTVListCard from '../../components/igtv-list-card/IGTVListCard';

export default function Profile({ user }) {
  const {
    edge_follow,
    edge_followed_by,
    full_name,
    is_private,
    username,
    edge_felix_video_timeline,
    edge_owner_to_timeline_media
  } = user;

  return (
    <Skeleton>
      <Helmet>
        <title>{`View ${full_name} (@${username}) IGTV videos online. ${edge_followed_by.count} followers, ${edge_follow.count} following, ${edge_owner_to_timeline_media.count} posts`}</title>
        <meta
          name="description"
          content={`Download ${full_name} (@${username}) IGTV videos on stalkool.`}
        />
        <link
          rel="canonical"
          href={`https://www.stalkool.com/instagram/profile/${username}/igtv/`}
        />
      </Helmet>
      <Container component="main">
        <Space height={4} />
        <ProfileHero {...user} />
        <Space height={4} />
        <TabsContainer component="div" className={styles['tabs-container']}>
          <Tab component="a" href={`/instagram/profile/${username}/`}>
            Posts
          </Tab>
          <Tab
            component="a"
            active={true}
            href={`/instagram/profile/${username}/igtv/`}
          >
            IGTV
          </Tab>
        </TabsContainer>
        <Space height={4} />
        {is_private ? (
          <Typography variant="h5" align="center">
            Private account
          </Typography>
        ) : (
          <Grid columns={{ sm: 3, md: 4 }}>
            {edge_felix_video_timeline.edges.map(({ node }) => (
              <IGTVListCard key={node.id} {...node} />
            ))}
          </Grid>
        )}
      </Container>
    </Skeleton>
  );
}
