import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import StyledText from './StyledText';
import Style from '../styles';

const Logo = () => (
  <View style={styles.container}>
    <StyledText>
      <Text style={styles.impact}>Impact </Text>
      <Text style={[styles.impact, styles.minds]}>Minds</Text>
    </StyledText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  impact: {
    fontSize: Style.fontSizeLogo,
    fontWeight: Style.fontWeightBold,
  },
  minds: {
    color: Style.colors.fontColorPrimaryActive,
  },
});

export default Logo;
