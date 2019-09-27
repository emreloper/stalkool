import React from 'react';

import styles from './Search.css';

import Space from '../../common/space/Space';
import Container from '../../common/container/Container';
import TopAppBar from '../../common/top-app-bar/TopAppBar';
import Input from '../../common/input/Input';
import Icon from '../../common/icon/Icon';
import IconButton from '../../common/icon-button/IconButton';
import Typography from '../../common/typography/Typography';
import Link from '../../common/link/Link';
import {
  List,
  ListItem,
  ListAvatar,
  ListCaption,
  ListDivider
} from '../../common/list/List';
import TabsContainer from '../../common/tabs-container/TabsContainer';
import Tab from '../../common/tab/Tab';
import TabPanel from '../../common/tab-panel/TabPanel';

const url =
  'https://www.instagram.com/web/search/topsearch/?context=blended&include_reel=true';

export default function Search() {
  return (
    <>
      <script id="SearchResults" type="text/plain" template="amp-mustache">
        <Container>
          <TabsContainer
            className={styles['tabs-container']}
            tabPanels="SearchTabPanels"
          >
            <Tab option="0" aria-controls="SearchResultsAccounts" selected>
              Accounts
            </Tab>
            <Tab option="1" aria-controls="SearchResultsHashtags">
              Hashtags
            </Tab>
            <Tab option="2" aria-controls="SearchResultsLocations">
              Locations
            </Tab>
          </TabsContainer>
          <amp-selector id="SearchTabPanels">
            <TabPanel id="SearchResultsAccounts" selected>
              <List responsive>
                {'{{#users}}'}
                <li>
                  <Link
                    href="/instagram/profile/{{user.username}}/"
                    underline="none"
                  >
                    <ListItem component="figure">
                      <ListAvatar>
                        <amp-img
                          layout="flex-item"
                          src="{{user.profile_pic_url}}"
                          alt="@{{user.username}} {{user.full_name}} Instagram profile picture"
                        />
                      </ListAvatar>
                      <ListCaption
                        component="figcaption"
                        primary={classNames => (
                          <div
                            className={`${
                              styles['verified-username']
                            } ${classNames}`}
                          >
                            <Typography variant="subtitle1" nowrap>
                              {'@{{user.username}}'}
                            </Typography>
                            {'{{#user.is_verified}}'}
                            <Space width={2} />
                            <Typography component={Icon} variant="subtitle1">
                              verified_user
                            </Typography>
                            {'{{/user.is_verified}}'}
                          </div>
                        )}
                        secondary="{{user.full_name}}"
                      />
                    </ListItem>
                    <ListDivider />
                  </Link>
                </li>
                {'{{/users}}'}
              </List>
            </TabPanel>
            <TabPanel id="SearchResultsHashtags">
              <List responsive>
                {'{{#hashtags}}'}
                <li>
                  <Link
                    href="/instagram/hashtag/{{hashtag.name}}/"
                    underline="none"
                  >
                    <ListItem component="figure">
                      <ListAvatar align="center">
                        <Typography variant="h5">#</Typography>
                      </ListAvatar>
                      <ListCaption
                        component="figcaption"
                        primary="{{hashtag.name}}"
                        secondary="{{hashtag.search_result_subtitle}}"
                      />
                    </ListItem>
                    <ListDivider />
                  </Link>
                </li>
                {'{{/hashtags}}'}
              </List>
            </TabPanel>
            <TabPanel id="SearchResultsPlaces">
              <List responsive>
                {'{{#places}}'}
                <li>
                  <Link
                    href="/instagram/location/{{place.location.pk}}/{{place.slug}}/"
                    underline="none"
                  >
                    <ListItem component="figure">
                      <ListAvatar align="center">
                        <Typography variant="h5" component={Icon}>
                          place
                        </Typography>
                      </ListAvatar>
                      <ListCaption
                        component="figcaption"
                        primary="{{place.title}}"
                        secondary="{{place.subtitle}}"
                      />
                    </ListItem>
                    <ListDivider />
                  </Link>
                </li>
                {'{{/places}}'}
              </List>
            </TabPanel>
          </amp-selector>
        </Container>
      </script>
      <amp-lightbox
        id="Search"
        class={styles['lightbox-fill-content']}
        layout="nodisplay"
        animate-in="fly-in-bottom"
        scrollable
      >
        <TopAppBar position="fixed" elevation={0}>
          <Container className={styles['top-app-bar-container']}>
            <IconButton edge="start" on="tap:Search.close">
              <Icon>close</Icon>
            </IconButton>
            <Space width={1} />
            <Input
              fullWidth
              type="search"
              placeholder="Search accounts, hashtags, locations..."
              on="input-debounced:AMP.setState({ searchQuery: event.value })"
            />
            <Icon className={styles['search-icon']}>search</Icon>
          </Container>
        </TopAppBar>
        <amp-list
          layout="flex-item"
          template="SearchResults"
          items="."
          single-item
          src={`${url}&query=`}
          data-amp-bind-src={`'${url}&query=' + searchQuery`}
        />
      </amp-lightbox>
    </>
  );
}
