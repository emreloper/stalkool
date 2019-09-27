import React from 'react';

export default function NumberToLetterStringMacro() {
  return (
    <amp-bind-macro
      id="numberToLetterStringMacro"
      arguments="n"
      expression="n < 1000 ? n : n < 1000000 ? (n / 1000).toFixed(1) + 'k' : (n / 1000000).toFixed(1) + 'm'"
    />
  );
}
