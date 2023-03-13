import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { FaizelTest1View } from 'react-native-faizel_test_1';

export default function App() {
  return (
    <View style={styles.container}>
      <FaizelTest1View color="#32a852" style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
