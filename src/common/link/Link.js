import styles from './Link.css';

import styled from '../styled';

const Link = styled('a')(styles);

Link.defaultProps = {
  underline: 'hover'
};

export default Link;
