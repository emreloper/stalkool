import React from 'react';

import styles from './Header.css';

import TopAppBar from '../../common/top-app-bar/TopAppBar';
import Container from '../../common/container/Container';
import IconButton from '../../common/icon-button/IconButton';
import Icon from '../../common/icon/Icon';
import Typography from '../../common/typography/Typography';
import Link from '../../common/link/Link';

export default function Header() {
  return (
    <TopAppBar position="sticky" elevation={1}>
      <Container className={styles.container}>
        <IconButton
          className={styles['menu-button']}
          type="button"
          edge="start"
          on="tap:Sidebar"
        >
          <Icon>menu</Icon>
        </IconButton>
        <Typography
          component={Link}
          variant="h6"
          color="primary"
          underline="none"
          href="/"
        >
          stalkool
        </Typography>
        <IconButton
          className={styles['search-button']}
          type="button"
          edge="end"
          on="tap:Search"
        >
          <Icon>search</Icon>
        </IconButton>
      </Container>
    </TopAppBar>
  );
}
