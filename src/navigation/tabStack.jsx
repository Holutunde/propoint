import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import Homescreen from '../screens/main/HomeScreen'
import surveyScreen from '../screens/main/SurveyScreen'
import propointScreen from '../screens/main/PropointScreen'
import { lightTheme } from "../config/colors";
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()

const TabStack = () => {
  return (
    <Tab.Navigator 
    screenOptions ={{
      headerShown: false,
      tabBarShowLabel:false,
      tabBarStyle:{
        backgroundColor: '#01AB92',
        height:70
      }
    }}
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          
          tabBarIcon: ({focused})=>(
            <View style = {{alignItems:'center', justifyContent:'center'}}>
              <Entypo style={{color:focused?'#909090':'#ffffff' }} name="home" size={20}  />
              <Text style={{color:focused?'#909090':'#ffffff', paddingTop: 3}}>Home</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Propoint"
        component={propointScreen}
        options={{
          
          tabBarIcon: ({focused})=>(
            <View style = {{alignItems:'center', justifyContent:'center'}}>
              <MaterialCommunityIcons  style={{color:focused?'#909090':'#ffffff' }} name="access-point-network" size={20}  />
              <Text style={{color:focused?'#909090':'#ffffff', paddingTop: 3}}>Propoint</Text>
            </View>
          )
        }}
      />
     <Tab.Screen
        name="Survey"
        component={surveyScreen}
        options={{
          
          tabBarIcon: ({focused})=>(
            <View style = {{alignItems:'center', justifyContent:'center'}}>
              <AntDesign style={{color:focused?'#909090':'#ffffff' }}  name="form" size={18}  />
              <Text style={{color:focused?'#909090':'#ffffff',paddingTop: 3}}>Survey</Text>
            </View>
          )
        }}
      />
      
    </Tab.Navigator>
  )
}

export default TabStack

const styles = StyleSheet.create({})
