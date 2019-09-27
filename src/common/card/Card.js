import styles from './Card.css';

import styled from '../styled';

const Card = styled()(styles);

Card.defaultProps = {
  direction: 'column'
};

export default Card;
