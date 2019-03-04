import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';

import BootstrapScreen from './src/screens/Bootstrap';
import AuthenticationNavigator from './src/screens/Authentication';
import HomeScreen from './src/screens/Home/Home';
import * as Routes from './src/routes';
import DrawerMenu from './src/components/DrawerMenu';

// TODO Doesn't work when importing from Home/index
// navigation prop in DrawerMenu failed
const HomeNavigator = createDrawerNavigator({
  [Routes.HOME]: {
    screen: HomeScreen,
  },
}, {
  headerMode: 'none',
  contentComponent: ({ navigation }) => (<DrawerMenu navigation={navigation} />),
});

export default createAppContainer(createSwitchNavigator(
  {
    [Routes.BOOTSTRAP]: BootstrapScreen,
    [Routes.AUTHENTICATION]: AuthenticationNavigator,
    [Routes.HOME]: HomeNavigator,
  },
  {
    initialRouteName: Routes.BOOTSTRAP,
  },
));
