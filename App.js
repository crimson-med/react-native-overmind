import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import { config } from './overmind'

export default function App() {
    const overmind = createOvermind(config)
  return (
    <Provider value={overmind}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{overmind.state.taps}</Text>
      <Button
          title="Press me"
          onPress={() => overmind.actions.incrementTaps()}
        />
    </View>
  </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
