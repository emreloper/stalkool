import 'source-map-support/register';
import { URLSearchParams } from 'url';
import { fetchUserTimeline } from 'instagram-web-api-client';

export async function handler(event) {
  const { request } = event.Records[0].cf;
  const searchParams = new URLSearchParams(request.querystring);
  const id = request.uri.split('/')[4];

  const unauthorized = 'Unauthorized Request';
  let origin;
  const allowedOrigins = [
    'https://www.stalkool.com',
    'https://www.stalkool-com.cdn.ampproject.org/',
    'https://www.stalkool.com.amp.cloudflare.com/',
    'https://cdn.ampproject.org'
  ];
  const allowedSourceOrigin = 'https://www.stalkool.com'; //publisher's origin
  const sourceOrigin = searchParams.get('__amp_source_origin');

  try {
    // If same origin
    if (request.headers['amp-same-origin'][0].value == 'true') {
      origin = sourceOrigin;
      // If allowed CORS origin & allowed source origin
    } else if (
      allowedOrigins.indexOf(request.headers.origin[0].value) != -1 &&
      sourceOrigin == allowedSourceOrigin
    ) {
      origin = request.headers.origin[0].value;
    } else {
      throw unauthorized;
    }

    const response = await fetchUserTimeline({
      id,
      first: searchParams.get('first') || 12,
      after: searchParams.get('after')
    });
    const {
      edges,
      page_info
    } = response.data.user.edge_owner_to_timeline_media;
    const body = JSON.stringify({
      edges,
      'load-more-src': `https://www.stalkool.com/api/instagram/profile/${id}?after=${
        page_info.end_cursor
      }`
    });

    return {
      status: '200',
      statusDescription: 'OK',
      headers: {
        'content-type': [
          {
            key: 'Content-Type',
            value: 'application/json'
          }
        ],
        'access-control-allow-credentials': [
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true'
          }
        ],
        'access-control-allow-origin': [
          {
            key: 'Access-Control-Allow-Origin',
            value: origin
          }
        ]
      },
      body
    };
  } catch (error) {
    console.error(error);
  }
}
