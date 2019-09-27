import styles from './Divider.css';

import styled from '../styled';

const Divider = styled('hr')(styles);

Divider.defaultProps = {
  color: 'border'
};

export default Divider;
