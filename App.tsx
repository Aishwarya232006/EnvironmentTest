// App.js
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {HomeScreen} from './src/screens'; // Import from your index.js

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#3498db" />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
