import { View, Text } from 'react-native'
import React from 'react'
import { createStaticNavigation } from '@react-navigation/native';
import { RootStack } from './Router';

const Navigation = createStaticNavigation(RootStack);

const App = () => {
  return (
    <Navigation />
  )
}

export default App