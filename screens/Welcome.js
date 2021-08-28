import React from "react";
import { View, Text, Button } from "react-native";
import SignIn from "../screens/SignIn"


export default ({navigation}) => {
        console.log(navigation);
        return(
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text>
                Welcome
            </Text>
            <Button onPress={() => navigation.navigate("SignIn") } title={"Sign In"}/>
            <Button onPress={() => navigation.navigate("SignUp")} title={"Sign Up"}/>
        </View>
        )
}