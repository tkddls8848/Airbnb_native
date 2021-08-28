import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector , useDispatch} from "react-redux";
import {logIn, logOut} from "../redux/userSlice";
import Auth from "../navigation/Auth"
import { NavigationContainer } from "@react-navigation/native";

export default () => {
  const userslice = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
        {userslice.isLoggedIn ? 
          <TouchableOpacity onPress={() =>dispatch(logOut())}>
            <Text>Log Out</Text>
          </TouchableOpacity> : 
            <Auth></Auth>
        }
    </NavigationContainer>
  );
};