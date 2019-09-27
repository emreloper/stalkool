import React from 'react';

import styles from './TabsContainer.css';

import styled from '../styled';

const StyledTabsContainer = styled('amp-selector')(styles);

StyledTabsContainer.defaultProps = {
  role: 'tablist'
};

export default function TabsContainer({ tabPanels, ...props }) {
  return (
    <StyledTabsContainer
      on={`select:${tabPanels}.toggle(index=event.targetOption, value=true)`}
      {...props}
    />
  );
}
