import React from 'react';
import { fromUnixTime, format } from 'date-fns';

import styles from './IGTVListCard.css';

import numberToLetterString from '../../common/numberToLetterString';
import secondsToMinutes from '../../common/secondsToMinutes';
import parseCaption from '../../common/parseCaption';
import Typography from '../../common/typography/Typography';
import Link from '../../common/link/Link';
import Button from '../../common/button/Button';
import Card from '../../common/card/Card';
import CardMedia from '../../common/card-media/CardMedia';
import CardBody from '../../common/card-body/CardBody';
import CardActions from '../../common/card-actions/CardActions';

export default function PostListCard(props) {
  const {
    owner,
    shortcode,
    taken_at_timestamp,
    thumbnail_src,
    video_duration,
    video_view_count
  } = props;
  const comments = props.edge_media_to_comment.count;
  const takenAt = fromUnixTime(taken_at_timestamp);
  const caption = props.edge_media_to_caption.edges.length
    ? props.edge_media_to_caption.edges[0].node.text
    : '';
  const parsedCaption = parseCaption(caption);

  return (
    <Card>
      <CardMedia>
        <Link href={`/instagram/post/${shortcode}/`}>
          <amp-img
            layout="responsive"
            width="1"
            height="1"
            src={thumbnail_src}
            alt={`@${owner.username} IGTV Video: ${caption}`}
          />
        </Link>
        <Typography className={styles['media-icon']}>
          {secondsToMinutes(video_duration)}
        </Typography>
      </CardMedia>
      <CardBody className={styles.body}>
        <div className={styles['likes-and-comments']}>
          <Typography component="strong" variant="caption" weight="medium">
            {numberToLetterString(video_view_count)} views
          </Typography>
          <Typography component="strong" variant="caption" weight="medium">
            {numberToLetterString(comments)} comments
          </Typography>
        </div>
        <Typography component="p" variant="body2" clamp={3} wordBreak>
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
        <Button
          className={styles.action}
          component="a"
          href={`/instagram/post/${shortcode}/`}
        >
          Watch & Download
        </Button>
      </CardActions>
    </Card>
  );
}
