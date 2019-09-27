import React from 'react';
import { Helmet } from 'react-helmet';
import { fromUnixTime } from 'date-fns';

import numberToLetterString from '../../common/numberToLetterString';
import Skeleton from '../../components/skeleton/Skeleton';
import Container from '../../common/container/Container';
import Space from '../../common/space/Space';
import PostCard from '../../components/post-card/PostCard';
import Comments from '../../components/comments/Comments';

export default function Post({ shortcode_media }) {
  const {
    edge_media_preview_comment,
    edge_media_preview_like,
    edge_media_to_caption,
    edge_media_to_parent_comment,
    owner,
    shortcode,
    taken_at_timestamp
  } = shortcode_media;
  const caption = edge_media_to_caption.edges.length
    ? edge_media_to_caption.edges[0].node.text
    : '';
  const takenAt = fromUnixTime(taken_at_timestamp);

  return (
    <Skeleton>
      <Helmet>
        <title>{`View ${owner.full_name} (@${
          owner.username
        }) Instagram post with ${numberToLetterString(
          edge_media_preview_like.count
        )} likes and ${numberToLetterString(
          edge_media_preview_comment.count
        )} comments. ${caption}`}</title>
        <meta
          name="description"
          content={`Download ${owner.full_name} (@${
            owner.username
          }) Instagram post with ${numberToLetterString(
            edge_media_preview_like.count
          )} likes and ${numberToLetterString(
            edge_media_preview_comment.count
          )} comments. ${caption}`}
        />
        <link
          rel="canonical"
          href={`https://www.stalkool.com/instagram/post/${shortcode}/`}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'ImageObject',
              caption,
              representativeOfPage: 'http://schema.org/True',
              uploadDate: takenAt.toISOString(),
              author: {
                '@type': 'Person',
                alternateName: owner.username,
                mainEntityofPage: {
                  '@type': 'ProfilePage',
                  '@id': `https://www.stalkool.com/instagram/profile/${
                    owner.username
                  }/`
                }
              },
              comment: edge_media_preview_comment.edges.map(({ node }) => ({
                '@type': 'Comment',
                text: node.text,
                author: {
                  '@type': 'Person',
                  alternateName: node.owner.username,
                  mainEntityofPage: {
                    '@type': 'ProfilePage',
                    '@id': `https://www.stalkool.com/instagram/profile/${
                      node.owner.username
                    }/`
                  }
                }
              })),
              commentCount: edge_media_preview_comment.count,
              interactionStatistic: {
                '@type': 'InteractionCounter',
                interactionType: { '@type': 'LikeAction' },
                userInteractionCount: edge_media_preview_like.count
              },
              mainEntityofPage: {
                '@type': 'ItemPage',
                '@id': `https://www.stalkool.com/instagram/post/${shortcode}/`
              },
              description: `Download and view @${owner.username} ${
                owner.full_name
              } Instagram post photos, videos and IGTV videos anonymously for: ${caption}`,
              name: `@${owner.username} ${
                owner.full_name
              } Instagram post, download and view photos, videos and IGTV videos anonymously for: ${caption}`
            })
          }}
        />
      </Helmet>
      <Container>
        <Space height={4} />
        <main>
          <PostCard caption={caption} {...shortcode_media} />
          <Space height={6} />
          <Comments {...edge_media_to_parent_comment} />
        </main>
      </Container>
    </Skeleton>
  );
}
