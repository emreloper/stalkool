import 'source-map-support/register';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { fetchHashtagTimeline } from 'instagram-web-api-client';

import renderToStaticMarkup from '../../common/renderToStaticMarkup';
import NotFound from '../../components/not-found/NotFound';
import Hashtag from './Hashtag';

const css = fs.readFileSync(path.resolve(__dirname, 'index.css'), {
  encoding: 'utf8'
});

export async function handler(event) {
  const { request } = event.Records[0].cf;
  const tag_name = request.uri.split('/')[3];

  try {
    const {
      data: { hashtag }
    } = await fetchHashtagTimeline({ tag_name, first: 12 });

    if (hashtag === null) throw Error('Not found');

    const body = renderToStaticMarkup(<Hashtag hashtag={hashtag} />, css);

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
