import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddToCardScreen from "./Screens/AddToCardScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import OnlineScreen from "./Screens/OnlineScreen";

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="online"
          component={OnlineScreen}
          options={{
            title: "Welcome OnLine",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: { fontSize: 30 },
          }}
        />
        <Stack.Screen
          name="getStarted"
          component={PaymentScreen}
          options={{
            title: "Thank You For Shopping ",
            headerTintColor: "purple",
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerTitleStyle: { fontSize: 20 },
          }}
        />
        <Stack.Screen
          name="addToCart"
          component={AddToCardScreen}
          options={{
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;

const styles = StyleSheet.create({});
