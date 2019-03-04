import React from 'react';
import { AsyncStorage, View } from 'react-native';
import type { NavigationScreenProp } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';

import Header from '../../components/Header';
import Logo from '../../components/Logo';
import AuthTabs from './components/AuthTabs';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Style from '../../styles';
import { APP_TITLE } from '../../constants';
import * as Routes from '../../routes';

type AuthenticationProps = {
  navigation: NavigationScreenProp;
}

class Authentication extends React.Component<AuthenticationProps> {
  state = {
    loginName: '',
    loginPassword: '',
    email: '',
    dob: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    occupation: undefined,
    photo: {},
    infoBegin: [true, true, true],
    infoEnd: [true, true, ''],
    signUpStep: 1,
  }

  handleSignInPress = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'abc');
    this.props.navigation.navigate(Routes.HOME);
  }

  handleNextPress = () => {
    if (this.state.signUpStep === 3) return;
    this.setState(prevState => ({ signUpStep: prevState.signUpStep + 1 }));
  }

  handleBackPress = () => {
    if (this.state.signUpStep === 1) return;
    this.setState(prevState => ({ signUpStep: prevState.signUpStep - 1 }));
  }

  handleStepPress = (step) => {
    this.setState({ signUpStep: step });
  }

  handleLoginNameChange = (e) => {
    this.setState({ loginName: e.target.value });
  }

  handleLoginPasswordChange = (e) => {
    this.setState({ loginPassword: e.target.value });
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handleDobChange = (e) => {
    this.setState({ dob: e.target.value });
  }

  handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  }

  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleConfirmPasswordChange = (e) => {
    this.setState({ confirmPassword: e.target.value });
  }

  handleOccupationChange = (i) => {
    this.setState({ occupation: i });
  }

  handlePhotoChange = () => {
    const options = { noData: true };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  }

  handleInfoBeginChange = (value, i) => {
    this.setState(prevState => ({
      infoBegin: prevState.infoBegin.map(
        (prevValue, j) => (i === j ? value : prevValue),
      ),
    }));
  }

  handleInfoEndChange = (value, i) => {
    this.setState(prevState => ({
      infoEnd: prevState.infoEnd.map(
        (prevValue, j) => (i === j ? value : prevValue),
      ),
    }));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          title={APP_TITLE}
          containerStyle={{ backgroundColor: Style.colors.backgroundColorSecondary }}
          titleStyle={{ color: Style.colors.fontColorPrimary }}
        />
        <Logo />
        <AuthTabs>
          <SignIn
            name={this.state.loginName}
            password={this.state.loginPassword}
            onNameChange={this.handleLoginNameChange}
            onPasswordChange={this.handleLoginPasswordChange}
            onSignInPress={this.handleSignInPress}
          />
          <SignUp
            email={this.state.email}
            dob={this.state.dob}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            password={this.state.password}
            confirmPassword={this.state.confirmPassword}
            occupation={this.state.occupation}
            photo={this.state.photo}
            infoBegin={this.state.infoBegin}
            infoEnd={this.state.infoEnd}
            step={this.state.signUpStep}
            onEmailChange={this.handleEmailChange}
            onDobChange={this.handleDobChange}
            onFirstNameChange={this.handleFirstNameChange}
            onLastNameChange={this.handleLastNameChange}
            onPasswordChange={this.handlePasswordChange}
            onConfirmPasswordChange={this.handleConfirmPasswordChange}
            onOccupationChange={this.handleOccupationChange}
            onPhotoChange={this.handlePhotoChange}
            onInfoBeginChange={this.handleInfoBeginChange}
            onInfoEndChange={this.handleInfoEndChange}
            onStepPress={this.handleStepPress}
            onBackPress={this.handleBackPress}
            onNextPress={this.handleNextPress}
            onFinishPress={this.handleSignInPress}
          />
        </AuthTabs>
      </View>
    );
  }
}

export default Authentication;
