import styles from './TabPanel.css';

import styled from '../styled';

const TabPanel = styled()(styles);

TabPanel.defaultProps = {
  role: 'tabpanel',
  option: ''
};

export default TabPanel;
