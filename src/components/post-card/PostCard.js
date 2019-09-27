import React from 'react';
import { fromUnixTime, format } from 'date-fns';

import styles from './PostCard.css';

import numberToLetterString from '../../common/numberToLetterString';
import parseCaption from '../../common/parseCaption';
import Space from '../../common/space/Space';
import Divider from '../../common/divider/Divider';
import Typography from '../../common/typography/Typography';
import Link from '../../common/link/Link';
import Avatar from '../../common/avatar/Avatar';
import Button from '../../common/button/Button';
import VerifiedUsernameLink from '../verified-username-link/VerifiedUsernameLink';
import PostMedia from '../post-media/PostMedia';

export default function PostCard({
  dimensions,
  display_resources,
  display_url,
  edge_media_preview_like,
  edge_media_to_caption,
  edge_sidecar_to_children,
  is_video,
  location,
  owner,
  video_url,
  taken_at_timestamp
}) {
  const caption = edge_media_to_caption.edges.length
    ? edge_media_to_caption.edges[0].node.text
    : '';
  const parsedCaption = parseCaption(caption);
  const downloadUrl = is_video ? video_url : display_url;
  const takenAt = fromUnixTime(taken_at_timestamp);

  return (
    <>
      {edge_sidecar_to_children && (
        <amp-state id="postMedias">
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                edge_sidecar_to_children.edges.map(({ node }) =>
                  node.is_video ? node.video_url : node.display_url
                )
              )
            }}
          />
        </amp-state>
      )}
      <article className={styles.article}>
        <header className={styles.header}>
          <Avatar
            component={Link}
            underline="none"
            href={`/instagram/profile/${owner.username}/`}
          >
            <amp-img
              layout="flex-item"
              src={owner.profile_pic_url}
              alt={`@${owner.username} ${
                owner.full_name
              } Instagram profile picture`}
            />
          </Avatar>
          <Space width={4} />
          <div>
            <div>
              <VerifiedUsernameLink
                component="h1"
                username={owner.username}
                is_verified={owner.is_verified}
              />
            </div>
            {location && (
              <div>
                <Typography
                  component={Link}
                  href={`/instagram/location/${location.id}/${location.slug}/`}
                  variant="body2"
                  color="primary"
                  underline="none"
                  nowrap
                >
                  {location.name}
                </Typography>
              </div>
            )}
          </div>
        </header>
        <Divider className={styles['header-divider']} />
        <section className={styles.media}>
          <PostMedia
            {...{
              dimensions,
              display_resources,
              display_url,
              edge_sidecar_to_children,
              is_video,
              owner,
              video_url,
              caption
            }}
          />
        </section>
        <section className={styles.section}>
          <Typography variant="caption">
            {numberToLetterString(edge_media_preview_like.count)} likes
          </Typography>
          <div className={styles['actions']}>
            <Button
              component="a"
              variant="contained"
              href={downloadUrl}
              data-amp-bind-href={
                edge_sidecar_to_children
                  ? 'postMedias[postMediaSlideIndex]'
                  : `'${downloadUrl}'`
              }
              target="_blank"
              rel="noopener"
            >
              DOWNLOAD
            </Button>
            <amp-social-share type="system" />
          </div>
          <Space height={4} />
          <Divider />
          <Space height={4} />
          <div>
            <div>
              <Typography component="h2" variant="body2" wordBreak>
                <VerifiedUsernameLink
                  username={owner.username}
                  is_verified={owner.is_verified}
                />{' '}
                {parsedCaption}
              </Typography>
            </div>
            <div>
              <Typography
                component="time"
                variant="caption"
                color="secondary"
                dateTime={takenAt.toISOString()}
              >
                {format(takenAt, 'PP')}
              </Typography>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
