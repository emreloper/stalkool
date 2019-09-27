import React from 'react';

import styles from './HashtagList.css';

import Space from '../../common/space/Space';
import {
  List,
  ListItem,
  ListAvatar,
  ListCaption,
  ListDivider
} from '../../common/list/List';
import Link from '../../common/link/Link';
import Typography from '../../common/typography/Typography';

export default function HashtagList({ heading = '', hashtags }) {
  return (
    <article>
      <header>
        {typeof heading === 'string' ? (
          <Typography component="h3" variant="h6">
            {heading}
          </Typography>
        ) : (
          heading
        )}
      </header>
      <Space height={2} />
      <List className={styles.list} responsive={true}>
        {hashtags.map(({ name }, i) => (
          <React.Fragment key={`${name}-${i}`}>
            <li>
              <ListItem
                component={Link}
                href={`/instagram/hashtag/${name}/`}
                underline="none"
              >
                <ListAvatar align="center">
                  <Typography variant="h5">#</Typography>
                </ListAvatar>
                <ListCaption primary={`#${name}`} />
              </ListItem>
            </li>
            <ListDivider />
          </React.Fragment>
        ))}
      </List>
    </article>
  );
}
