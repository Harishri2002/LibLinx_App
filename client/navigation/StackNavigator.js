import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  AntDesign,
  Feather,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";
import BooksScreen from "../screens/BooksScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="MyBooks"
          component={BooksScreen}
          options={{
            tabBarLabel: "MyBooks",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="book" size={24} color="black" />
              ) : (
                <Feather name="book" size={24} color="black" />   
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="black" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
