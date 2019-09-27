import React from 'react';
import clsx from 'clsx';

import styles from './Icon.css';

import styled from '../styled';

const StyledIcon = styled()(styles);

export default function Icon({ className, ...props }) {
  return (
    <StyledIcon
      className={clsx('material-icons', className)}
      {...props}
    />
  );
}
