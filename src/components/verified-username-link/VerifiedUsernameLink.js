import React from 'react';

import styles from './VerifiedUsernameLink.css';

import Space from '../../common/space/Space';
import Icon from '../../common/icon/Icon';
import Typography from '../../common/typography/Typography';
import Link from '../../common/link/Link';

export default function VerifiedUsernameLink({
  component = 'strong',
  username,
  is_verified
}) {
  return (
    <Typography
      className={styles.root}
      component={Link}
      variant="subtitle2"
      color="primary"
      underline="none"
      href={`/instagram/profile/${username}/`}
    >
      <Typography component={component} variant="subtitle2" nowrap>
        @{username}
      </Typography>
      {is_verified && (
        <>
          <Space width={1} />
          <Typography component={Icon} variant="subtitle2">
            verified_user
          </Typography>
        </>
      )}
    </Typography>
  );
}
