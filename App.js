import {Button, StyleSheet, View} from 'react-native';

import React from 'react';

export default function App() {
  const handlePress = () => {
    throw new Error('Hello world!');
  };

  return (
    <View style={styles.container}>
      <Button onPress={handlePress} title="Throw error" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
