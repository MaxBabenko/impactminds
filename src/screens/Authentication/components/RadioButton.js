import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Radio } from 'native-base';

import StyledText from '../../../components/StyledText';
import Style from '../../../styles';

type Props = {
  title: string;
  id: number;
  value: boolean;
  onPress: (value: boolean, id: number) => void;
};

const RadioButton = (props: Props) => (
  <View style={styles.container}>
    <StyledText containerStyle={styles.titleContainer}>
      <Text style={styles.title}>
        {props.title}
      </Text>
    </StyledText>

    <TouchableOpacity
      style={styles.item}
      onPress={() => props.onPress(true, props.id)}
    >
      <Radio style={styles.radio} selected={props.value} />
      <StyledText>Yes</StyledText>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.item}
      onPress={() => props.onPress(false, props.id)}
    >
      <Radio style={styles.radio} selected={!props.value} />
      <StyledText>No</StyledText>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    lineHeight: Style.lineHeight,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 35,
    marginBottom: 10,
  },
  radio: {
    width: 35,
  },
});

export default RadioButton;
