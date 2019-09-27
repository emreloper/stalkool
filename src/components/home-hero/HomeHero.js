import React from 'react';

import styles from './HomeHero.css';

import Container from '../../common/container/Container';
import Space from '../../common/space/Space';
import Icon from '../../common/icon/Icon';
import Typography from '../../common/typography/Typography';
import Button from '../../common/button/Button';
import ButtonGroup from '../../common/button-group/ButtonGroup';

export default function HomeHero() {
  return (
    <article className={styles.root}>
      <amp-img
        class={styles.image}
        layout="fill"
        src="https://source.unsplash.com/collection/186/2560x1080"
        alt="stalkool"
      />
      <div className={styles.backdrop} />
      <Container className={styles.container} component="section">
        <Typography component="h3" variant="h3">
          Stalkool
        </Typography>
        <Typography component="h1">
          Find inspirations around the world.
        </Typography>
        <Typography component="h2">
          View and download inspirations anywhere on any devices.
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
          <Button variant="contained" size="big" type="button" on="tap:Search">
            <Icon>search</Icon>
          </Button>
        </ButtonGroup>
      </Container>
    </article>
  );
}
