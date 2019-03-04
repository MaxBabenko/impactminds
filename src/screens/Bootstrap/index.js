import React from 'react';
import {
  ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View,
} from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import * as Routes from '../../routes';


type Props = {
  navigation: NavigationScreenProp<NavigationState>;
}

class Bootstrap extends React.Component<Props> {
  constructor() {
    super();
    this.getUserData();
  }

  getUserData = async () => {
    const userToken = await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate(userToken ? Routes.HOME : Routes.AUTHENTICATION);
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Bootstrap;
