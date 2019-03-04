import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {
  Content, Form, Item, Label, Input, Button,
} from 'native-base';

import StyledText from '../../../components/StyledText';
import Style from '../../../styles';

type SignInProps = {
  name: string;
  password: string;
  onNameChange: () => void;
  onPasswordChange: () => void;
  onSignInPress: () => void;
};

const SignIn = (props: SignInProps) => (
  <Content style={styles.container}>
    <Form style={styles.form}>
      <Item style={styles.item} floatingLabel>
        <Label>Name</Label>
        <Input value={props.name} onChange={props.onNameChange} />
      </Item>

      <Item style={styles.item} floatingLabel>
        <Label>Password</Label>
        <Input
          value={props.password}
          onChange={props.onPasswordChange}
          secureTextEntry
        />
      </Item>

      <Button style={styles.button} onPress={props.onSignInPress}>
        <StyledText>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </StyledText>
      </Button>
    </Form>
  </Content>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: Style.colors.backgroundColorSecondary,
  },
  form: {
    backgroundColor: Style.colors.backgroundColorPrimary,
    paddingHorizontal: 40,
    paddingVertical: 25,
    marginBottom: 50,
  },
  item: {
    marginLeft: 0,
    marginBottom: 25,
  },
  button: {
    backgroundColor: Style.colors.primary,
    marginLeft: -20,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: Style.fontSizeMedium,
    color: Style.colors.fontColorPrimaryInverted,
    fontWeight: Style.fontWeightMedium,
  },
});

export default SignIn;
