import { URL, URLSearchParams } from 'url';

const QUERY_HASHES = {
  HASHTAG: 'f92f56d47dc7a55b606908374b43a314'
};

export default function createUrl(tag_name) {
  const url = new URL('/graphql/query/', 'https://www.instagram.com');
  const search = new URLSearchParams({
    query_hash: QUERY_HASHES.HASHTAG,
    variables: JSON.stringify({
      tag_name,
      first: 1
    })
  });

  url.search = search.toString();

  return url.toString();
}
