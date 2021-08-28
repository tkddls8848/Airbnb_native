import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const Auth = createStackNavigator();

const IsAndroid = Platform.OS

export default () => (
  <Auth.Navigator mode="float"
  screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerBackImage: () =>(
            <Ionicons name={IsAndroid=="android" ? "md-home" : "ios-arrow-back"} size={24} color="black" />
      )
  }}>
    <Auth.Screen name="Welcome" component={Welcome} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);