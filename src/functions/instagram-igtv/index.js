import 'source-map-support/register';
import fs from 'fs';
import path from 'path';
import React from 'react';
import {
  fetchTopSearch,
  fetchUserTimeline,
  fetchIgtvTimeline
} from 'instagram-web-api-client';

import renderToStaticMarkup from '../../common/renderToStaticMarkup';
import NotFound from '../../components/not-found/NotFound';
import IGTV from './IGTV';

const css = fs.readFileSync(path.resolve(__dirname, 'index.css'), {
  encoding: 'utf8'
});

export async function handler(event) {
  const { request } = event.Records[0].cf;
  const username = request.uri.split('/')[3];

  try {
    const { users } = await fetchTopSearch({
      context: 'user',
      query: username,
      rank_token: '0.8174329763850567',
      include_reel: true
    });
    const { user: userInfo } = users.find(u => u.user.username === username);
    const [
      {
        data: { user: profile }
      },
      {
        data: { user: igtv }
      }
    ] = await Promise.all([
      fetchUserTimeline({ id: userInfo.pk, first: 12 }),
      fetchIgtvTimeline({ id: userInfo.pk, first: 12 })
    ]);

    if (profile === null) throw Error('Not found');

    const body = renderToStaticMarkup(
      <IGTV
        user={{
          ...profile,
          ...igtv,
          ...userInfo,
          id: userInfo.pk,
          biography: '',
          external_url: '',
          edge_followed_by: { count: userInfo.follower_count },
          edge_follow: { count: 0 },
          profile_pic_url_hd: userInfo.profile_pic_url
        }}
      />,
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
