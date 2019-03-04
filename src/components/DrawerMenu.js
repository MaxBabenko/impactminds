import React from 'react';
import {
  View, SafeAreaView, Text, TouchableOpacity, StyleSheet, AsyncStorage,
} from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import StyledText from './StyledText';
import Style from '../styles';
import * as Routes from '../routes';

type Props = {
  navigation: NavigationScreenProp<NavigationState>;
};

const DrawerMenu = (props: Props) => {
  const handleSignOutPress = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate(Routes.AUTHENTICATION);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.link}
          onPress={handleSignOutPress}
        >
          <StyledText>
            <Text style={styles.linkText}>Sign out</Text>
          </StyledText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
  },
  link: {
    height: 50,
    justifyContent: 'center',
  },
  linkText: {
    color: Style.colors.fontColorPrimaryActive,
    fontSize: Style.fontSizeLarge,
  },
});

export default DrawerMenu;
