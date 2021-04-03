//import liraries
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenMain, ScreenList } from "../Screen";
import { NavigationContainer } from "@react-navigation/native";

// create a component
const main = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={ScreenMain} />
        <Stack.Screen name="list" component={ScreenList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default main;
