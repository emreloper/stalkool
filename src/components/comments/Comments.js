import React from 'react';

import parseCaption from '../../common/parseCaption';
import Typography from '../../common/typography/Typography';
import Space from '../../common/space/Space';
import Link from '../../common/link/Link';
import {
  List,
  ListItem,
  ListAvatar,
  ListCaption,
  ListDivider
} from '../../common/list/List';

export default function Comments({ edges = [] }) {
  if (edges.length === 0) return null;

  return (
    <article>
      <header>
        <Typography component="h3" variant="h6">
          Post Comments
        </Typography>
      </header>
      <Space height={2} />
      <List removeGutter>
        {edges.map(({ node }) => {
          const parsedText = parseCaption(node.text);

          return (
            <React.Fragment key={node.id}>
              <ListItem>
                <ListAvatar
                  component={Link}
                  underline="none"
                  href={`/instagram/profile/${node.owner.username}/`}
                >
                  <amp-img
                    layout="flex-item"
                    src={node.owner.profile_pic_url}
                    alt={`@${node.owner.username} Instagram profile picture`}
                  />
                </ListAvatar>
                <ListCaption
                  primary={className => (
                    <Typography
                      className={className}
                      component={Link}
                      variant="subtitle2"
                      color="primary"
                      underline="none"
                      href={`/instagram/profile/${node.owner.username}/`}
                    >
                      @{node.owner.username}
                    </Typography>
                  )}
                  secondary={className => (
                    <Typography className={className} variant="body2" wordBreak>
                      {parsedText}
                    </Typography>
                  )}
                />
              </ListItem>
              <ListDivider />
            </React.Fragment>
          );
        })}
      </List>
    </article>
  );
}
