import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
  Button, Form, Icon, Input, Item, Label, Picker, Text,
} from 'native-base';

import StyledText from '../../../components/StyledText';
import Style from '../../../styles';
import { OCCUPATION_LIST } from '../constants';

const SignUpStep1 = props => (
  <View style={styles.container}>
    <Form>
      <Item style={styles.item} floatingLabel>
        <Label>Email</Label>
        <Input
          value={props.email}
          onChange={props.onEmailChange}
          keyboardType="email-address"
        />
      </Item>

      <Item style={styles.item} floatingLabel>
        <Label>Date of BirthDay</Label>
        <Input
          value={props.dob}
          onChange={props.onDobChange}
          keyboardType="numeric"
        />
      </Item>

      <Item style={styles.item} floatingLabel>
        <Label>First Name</Label>
        <Input value={props.firstName} onChange={props.onFirstNameChange} />
      </Item>

      <Item style={styles.item} floatingLabel>
        <Label>Last Name</Label>
        <Input value={props.lastName} onChange={props.onLastNameChange} />
      </Item>

      <Item style={styles.item} floatingLabel>
        <Label>Password</Label>
        <Input
          value={props.password}
          onChange={props.onPasswordChange}
          secureTextEntry
        />
      </Item>

      <Item style={styles.item} floatingLabel>
        <Label>Confirm Password</Label>
        <Input
          value={props.confirmPassword}
          onChange={props.onConfirmPasswordChange}
          secureTextEntry
        />
      </Item>

      <Item style={styles.item} picker>
        <View style={{ flex: 1 }}>
          <Picker
            style={styles.picker}
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" style={styles.pickerIcon} />}
            placeholder="Main occupation"
            placeholderStyle={styles.pickerPlaceholder}
            placeholderIconColor="red"
            selectedValue={props.occupation}
            onValueChange={props.onOccupationChange}
          >
            {OCCUPATION_LIST.map((occupation, i) => (
              <Picker.Item
                key={i}
                label={<Text style={styles.pickerItem}>{occupation}</Text>}
                value={i}
              />
            ))}
          </Picker>
        </View>
      </Item>

      <Item style={[styles.item, styles.itemImage]}>
        <StyledText>
          <Text style={styles.itemImageTitle}>Image</Text>
        </StyledText>

        <Button
          style={styles.button}
          onPress={props.onPhotoChange}
          transparent
        >
          {props.photo.uri
            ? <Image source={{ uri: props.photo.uri }} style={styles.image} />
            : <View style={[styles.image, styles.imagePlaceholder]} />
          }
        </Button>
      </Item>
    </Form>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
  },
  item: {
    marginLeft: 0,
    marginBottom: 25,
  },
  picker: {
    height: 50,
    width: '100%',
    marginTop: 15,
    paddingBottom: 0,
    alignItems: 'flex-end',
  },
  pickerItem: {
    fontSize: Style.fontSizeLarge,
    color: Style.colorNames.dimGrey,
  },
  pickerIcon: {
    marginRight: 0,
    lineHeight: Style.lineHeightSmall,
    fontSize: Style.fontSizeMedium,
    color: Style.colorNames.dimGrey,
  },
  pickerPlaceholder: {
    fontSize: Style.fontSizeLarge,
    color: Style.colorNames.dimGrey,
    paddingLeft: 0,
    alignSelf: 'flex-end',
  },
  itemImage: {
    paddingTop: 30,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomWidth: 0,
  },
  itemImageTitle: {
    fontSize: Style.fontSizeLarge,
    color: Style.colorNames.dimGrey,
  },
  image: {
    marginTop: 10,
    width: 50,
    height: 50,
  },
  imagePlaceholder: {
    backgroundColor: Style.colors.backgroundColorSecondary,
  },
  button: {
    paddingHorizontal: 10,
  },
});

export default SignUpStep1;
