import styles from './Tab.css';

import styled from '../styled';

const Tab = styled('button')(styles);

Tab.defaultProps = {
  role: 'tab'
};

export default Tab;
