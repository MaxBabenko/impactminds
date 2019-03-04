import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Badge, Text, Icon } from 'native-base';

import { SIGNUP_STEPS, SIGNUP_STEPS_TITLES } from '../constants';
import Style from '../../../styles';

type Props = {
  step: number;
  onStepPress: (step: number) => void;
};

const SignUpTabBar = (props: Props) => {
  const renderTab = (step, isActive, isChecked) => {
    const badgeStyle = isChecked || isActive
      ? [styles.badge, styles.badgeActive]
      : styles.badge;
    const badgeContent = isChecked
      ? <Icon name="checkmark" style={styles.icon} />
      : <Text style={styles.badgeTitle}>{step}</Text>;

    return (
      <View style={styles.tab} key={step}>
        <Badge style={badgeStyle}>
          {badgeContent}
        </Badge>
        <Text
          style={styles.title}
          onPress={() => props.onStepPress(step)}
        >
          {SIGNUP_STEPS_TITLES.get(step)}
        </Text>
      </View>
    );
  };

  const renderTabs = () => (
    SIGNUP_STEPS.map((step: number) => {
      if (step < props.step) { return renderTab(step, false, true); }
      if (step === props.step) { return renderTab(step, true); }
      return renderTab(step);
    })
  );

  return (
    <View style={styles.container}>
      {renderTabs()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Style.colors.backgroundColorPrimary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 40,
    marginBottom: 30,
  },
  tab: {
    width: 80,
    alignItems: 'center',
  },
  badge: {
    width: 27,
    height: 27,
    marginBottom: 20,
    alignSelf: 'center',
    backgroundColor: Style.colorNames.grey,
  },
  badgeActive: {
    backgroundColor: Style.colors.primary,
  },
  badgeTitle: {
    fontSize: Style.fontSize,
    fontWeight: Style.fontWeightBold,
  },
  icon: {
    color: Style.colors.iconColor,
    height: 30,
    fontWeight: Style.fontWeightBold,
    textAlign: 'center',
  },
  title: {
    width: 65,
    textAlign: 'center',
    fontSize: Style.fontSize,
    color: Style.fontColorPrimary,
    fontFamily: Style.fontFamily,
  },
});

export default SignUpTabBar;
