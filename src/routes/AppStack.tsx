import React from "react";
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import Home from '../pages/Home';
import Decks from '../pages/Decks';
import Flashs from "../pages/Flashs";
import Flash from "../pages/Flash";

export type RootStackParamList = {
  Home: undefined;
  Decks: undefined;
  Flashs: undefined;
  Flash: undefined;
};
const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }} >
        <Screen name="Home" component={Home} />
        <Screen name="Decks" component={Decks} />
        <Screen name="Flashs" component={Flashs} />
        <Screen name="Flash" component={Flash} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;