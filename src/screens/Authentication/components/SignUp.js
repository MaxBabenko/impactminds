import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Content, Button, Item, Label, Input, Tabs, Tab,
} from 'native-base';

import SignUpTabBar from './SignUpTabBar';
import SignUpStep1 from './SignUpStep1';
import RadioButton from './RadioButton';
import { INFO_BEGIN, INFO_BEGIN_INTRO, INFO_END } from '../constants';
import StyledText from '../../../components/StyledText';
import Style from '../../../styles';

const SignUp = (props) => {
  const renderStep = () => {
    switch (props.step) {
      case 3:
        return renderStep3();
      case 2:
        return renderStep2();
      case 1:
      default:
        return renderStep1();
    }
  };

  const renderStep1 = () => (
    <Tab heading="1">
      <SignUpStep1
        email={props.email}
        dob={props.dob}
        firstName={props.firstName}
        lastName={props.lastName}
        password={props.password}
        confirmPassword={props.confirmPassword}
        occupation={props.occupation}
        photo={props.photo}
        onEmailChange={props.onEmailChange}
        onDobChange={props.onDobChange}
        onFirstNameChange={props.onFirstNameChange}
        onLastNameChange={props.onLastNameChange}
        onPasswordChange={props.onPasswordChange}
        onConfirmPasswordChange={props.onConfirmPasswordChange}
        onOccupationChange={props.onOccupationChange}
        onPhotoChange={props.onPhotoChange}
      />
    </Tab>
  );

  const renderStep2 = () => (
    <Tab heading="2">
      <View style={styles.tabContainer}>
        <StyledText containerStyle={styles.infoTextContainer}>
          <Text style={styles.infoText}>
            {INFO_BEGIN_INTRO}
          </Text>
        </StyledText>
        {INFO_BEGIN.map((info, i) => (
          <RadioButton
            key={info}
            id={i}
            title={info}
            value={props.infoBegin[i]}
            onPress={props.onInfoBeginChange}
          />
        ))}
      </View>
    </Tab>
  );

  const renderStep3 = () => (
    <Tab heading="3">
      <View style={styles.tabContainer}>
        {INFO_END.map((info, i) => (
          <RadioButton
            key={i}
            id={i}
            title={info}
            value={props.infoEnd[i]}
            onPress={props.onInfoEndChange}
          />
        ))}
        <Item style={styles.item} stackedLabel>
          <Label style={styles.label}>
            Which one? (If your answer was positive)
          </Label>
          <Input placeholder="Text" />
        </Item>
      </View>
    </Tab>
  );

  const renderTabBar = () => (
    <SignUpTabBar
      step={props.step}
      onStepPress={props.onStepPress}
    />
  );

  const renderButtons = () => {
    const isBackButtonDisabled = props.step === 1;
    const backButtonTextStyle = isBackButtonDisabled
      ? styles.backButtonTextDisabled
      : styles.backButtonText;
    const isLastStep = props.step === 3;
    const nextFinishButtonHandler = isLastStep ? props.onFinishPress : props.onNextPress;

    return (
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={props.onBackPress}
          disabled={isBackButtonDisabled}
          transparent
        >
          <StyledText>
            <Text style={backButtonTextStyle}>BACK</Text>
          </StyledText>
        </Button>

        <Button
          onPress={nextFinishButtonHandler}
          style={[styles.button, styles.nextFinishButton]}
        >
          <StyledText>
            <Text style={styles.nextFinishButtonText}>
              {isLastStep ? 'FINISH' : 'NEXT'}
            </Text>
          </StyledText>
        </Button>
      </View>
    );
  }

  return (
    <Content style={styles.container}>
      <View style={{ flex: 1 }}>
        <Tabs
          renderTabBar={renderTabBar}
          style={{ backgroundColor: Style.colors.backgroundColorPrimary }}
          locked
        >
          {renderStep()}
        </Tabs>
        {renderButtons()}
      </View>
    </Content>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: Style.colors.backgroundColorSecondary,
  },
  tabContainer: {
    paddingHorizontal: 20,
  },
  infoTextContainer: {
    marginBottom: 15,
  },
  infoText: {
    fontSize: Style.fontSize,
    lineHeight: 22,
  },
  item: {
    marginLeft: 0,
    marginBottom: 25,
  },
  itemImage: {
    paddingTop: 30,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomWidth: 0,
  },
  label: {
    fontSize: Style.fontSize,
    color: Style.fontColorPrimary,
  },
  buttonContainer: {
    flex: 1,
    height: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Style.colors.backgroundColorPrimary,
    marginBottom: 50,
  },
  button: {
    padding: 20,
  },
  backButtonText: {
    fontSize: Style.fontSizeMedium,
    color: Style.fontColorPrimary,
  },
  backButtonTextDisabled: {
    fontSize: Style.fontSizeMedium,
    color: Style.colorNames.silver,
  },
  nextFinishButton: {
    backgroundColor: Style.colors.primary,
  },
  nextFinishButtonText: {
    fontSize: Style.fontSizeMedium,
    color: Style.colors.fontColorPrimaryInverted,
    fontWeight: Style.fontWeightMedium,
  },
});

export default SignUp;
