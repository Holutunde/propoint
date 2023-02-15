import React from "react";
import { useFonts } from "expo-font";
// import { Provider, useSelector } from 'react-redux'
// import createdStore from './store'
// import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import IntroStack from "./src/navigation/introStack";
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import { CartContextProvider } from './Util/Cartcontext'
// import { getAsyncData } from './helpers/storage'
// import AppStack from './Navigation/AppStack'
// import AppIntro from './Navigation/AppIntro'
// import DrawerStack from './Navigation/DrawerStack'

// const customFonts = {
//   DMSansRegular: require('./assets/fonts/DMSans-Regular.ttf'),
//   DMSansBold: require('./assets/fonts/DMSans-Bold.ttf'),
//   DMSansBoldItalic: require('./assets/fonts/DMSans-BoldItalic.ttf'),
//   DMSansMeduim: require('./assets/fonts/DMSans-Medium.ttf'),
//   DMSansMediumItalic: require('./assets/fonts/DMSans-MediumItalic.ttf'),
//   DMSansItalic: require('./assets/fonts/DMSans-Italic.ttf'),
// }

const App = () => {
  // const [fontsLoaded] = useFonts(customFonts)
  return (
    <NavigationContainer>
      <IntroStack />
    </NavigationContainer>
  );
};

export default App;
