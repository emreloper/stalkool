import React from 'react';
import clsx from 'clsx';
import { pick, omit } from 'lodash-es';

import mapPropsToStyles from './mapPropsToStyles';

const styled = (as = 'div') => styles => {
  const cssProps = Object.keys(styles).map(cssProp => cssProp.split('-')[0]);

  return function StyledComponent({
    component = as,
    className = '',
    ...props
  }) {
    const styleProps = pick(props, cssProps);
    const componentProps = omit(props, cssProps);
    const mappedStyles = mapPropsToStyles(styles, {
      root: true,
      ...styleProps
    });

    return React.createElement(component, {
      ...componentProps,
      ...(typeof component === 'string' && component.startsWith('amp-')
        ? { class: clsx(mappedStyles, className) }
        : { className: clsx(mappedStyles, className) })
    });
  };
};

export default styled;
