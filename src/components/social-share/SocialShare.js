import React from 'react';

import styles from './SocialShare.css';

export default function SocialShare() {
  return (
    <div className={styles.root}>
      <amp-social-share
        type="facebook"
        data-param-app_id="192306225045114"
        aria-label="Share this on Facebook!"
      />
      <amp-social-share type="twitter" aria-label="Share this on Twitter!" />
      <amp-social-share
        type="pinterest"
        aria-label="Share this on Pinterest!"
      />
    </div>
  );
}
