import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './Home';
import * as Routes from '../../routes';
import DrawerMenu from '../../../App';

export default createDrawerNavigator({
  [Routes.HOME]: {
    screen: HomeScreen,
  },
}, {
  headerMode: 'none',
  contentComponent: ({ navigation }) => (<DrawerMenu navigation={navigation} />),
});
