import React from 'react';
import clsx from 'clsx';

import styles from './List.css';

import mapPropsToStyles from '../mapPropsToStyles';
import Avatar from '../avatar/Avatar';
import Typography from '../typography/Typography';

export function List({
  component = 'ul',
  className = '',
  responsive = false,
  items = 4,
  removeGutter = false,
  ...props
}) {
  const mappedStyles = mapPropsToStyles(styles, {
    root: true,
    responsive,
    items,
    removeGutter
  });

  return React.createElement(component, {
    className: clsx(mappedStyles, className),
    ...props
  });
}

export function ListItem({ component = 'li', className = '', ...props }) {
  return React.createElement(component, {
    className: clsx(styles.item, className),
    ...props
  });
}

export function ListAvatar({ component = 'div', className = '', ...props }) {
  return (
    <Avatar
      component={component}
      className={clsx(styles.avatar, className)}
      {...props}
    />
  );
}

export function ListCaption({
  component = 'div',
  className = '',
  primary = '',
  secondary = '',
  children = null,
  ...props
}) {
  return React.createElement(
    component,
    {
      className: clsx(styles.caption, className),
      ...props
    },
    <>
      {primary instanceof Function ? (
        primary(styles['caption-primary'])
      ) : (
        <Typography
          className={styles['caption-primary']}
          variant="subtitle1"
          nowrap
        >
          {primary}
        </Typography>
      )}
      {secondary instanceof Function ? (
        secondary(styles['caption-secondary'])
      ) : (
        <Typography
          className={styles['caption-secondary']}
          variant="body2"
          nowrap
        >
          {secondary}
        </Typography>
      )}
    </>
  );
}

export function ListDivider({ component = 'li', className = '', ...props }) {
  return React.createElement(component, {
    className: clsx(styles.divider, className),
    ...props
  });
}
