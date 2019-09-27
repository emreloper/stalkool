import React from 'react';
import { fromUnixTime, format } from 'date-fns';

import styles from './PostCard.css';

import mapResourcesToSrcset from '../../common/mapResourcesToSrcset';
import numberToLetterString from '../../common/numberToLetterString';
import parseCaption from '../../common/parseCaption';
import Divider from '../../common/divider/Divider';
import Typography from '../../common/typography/Typography';
import Link from '../../common/link/Link';
import Button from '../../common/button/Button';
import Icon from '../../common/icon/Icon';
import Card from '../../common/card/Card';
import CardMedia from '../../common/card-media/CardMedia';
import CardBody from '../../common/card-body/CardBody';
import CardActions from '../../common/card-actions/CardActions';

export default function PostListCard(props) {
  const {
    is_video,
    owner,
    shortcode,
    taken_at_timestamp,
    thumbnail_resources,
    thumbnail_src,
    video_view_count
  } = props;
  const likes = props.edge_media_preview_like.count;
  const comments = props.edge_media_to_comment.count;
  const takenAt = fromUnixTime(taken_at_timestamp);
  const caption = props.edge_media_to_caption.edges.length
    ? props.edge_media_to_caption.edges[0].node.text
    : '';
  const parsedCaption = parseCaption(caption);

  return (
    <Card>
      <CardMedia
        className={styles['card-media']}
        component={Link}
        underline="none"
        href={`/instagram/post/${shortcode}/`}
      >
        <amp-img
          layout="responsive"
          width="1"
          height="1"
          src={thumbnail_src}
          srcset={mapResourcesToSrcset(thumbnail_resources)}
          alt={`@${owner.username} post: ${caption}`}
        />
        {is_video && <Icon className={styles['media-icon']}>videocam</Icon>}
      </CardMedia>
      <div className={styles['stats-container']}>
        <div className={styles.stat}>
          <Icon className={styles['stat-icon']} color="secondary">
            favorite
          </Icon>
          <Typography component="span" variant="caption" color="secondary">
            {numberToLetterString(likes)}
          </Typography>
        </div>
        <div className={styles.stat}>
          <Icon className={styles['stat-icon']} color="secondary">
            comment
          </Icon>
          <Typography component="span" variant="caption" color="secondary">
            {numberToLetterString(comments)}
          </Typography>
        </div>
        {video_view_count > 0 && (
          <div className={styles.stat}>
            <Icon className={styles['stat-icon']} color="secondary">
              remove_red_eye
            </Icon>
            <Typography component="span" variant="caption" color="secondary">
              {numberToLetterString(video_view_count)}
            </Typography>
          </div>
        )}
      </div>
      <Divider />
      <CardBody className={styles.body}>
        <Typography component="p" variant="body2" clamp={5} wordBreak>
          {parsedCaption}
        </Typography>
        <Typography
          component="time"
          variant="caption"
          color="secondary"
          dateTime={takenAt.toISOString()}
        >
          {format(takenAt, 'PP')}
        </Typography>
      </CardBody>
      <CardActions>
        <Button component="a" href={`/instagram/post/${shortcode}/`}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
