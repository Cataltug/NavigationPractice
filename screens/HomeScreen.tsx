import { View, Text, Button } from 'react-native'
import React from 'react'
import { StaticScreenProps, useNavigation } from '@react-navigation/native'
import { GenericScreenNavigationProp } from '../Router';

type Props = StaticScreenProps<{
  post?: string;
  postText?: string;
}>;

const HomeScreen = (props: Props) => {
    const navigation = useNavigation<GenericScreenNavigationProp>();
    const postText = props.route.params.post;
  return (
    <View>
      <Button onPress={() => navigation.navigate("Details", {
        otherParam: "Anything"
      })} 
      title="Go Details"
      />
      {postText && <Text style={{fontSize :42}}>{postText} eklendi</Text>}
    </View>
  )
}

export default HomeScreen