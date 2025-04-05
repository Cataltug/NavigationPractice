import { Text } from "@react-navigation/elements";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import { StaticParamList } from "@react-navigation/native";

export const RootStack = createNativeStackNavigator({
    initialRouteName:"Home",
    screenOptions: {
        headerStyle: {backgroundColor: "tomato"},
        headerTitleStyle: {color: "white"}
    },
    screens: {
      Home: {
        screen: HomeScreen,
        options: {
            title: "Home",
            headerStyle: {backgroundColor: "dodgerblue"}
        },
        },
      Details: {
        screen: DetailsScreen,
        options: {
            title: "Details"
        },
      },
    },
  });


type RootStackParamList = StaticParamList<typeof RootStack>;

export type GenericScreenNavigationProp =
    NativeStackNavigationProp<RootStackParamList>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}