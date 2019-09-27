import styles from './Button.css';

import styled from '../styled';

const Button = styled('button')(styles);

Button.defaultProps = {
  variant: 'text',
  size: 'normal'
};

export default Button;
