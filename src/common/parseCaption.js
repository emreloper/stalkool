import React from 'react';

import Typography from './typography/Typography';
import Link from './link/Link';

export default function parseCaption(caption = '') {
  if (typeof caption !== 'string' || !caption.length) return caption;

  return strReplaceAsArray(caption, /[@|#][^\s@#]+/gi, (matched, i) => {
    const type = matched.substring(0, 1) === '@' ? 'profile' : 'hashtag';
    const param = matched.substring(1).toLowerCase();

    return (
      <Typography
        key={`${matched}-${i}`}
        component={Link}
        href={`/instagram/${type}/${param}/`}
      >
        {matched}
      </Typography>
    );
  });
}

function strReplaceAsArray(text, regex, replacer) {
  const chunks = text.split(regex);
  const matches = text.match(regex);

  return matches === null
    ? text
    : chunks.reduce(
        (replaced, chunk, i) =>
          matches[i]
            ? [...replaced, chunk, replacer(matches[i], i)]
            : [...replaced, chunk],
        []
      );
}
