import React from 'react';

import styles from './HashtagCarousel.css';

import createUrl from '../../common/createUrl';
import Avatar from '../../common/avatar/Avatar';
import Link from '../../common/link/Link';
import Typography from '../../common/typography/Typography';
import PostCardTemplate from '../post-list-card/PostCard.template';
import Icon from '../../common/icon/Icon';
import Button from '../../common/button/Button';

const templateId = 'HashtagCarouselTemplate';

export default function HashtagCarousel({ hashtag }) {
  return (
    <>
      <script id={templateId} type="text/plain" template="amp-mustache">
        {'{{#data.hashtag}}'}
        <header className={styles.header}>
          <Avatar className={styles.avatar}>
            <amp-img layout="flex-item" src="{{profile_pic_url}}" />
          </Avatar>
          <Typography component="h3" variant="h6">
            {'#{{name}}'}
          </Typography>
          <Button
            className={styles['see-more']}
            component={Link}
            color="secondary"
            underline="none"
            href="/instagram/hashtag/{{name}}"
          >
            <span>See more posts</span>
            <Icon>chevron_right</Icon>
          </Button>
        </header>
        <amp-carousel
          class={styles.carousel}
          layout="fixed-height"
          height="493"
          controls
        >
          {'{{#edge_hashtag_to_top_posts.edges}}'}
          <div className={styles['post-card']}>
            <PostCardTemplate />
          </div>
          {'{{/edge_hashtag_to_top_posts.edges}}'}
        </amp-carousel>
        {'{{/data.hashtag}}'}
      </script>
      <amp-list
        layout="fixed-height"
        height="555"
        template={templateId}
        items="."
        single-item
        src={createUrl(hashtag)}
      />
    </>
  );
}
