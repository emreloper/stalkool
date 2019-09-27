import React from 'react';
import { Helmet } from 'react-helmet';

import styles from './NotFound.css';

import Skeleton from '../skeleton/Skeleton';
import Space from '../../common/space/Space';
import Container from '../../common/container/Container';
import Typography from '../../common/typography/Typography';
import ButtonGroup from '../../common/button-group/ButtonGroup';
import Button from '../../common/button/Button';
import Icon from '../../common/icon/Icon';

export default function Home() {
  return (
    <Skeleton>
      <Helmet>
        <title>{`Not Found`}</title>
        <meta
          name="description"
          content={`The content you're looking for is not found.`}
        />
      </Helmet>
      <article className={styles.root}>
        <amp-img
          class={styles.image}
          layout="fill"
          src="https://source.unsplash.com/collection/186/2560x1080"
          alt=""
        />
        <div className={styles.backdrop} />
        <Container className={styles.container} component="section">
          <Typography component="h1" variant="h5">
            Not Found
          </Typography>
          <Typography component="h2">
            We couldn't find the content you're looking for. Looking for
            something else?
          </Typography>
          <Space height={4} />
          <ButtonGroup>
            <Button
              className={styles['fake-input']}
              variant="outlined"
              size="big"
              type="button"
              on="tap:Search"
            >
              Search accounts, hashtags, locations...
            </Button>
            <Button
              variant="contained"
              size="big"
              type="button"
              on="tap:Search"
            >
              <Icon>search</Icon>
            </Button>
          </ButtonGroup>
        </Container>
      </article>
    </Skeleton>
  );
}
