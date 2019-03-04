import * as React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import StyledText from '../../../components/StyledText';
import Style from '../../../styles';

type Prop = {
  children: React.Node;
}

const Feed = (props: Prop) => (
  <ScrollView style={styles.container}>
    <StyledText containerStyle={styles.titleContainer}>
      <Text style={styles.title}>Feed</Text>
    </StyledText>
    {props.children}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  titleContainer: {
    marginLeft: -20,
    paddingVertical: 20,
  },
  title: {
    fontSize: Style.fontSizeXLarge,
  },
});

export default Feed;
