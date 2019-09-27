import React from 'react';

import styles from './Footer.css';

import Box from '../../common/box/Box';
import Container from '../../common/container/Container';
import Grid from '../../common/grid/Grid';
import Space from '../../common/space/Space';
import Divider from '../../common/divider/Divider';
import Typography from '../../common/typography/Typography';
import Link from '../../common/link/Link';

const topInspirations = [
  'style',
  'decor',
  'comics',
  'travel',
  'architecture',
  'art',
  'beauty',
  'nature',
  'food',
  'science',
  'tech',
  'diy',
  'tv',
  'movies'
];

const topAccounts = [
  'cristiano',
  'arianagrande',
  'selenagomez',
  'therock',
  'kimkardashian',
  'kyliejenner',
  'beyonce',
  'leomessi',
  'neymarjr',
  'taylorswift',
  'justinbieber',
  'kendalljenner',
  'nickyminaj',
  'jlo'
];

export default function Footer() {
  return (
    <footer className={styles.root}>
      <Container>
        <Grid columns={{ sm: 3 }}>
          <div>
            <Typography variant="subtitle1" color="white">
              Top Instagram Inspirations
            </Typography>
            <Space height={2} />
            <Divider color="grey-500" />
            <Space height={2} />
            <Box component="nav" display="flex" flexDirection="column">
              {topInspirations.map(inspiration => (
                <Typography
                  component={Link}
                  variant="body2"
                  color="white"
                  href={`/instagram/hashtag/${inspiration}/`}
                >
                  #{inspiration}
                </Typography>
              ))}
            </Box>
          </div>
          <div>
            <Typography variant="subtitle1" color="white">
              Top Instagram Accounts
            </Typography>
            <Space height={2} />
            <Divider color="grey-500" />
            <Space height={2} />
            <Box component="nav" display="flex" flexDirection="column">
              {topAccounts.map(account => (
                <Typography
                  component={Link}
                  variant="body2"
                  color="white"
                  href={`/instagram/profile/${account}/`}
                >
                  @{account}
                </Typography>
              ))}
            </Box>
          </div>
          <div>
            <Typography variant="subtitle1" color="white">
              stalkool
            </Typography>
            <Space height={2} />
            <Divider color="grey-500" />
            <Space height={2} />
            <Box component="nav" display="flex" flexDirection="column">
              <Typography
                component={Link}
                variant="body2"
                color="white"
                href="/privacy-policy/"
              >
                Privacy Policy
              </Typography>
              <Typography
                component={Link}
                variant="body2"
                color="white"
                href="/terms-and-conditions/"
              >
                Terms & Conditions
              </Typography>
            </Box>
          </div>
        </Grid>
        <Space height={6} />
        <Typography variant="caption" color="white" align="center">
          @2019 stalkool Instagram Tools
        </Typography>
        <Typography variant="caption" color="white" align="center">
          This service uses the Instagram API but is not endorsed or certified
          by Instagram.
        </Typography>
      </Container>
    </footer>
  );
}
