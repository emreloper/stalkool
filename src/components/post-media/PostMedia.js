import React from 'react';

import styles from './PostMedia.css';

import mapResourcesToSrcset from '../../common/mapResourcesToSrcset';

function VideoOrImg({
  dimensions,
  display_resources,
  display_url,
  is_video,
  video_url,
  owner,
  caption
}) {
  return is_video ? (
    <amp-video
      layout="responsive"
      width={dimensions.width}
      height={dimensions.height}
      src={video_url}
      poster={display_url}
      controls=""
      loop=""
      artwork={display_url}
      artist={owner.full_name}
      title={caption}
    />
  ) : (
    <amp-img
      layout="responsive"
      width={dimensions.width}
      height={dimensions.height}
      src={display_url}
      srcset={mapResourcesToSrcset(display_resources)}
      alt={`@${owner.username} ${owner.full_name} Instagram post: ${caption}`}
    />
  );
}

export default function PostMedia(props) {
  const { dimensions, edge_sidecar_to_children, owner, caption } = props;

  return edge_sidecar_to_children ? (
    <article className={styles['carousel-container']}>
      <amp-carousel
        id="PostMediaCarousel"
        layout="responsive"
        width={dimensions.width}
        height={dimensions.height}
        type="slides"
        on="slideChange:AMP.setState({ postMediaSlideIndex: event.index })"
      >
        {edge_sidecar_to_children.edges.map(({ node }) => (
          <VideoOrImg key={node.id} owner={owner} caption={caption} {...node} />
        ))}
      </amp-carousel>
      <section className={styles['carousel-buttons-container']}>
        {edge_sidecar_to_children.edges.map(({ node }, i) => (
          <button
            key={`${node.id}-cb`}
            className={styles['carousel-button'].concat(
              i === 0 ? ` ${styles['carousel-button--is-active']}` : ''
            )}
            data-amp-bind-class={`'${
              styles['carousel-button']
            }' + (postMediaSlideIndex == ${i} ? ' ${
              styles['carousel-button--is-active']
            }' : '')`}
            type="button"
            aria-label={`Slide ${i}`}
            on={`tap:PostMediaCarousel.goToSlide(index=${i})`}
          />
        ))}
      </section>
    </article>
  ) : (
    <VideoOrImg {...props} />
  );
}
