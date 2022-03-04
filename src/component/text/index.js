import React from 'react';
import {FONT_SIZES} from '../../utils/fonts';

import {Text} from './style';

export function RegularText({children, ...rest}) {
  return (
    <Text fontSize={FONT_SIZES['16']} lineHeight={FONT_SIZES['24']} {...rest}>
      {children}
    </Text>
  );
}

export function Regular2228({children, ...rest}) {
  return (
    <Text fontSize={FONT_SIZES['22']} lineHeight={FONT_SIZES['28']} {...rest}>
      {children}
    </Text>
  );
}
export function Bold({children, ...rest}) {
  return (
    <Text
      style={{fontWeight: 'bold'}}
      fontSize={FONT_SIZES['18']}
      lineHeight={FONT_SIZES['22']}
      {...rest}>
      {children}
    </Text>
  );
}
