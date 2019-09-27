import React from 'react';

import styles from './Sidebar.css';

import Container from '../../common/container/Container';
import Divider from '../../common/divider/Divider';
import TopAppBar from '../../common/top-app-bar/TopAppBar';
import IconButton from '../../common/icon-button/IconButton';
import Icon from '../../common/icon/Icon';
import Link from '../../common/link/Link';
import { List, ListItem, ListCaption } from '../../common/list/List';
import SocialShare from '../social-share/SocialShare';

export default function Sidebar() {
  return (
    <amp-sidebar id="Sidebar" layout="nodisplay">
      <TopAppBar elevation={0}>
        <Container className={styles['top-app-bar-container']}>
          <IconButton edge="start" on="tap:Sidebar.close">
            <Icon>close</Icon>
          </IconButton>
        </Container>
      </TopAppBar>
      <List component="nav">
        <ListItem component={Link} href="/" underline="none">
          <ListCaption primary="Home" />
        </ListItem>
        <Divider component="div" />
        <ListItem component={Link} href="/privacy-policy/">
          <ListCaption primary="Privacy Policy" />
        </ListItem>
        <ListItem component={Link} href="/terms-and-conditions/">
          <ListCaption primary="Terms & Conditions" />
        </ListItem>
      </List>
      <SocialShare />
    </amp-sidebar>
  );
}
