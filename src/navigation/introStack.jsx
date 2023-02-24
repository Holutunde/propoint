import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/intro/SplashScreen'
import WelcomeScreen from '../screens/intro/WelcomeScreen'
import TabStack from './tabStack'

const IntroStart = createNativeStackNavigator()

const IntroStack = () => {
  return (
    <IntroStart.Navigator screenOptions={{ headerShown: false }}>
      <IntroStart.Screen name="splash" component={SplashScreen} />
      <IntroStart.Screen name="welcome" component={WelcomeScreen} />
      <IntroStart.Screen name="Tab" component={TabStack} />
      
    </IntroStart.Navigator>
  )
}

export default IntroStack
