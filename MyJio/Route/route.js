import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionic from 'react-native-vector-icons/Ionicons'
import Home from '../BottamTab/Home';
import Search from '../BottamTab/Search';
import Reels from '../Screens/Reels';
import Activity from '../BottamTab/Activity';
import Profile from '../BottamTab/Profile';
import Status from '../Screens/Status';
import Post from '../Screens/Post';
import FriendProfile from '../Screens/FriendsProfile';
// In App.js in a new project




const Route = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const Bottomscreen = () => {
      return (
          <Tab.Navigator
              screenOptions={({ route }) => ({
                  tabBarShowLabel: false,
                  headerShown: false,
                  tabBarStyle: {
                      height: 50,
                  },
                  tabBarIcon: ({ focused, size, colour }) => {
                      let iconName;
                      if (route.name === "Home") {
                          iconName = focused ? "home-sharp" : "home-outline";
                          size = focused ? size + 3 : size + 2;
                          colour="black"
                      } else if (route.name === "Search") {
                          iconName = focused ? "search" : "search-outline",
                          colour="black"
                      } else if (route.name === "Reels") {
                          iconName = focused ? "caret-forward-circle" : "caret-forward-circle-outline",
                          colour="black"
                      } else if (route.name === "Activity") {
                          iconName = focused ? "heart" : "heart-outline",
                          colour="black"
                      } else if (route.name === "Profile") {
                          iconName = focused ? "person-circle" : "person-outline",
                          colour="black"
                      }
                      return <Ionic name={iconName} size={size} color={colour} />
                  }
  
  
  
              })}>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Search" component={Search} />
              <Tab.Screen name="Reels" component={Reels} />
              <Tab.Screen name="Activity" component={Activity} />
              <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
      )
  }
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerShown: false
          }}>
              <Stack.Screen name='BottomScreen' component={Bottomscreen} />
              <Stack.Screen name='Status' component={Status} />
              <Stack.Screen name='Post' component={Post} />
              <Stack.Screen name='FriendProfile' component={FriendProfile} />
          </Stack.Navigator>
      </NavigationContainer>
  )
  
}

export default Route

const styles = StyleSheet.create({})