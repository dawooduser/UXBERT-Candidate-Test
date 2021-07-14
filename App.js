import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';
import MyStack from './src/navigation'
function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <MyStack />
    </>
  );
};



export default App;
