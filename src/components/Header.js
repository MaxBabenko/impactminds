import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { ifIphoneX } from 'react-native-iphone-x-helper';

import StyledText from './StyledText';
import Style from '../styles';

type Props = {
  title?: string;
  leftIconName?: string;
  rightIconName?: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  containerStyle?: StyleSheet.styles;
  titleStyle?: StyleSheet.styles;
}

const Header = (props: Props) => {
  const { leftIconName, rightIconName } = props;
  const leftIcon = leftIconName
    && (
      <Icon
        type="MaterialIcons"
        name={leftIconName}
        style={[styles.icon, styles.iconLeft]}
        onPress={props.onLeftIconPress}
      />
    );
  const rightIcon = rightIconName
    && (
      <Icon
        type="MaterialIcons"
        name={rightIconName}
        style={[styles.icon, styles.iconRight]}
        onPress={props.onRightIconPress}
      />
    );

  return (
    <View style={[styles.container, props.containerStyle]}>
      {leftIcon}
      <StyledText containerStyle={styles.titleContainerStyle}>
        <Text style={[styles.title, props.titleStyle]}>
          {props.title}
        </Text>
      </StyledText>
      {rightIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: Style.colors.primary,
    shadowColor: Style.colors.shadowColor,
    shadowOffset: { height: 3 },
    shadowRadius: 1.5,
    shadowOpacity: 1,
    ...ifIphoneX({
      paddingTop: 44,
      height: 99,
    }, {
      paddingTop: 20,
      height: 75,
    }),
  },
  titleContainerStyle: {
    flex: 1,
  },
  title: {
    color: Style.colors.fontColorPrimaryInverted,
    fontFamily: Style.fontFamily,
    fontSize: Style.fontSizeXXLarge,
    fontWeight: Style.fontWeight,
  },
  icon: {
    color: Style.colors.iconColor,
  },
  iconLeft: {
    marginRight: 15,
  },
  iconRight: {

  },
});

export default Header;
