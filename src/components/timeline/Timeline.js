import React from 'react';

import styles from './Timeline.css';

import Space from '../../common/space/Space';
import Grid from '../../common/grid/Grid';
import Typography from '../../common/typography/Typography';
import PostCard from '../post-list-card/PostCard';
import PostCardTemplate from '../post-list-card/PostCard.template';

export default function Timeline({ top = [], recent = [], loadmore = '' }) {
  return (
    <>
      {loadmore && (
        <script id="LoadMore" type="text/plain" template="amp-mustache">
          <Grid columns={{ sm: 3 }}>
            {'{{#edges}}'}
            <PostCardTemplate />
            {'{{/edges}}'}
          </Grid>
        </script>
      )}
      {top.length > 0 && (
        <>
          <Typography variant="h6">Top Posts</Typography>
          <Space height={5} />
          <Grid columns={{ sm: 3 }}>
            {top.map(({ node }) => (
              <PostCard key={node.id} {...node} />
            ))}
          </Grid>
        </>
      )}
      {recent.length > 0 && (
        <>
          {top.length > 0 && (
            <>
              <Space height={6} />
              <Typography variant="h6">Recent Posts</Typography>
              <Space height={5} />
            </>
          )}
          <Grid columns={{ sm: 3 }}>
            {recent.map(({ node }) => (
              <PostCard key={node.id} {...node} />
            ))}
          </Grid>
        </>
      )}
      {loadmore && (
        <>
          <Space height={5} />
          <div className={styles['load-more']}>
            <amp-list
              layout="flex-item"
              template="LoadMore"
              load-more="auto"
              items="."
              single-item
              src={loadmore}
            />
          </div>
        </>
      )}
    </>
  );
}
