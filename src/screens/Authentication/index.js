import { createStackNavigator } from 'react-navigation';

import Authentication from './Authentication';
import * as Routes from '../../routes';

export default createStackNavigator({
  [Routes.AUTHENTICATION]: Authentication,
}, {
  headerMode: 'none',
});
