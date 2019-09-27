import React from 'react';

import styles from './PostCard.css';

import Icon from '../../common/icon/Icon';
import Divider from '../../common/divider/Divider';
import Link from '../../common/link/Link';
import Typography from '../../common/typography/Typography';
import Button from '../../common/button/Button';
import Card from '../../common/card/Card';
import CardMedia from '../../common/card-media/CardMedia';
import CardBody from '../../common/card-body/CardBody';
import CardActions from '../../common/card-actions/CardActions';

export default function PostCardTemplate({ className }) {
  return (
    <Card className={className}>
      <CardMedia
        className={styles['card-media']}
        component={Link}
        underline="none"
        href="/instagram/post/{{node.shortcode}}"
      >
        <amp-img
          layout="responsive"
          width="1"
          height="1"
          src="{{node.thumbnail_src}}"
          alt="@{{node.edge_media_to_caption.edges.0.node.text}}"
        />
        {'{{#node.is_video}}'}
        <Icon className={styles['media-icon']}>videocam</Icon>
        {'{{/node.is_video}}'}
      </CardMedia>
      <div
        className={
          styles['stats-container'] + ' ' + styles['stats-container-densed']
        }
      >
        <div className={styles.stat}>
          <Icon className={styles['stat-icon']} color="secondary">
            favorite
          </Icon>
          <Typography
            component="span"
            variant="caption"
            color="secondary"
            data-amp-bind-text="numberToLetterStringMacro({{node.edge_media_preview_like.count}})"
          >
            0
          </Typography>
        </div>
        <div className={styles.stat}>
          <Icon className={styles['stat-icon']} color="secondary">
            comment
          </Icon>
          <Typography
            component="span"
            variant="caption"
            color="secondary"
            data-amp-bind-text="numberToLetterStringMacro({{node.edge_media_to_comment.count}})"
          >
            0
          </Typography>
        </div>
        {'{{#node.video_view_count}}'}
        <div className={styles.stat}>
          <Icon className={styles['stat-icon']} color="secondary">
            remove_red_eye
          </Icon>
          <Typography
            component="span"
            variant="caption"
            color="secondary"
            data-amp-bind-text="numberToLetterStringMacro({{node.video_view_count}})"
          >
            0
          </Typography>
        </div>
        {'{{/node.video_view_count}}'}
      </div>
      <Divider />
      <CardBody className={styles.body}>
        {'{{#node.edge_media_to_caption.edges}}'}
        <Typography component="p" variant="body2" clamp={5} wordBreak>
          {'{{node.text}}'}
        </Typography>
        {'{{/node.edge_media_to_caption.edges}}'}
      </CardBody>
      <CardActions>
        <Button component="a" href="/instagram/post/{{node.shortcode}}/">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
