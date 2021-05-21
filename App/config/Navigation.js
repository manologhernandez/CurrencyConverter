import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home"
import Options from "../screens/Options"
import CurrencyList from "../screens/CurrencyList"
import { TouchableOpacity } from "react-native"
import { Entypo } from "@expo/vector-icons"
import colors from "../constants/colors"

const MainStack = createStackNavigator()
const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="Options" component={Options} />
    </MainStack.Navigator>
  )
}
const ModalStack = createStackNavigator()
const ModalStackScreen = () => {
  return (
    <ModalStack.Navigator mode="modal">
      <ModalStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <ModalStack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={({ navigation, route }) => ({
          title: route.params.title,
          headerLeft: null,
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.pop()}
                style={{ paddingHorizontal: 15 }}
              >
                <Entypo name="cross" size={30} color={colors.blue} />
              </TouchableOpacity>
            )
          },
        })}
      />
    </ModalStack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <ModalStackScreen />
    </NavigationContainer>
  )
}
