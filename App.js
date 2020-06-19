import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/Navigation/index'
import { GloabalProvider } from './src/Context/index';

const App = React$Node = () => {

  return (
    <GloabalProvider value="">
      <Navigation />
    </GloabalProvider>
  )
}


export default App