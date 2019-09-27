export default function mapPropsToStyles(styles = {}, props = {}) {
  return Object.entries(props).reduce((mappedStyles, [key, value]) => {
    let classNames = {};

    switch (typeof value) {
      case 'boolean':
        classNames[key] = value;
        break;
      case 'string':
      case 'number':
        classNames[`${key}-${value}`] = true;
        break;
      case 'object':
        classNames = Object.entries(value).reduce(
          (acc, [k, v]) => ({
            ...acc,
            [`${key}-${k}-${v}`]: true
          }),
          {}
        );
    }

    classNames = Object.entries(classNames).reduce(
      (acc, [k, v]) => ({ ...acc, ...(k in styles ? { [k]: v } : {}) }),
      {}
    );

    if (Object.keys(classNames) === 0) return mappedStyles;

    return {
      ...mappedStyles,
      ...Object.entries(classNames).reduce(
        (acc, [k, v]) => ({
          ...acc,
          [styles[k]]: v
        }),
        {}
      )
    };
  }, {});
}
