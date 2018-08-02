import React from 'react';
import { Image, View } from '@shoutem/ui';

import { MonoText } from './../components/StyledText';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View styleName="vertical h-center">
        <Image
          source={require('../assets/images/robot-dev.png')}
          style={{
            width: 100,
            height: 80,
            resizeMode: 'contain',
            marginTop: 3,
            marginLeft: -10
          }}
        />
        <MonoText>Junior Developer</MonoText>
        <Image
          source={require('../assets/images/robot-prod.png')}
          style={{
            width: 100,
            height: 80,
            resizeMode: 'contain',
            marginTop: 3,
            marginLeft: -10
          }}
        />
        <MonoText>Senior Developer</MonoText>
      </View>
    );
  }
}
