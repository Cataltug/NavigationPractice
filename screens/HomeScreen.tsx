import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { GenericScreenNavigationProp } from '../Router';

const HomeScreen = () => {
    const navigation = useNavigation<GenericScreenNavigationProp>();

  return (
    <View>
      <Button onPress={() => navigation.navigate("Details")} 
      title="Go Details"
      />
    </View>
  )
}

export default HomeScreen