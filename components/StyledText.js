import React from 'react';
import { Text } from '@shoutem/ui';

export class MonoText extends React.Component {
  render() {
    return (
      <Text style={{ fontFamily: 'space-mono' }}>{this.props.children}</Text>
    );
  }
}
