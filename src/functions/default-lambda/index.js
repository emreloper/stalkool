import 'source-map-support/register';
import fs from 'fs';
import path from 'path';
import React from 'react';

import renderToStaticMarkup from '../../common/renderToStaticMarkup';
import NotFound from '../../components/not-found/NotFound';
import Home from './Home';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';

const css = fs.readFileSync(path.resolve(__dirname, 'index.css'), {
  encoding: 'utf8',
});

export async function handler(event) {
  const staticFileRegex = /.+\.(svg|jpg|png|ico|js|json|xml|html|txt)$/i;
  const { request } = event.Records[0].cf;

  if (
    staticFileRegex.test(request.uri) === false &&
    request.uri.endsWith('/') === false
  ) {
    return redirectWithEndSlash(request);
  }

  switch (true) {
    case request.uri.substring(1).startsWith('hashtag'):
      redirectWithEndSlash({ ...request, uri: '/instagram' + request.uri });
      break;
    case request.uri.substring(1).startsWith('user'):
      redirectWithEndSlash({
        ...request,
        uri: '/instagram/profile/' + request.uri.substring(5),
      });
      break;
  }

  switch (request.uri) {
    case '/privacy-policy/':
      return await render(PrivacyPolicy);
    case '/terms-and-conditions/':
      return await render(TermsAndConditions);
    case '/':
      return await render(Home);
  }

  return request;
}

function redirect(location) {
  return {
    status: 301,
    statusDescription: 'Moved Permanently',
    headers: {
      location: [
        {
          key: 'Location',
          value: location,
        },
      ],
    },
  };
}

function redirectWithEndSlash(request) {
  const redirectUrl = new URL(request.uri, `https://www.stalkool.com`);
  redirectUrl.pathname = request.uri.concat('/');
  redirectUrl.search = request.querystring;

  return redirect(redirectUrl.toString());
}

function render(Component) {
  try {
    const body = renderToStaticMarkup(<Component />, css);

    return {
      status: '200',
      statusDescription: 'OK',
      headers: {
        'content-type': [
          {
            key: 'Content-Type',
            value: 'text/html',
          },
        ],
      },
      body,
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
            value: 'text/html',
          },
        ],
      },
      body,
    };
  }
}
