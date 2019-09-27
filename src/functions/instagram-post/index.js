import 'source-map-support/register';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { fetchPost } from 'instagram-web-api-client';

import renderToStaticMarkup from '../../common/renderToStaticMarkup';
import NotFound from '../../components/not-found/NotFound';
import Post from './Post';

const css = fs.readFileSync(path.resolve(__dirname, 'index.css'), {
  encoding: 'utf8'
});

export async function handler(event) {
  const { request } = event.Records[0].cf;
  const shortcode = request.uri.split('/')[3];

  try {
    const {
      data: { shortcode_media }
    } = await fetchPost({
      shortcode,
      child_comment_count: 3,
      fetch_comment_count: 40,
      parent_comment_count: 24,
      has_threaded_comments: true
    });

    if (shortcode_media === null) throw Error('Not found');

    const body = renderToStaticMarkup(
      <Post shortcode_media={shortcode_media} />,
      css
    );

    return {
      status: '200',
      statusDescription: 'OK',
      headers: {
        'content-type': [
          {
            key: 'Content-Type',
            value: 'text/html'
          }
        ]
      },
      body
    };
  } catch (err) {
    console.error(err);

    const body = renderToStaticMarkup(<NotFound />, css);

    return {
      status: '404',
      statusDescription: 'Not Found',
      headers: {
        'content-type': [
          {
            key: 'Content-Type',
            value: 'text/html'
          }
        ]
      },
      body
    };
  }
}
