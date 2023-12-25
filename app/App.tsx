
import "react-native-gesture-handler";
import { View, Text, AppRegistry } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    light: require("./assets/fonts/Quicksand-Light.ttf"), //
    regular: require("./assets/fonts/Quicksand-Regular.ttf"),
    // medium: require("./assets/fonts/Quicksand-Medium.ttf"),
    semi: require("./assets/fonts/Quicksand-SemiBold.ttf"),
    bold: require("./assets/fonts/Quicksand-Bold.ttf"),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home"
       component={Home}
       options={{headerShown: false}}
       />
    
    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;
