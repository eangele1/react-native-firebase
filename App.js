import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./context/AuthContext";
import "./firebase";

import Home from "./screens/Home/Home";
import Auth from "./screens/Auth/Auth";
import Profile from "./screens/Profile/Profile";

import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View, Dimensions } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen
            name="Auth"
            options={{ headerShown: false }}
            component={Auth}
          />
          <Stack.Screen
            name="Home"
            options={({ navigation }) => ({
              title: "RN-Firebase",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#2e2633",
              },
              headerRight: () => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: width * 0.25,
                  }}
                >
                  <TouchableOpacity>
                    <MaterialIcons name="post-add" size={30} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}
                  >
                    <Ionicons
                      name="person-circle-outline"
                      size={30}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              ),
            })}
            component={Home}
          />
          <Stack.Screen
            name="Profile"
            options={{
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#2e2633",
              },
            }}
            component={Profile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
