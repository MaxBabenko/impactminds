import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Tabs, Tab } from 'native-base';

import Style from '../../../styles';

type Props = {
  children: React.Node;
}

const AuthTabs = (props: Props) => (
  <Tabs
    locked
    tabContainerStyle={{ height: 50 }}
    tabBarUnderlineStyle={{ backgroundColor: Style.colors.primary }}
    style={{ backgroundColor: 'red' }}
  >
    <Tab
      heading="SIGN IN"
      textStyle={styles.text}
      activeTextStyle={styles.activeText}
    >
      {props.children[0]}
    </Tab>

    <Tab
      heading="SIGN UP"
      textStyle={styles.text}
      activeTextStyle={styles.activeText}
    >
      {props.children[1]}
    </Tab>
  </Tabs>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: Style.fontFamily,
    color: Style.colors.fontColorSecondary,
  },
  activeText: {
    fontFamily: Style.fontFamily,
    color: Style.colors.fontColorPrimaryActive,
    fontWeight: Style.fontWeight,
  },
});

export default AuthTabs;
