import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Style from '../styles';

type Props = {
  containerStyle?: StyleSheet.styles;
  children: React.Node | string;
}

const StyledText = (props: Props) => (
  <View style={props.containerStyle}>
    <Text style={styles.text}>
      {props.children}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: Style.fontFamily,
    fontSize: Style.fontSize,
    color: Style.colors.fontColorPrimary,
  },
});

export default StyledText;
