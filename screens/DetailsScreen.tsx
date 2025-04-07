import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import { GenericScreenNavigationProp } from '../Router';

type Props = StaticScreenProps<{
  itemId?: number;
  otherParam?: string;
}>;

const DetailsScreen = ( props: Props) => {
const navigation = useNavigation<GenericScreenNavigationProp>();
const {itemId, otherParam} = props.route.params;
const [postText, setPostText] = useState("")
  return (
    <View>
      <TextInput
        style={{ fontSize: 24, borderWidth: 5, backgroundColor: 'white' }}
        onChangeText={setPostText}
      />
      <Button title='Return Home with parameters'
        onPress={() => {
          navigation.popTo('Home', { post: postText });
        }}/>
    </View>
  )
}

export default DetailsScreen