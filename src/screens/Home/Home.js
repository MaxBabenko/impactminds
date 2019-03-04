import React from 'react';
import { View } from 'react-native';
import type { NavigationState, NavigationScreenProp } from 'react-navigation';

import Feed from './components/Feed';
import FeedItem from './components/FeedItem';
import Header from '../../components/Header';
import Style from '../../styles';
import { APP_TITLE } from '../../constants';

type HomeProps = {
  navigation: NavigationScreenProp<NavigationState>;
}

class Home extends React.Component<HomeProps> {
  renderFeedItems = () => [0, 1, 2].map(key => <FeedItem key={key} />);

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Style.colors.backgroundColorPrimary }}>
        <Header
          title={APP_TITLE}
          leftIconName="menu"
          rightIconName="more-vert"
          onLeftIconPress={this.props.navigation.openDrawer}
        />
        <Feed>{this.renderFeedItems()}</Feed>
      </View>
    );
  }
}

export default Home;
