import 'source-map-support/register';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { fetchLocationTimeline } from 'instagram-web-api-client';

import renderToStaticMarkup from '../../common/renderToStaticMarkup';
import NotFound from '../../components/not-found/NotFound';
import Location from './Location';

const css = fs.readFileSync(path.resolve(__dirname, 'index.css'), {
  encoding: 'utf8'
});

export async function handler(event) {
  const { request } = event.Records[0].cf;
  const [, , , id, slug] = request.uri.split('/');

  try {
    const {
      data: { location }
    } = await fetchLocationTimeline({ id, first: 12 });

    if (location === null || location.slug !== slug) throw Error('Not found');

    const body = renderToStaticMarkup(<Location location={location} />, css);

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
