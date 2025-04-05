import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { GenericScreenNavigationProp } from '../Router';

const DetailsScreen = () => {
const navigation = useNavigation<GenericScreenNavigationProp>();
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title='Go Back' />
      <Button onPress={() => navigation.popTo("Home")} title='Go to First Page' />
      <Button onPress={() => navigation.push("Details")} title='Go Details' />
    </View>
  )
}

export default DetailsScreen