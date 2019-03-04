import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Body, Card, CardItem } from 'native-base';

import StyledText from '../../../components/StyledText';
import Style from '../../../styles';

const FeedItem = () => (
  <Card style={styles.card}>
    <CardItem style={styles.cardItem}>
      <Body>
        <View style={{ width: '100%', height: 100, backgroundColor: 'lightgrey' }} />
        <StyledText containerStyle={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Auctor elit sed vulputate mi.
        </StyledText>
      </Body>
    </CardItem>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
  },
  cardItem: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
  image: {
    width: '100%',
    height: 100,
    backgroundColor: Style.colorNames.silver,
  },
  text: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

export default FeedItem;
