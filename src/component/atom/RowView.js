import {View} from 'react-native';
import React from 'react';

export function RowView({justifyContent, alignItems, children, style = {}}) {
  return (
    <View style={[{flexDirection: 'row', justifyContent, alignItems}, style]}>
      {children}
    </View>
  );
}
