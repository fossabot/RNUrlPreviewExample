import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import RNUrlPreview from "react-native-url-preview";
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <RNUrlPreview text={"Myrath dance https://medium.com/s/user-friendly/emulation-is-not-a-product-strategy-cfecdbffce96"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
