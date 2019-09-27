import React from 'react';

import styles from './ProfileHero.css';

import numberToLetterString from '../../common/numberToLetterString';
import Space from '../../common/space/Space';
import Typography from '../../common/typography/Typography';
import Link from '../../common/link/Link';
import Icon from '../../common/icon/Icon';
import Button from '../../common/button/Button';
import TimelineHero from '../../components/timeline-hero/TimelineHero';

export default function ProfileHero(props) {
  const {
    biography,
    external_url,
    edge_followed_by,
    edge_follow,
    full_name,
    is_verified,
    profile_pic_url,
    profile_pic_url_hd,
    username,
    edge_owner_to_timeline_media
  } = props;

  return (
    <TimelineHero
      avatar={
        <amp-img
          layout="flex-item"
          src={profile_pic_url}
          alt={`@${username} ${full_name} Instagram profile picture`}
        />
      }
      header={
        <>
          <div className={styles['username-row']}>
            <Typography component="h2" variant="h6" nowrap>
              @{username}
            </Typography>
            {is_verified && (
              <>
                <Space width={2} />
                <Icon>verified_user</Icon>
              </>
            )}
          </div>
          <Space height={2} />
          <Typography
            className={styles['stats-row']}
            variant="body2"
            color="secondary"
            align="center"
          >
            <div>
              <Typography
                component="strong"
                variant="subtitle2"
                color="primary"
              >
                {numberToLetterString(edge_owner_to_timeline_media.count)}
              </Typography>{' '}
              posts
            </div>
            <div>
              <Typography
                component="strong"
                variant="subtitle2"
                color="primary"
              >
                {numberToLetterString(edge_followed_by.count)}
              </Typography>{' '}
              followers
            </div>
            {/* <div>
              <Typography
                component="strong"
                variant="subtitle2"
                color="primary"
              >
                {numberToLetterString(edge_follow.count)}
              </Typography>{' '}
              following
            </div> */}
          </Typography>
          <Space height={2} />
          <div className={styles.actions}>
            <Button
              component="a"
              variant="contained"
              href={profile_pic_url_hd}
              target="_blank"
              rel="noopener"
            >
              DOWNLOAD
            </Button>
            <amp-social-share type="system" />
          </div>
        </>
      }
    >
      <Typography component="h1" variant="subtitle2">
        {full_name}
      </Typography>
      {/* <Typography component="p" variant="body2">
        {biography}
      </Typography>
      <Typography
        component={Link}
        variant="body2"
        href={external_url}
        target="_blank"
        rel="noopener"
      >
        {external_url}
      </Typography> */}
    </TimelineHero>
  );
}
