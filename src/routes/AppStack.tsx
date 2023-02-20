import React from "react";
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import Home from '../pages/Home';
import Decks from '../pages/Decks';
import Flashs from "../pages/Flashs";
import Flash from "../pages/Flash";
import NewSubject from "../pages/NewSubject";
import NewDeck from "../pages/NewDeck";
import NewFlash from "../pages/NewFlash";
import EditFlash from "../pages/EditFlash";

export type RootStackParamList = {
  Home: undefined;
  Decks: undefined;
  Flashs: undefined;
  Flash: undefined;
  NewSubject: undefined;
  NewDeck: undefined;
  NewFlash: undefined;
  EditFlash: undefined;
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
        <Screen name="NewSubject" component={NewSubject} />
        <Screen name="NewDeck" component={NewDeck} />
        <Screen name="NewFlash" component={NewFlash} />
        <Screen name="EditFlash" component={EditFlash} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;