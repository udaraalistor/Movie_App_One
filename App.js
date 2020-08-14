import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';



const Tab = createMaterialBottomTabNavigator();

import {
  StyleSheet,
  View,
  Text
 
} from 'react-native';

import Home from './screen/Home';
import Profile from './screen/Profile';
import Recent from './screen/Recent';


const App= () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#02ac94"
      inactiveColor="#dedede"
      style={{backgroundColor: '#000'}}
      barStyle={{backgroundColor: '#0f0f0f', padding: 4}}
      >
      <Tab.Screen 
      name="Home" 
      component={Home}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name='home' color={color} size={25}/>
        )
      }} 
       />
      <Tab.Screen 
      name="Profile" 
      component={Profile}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name='user' color={color} size={25}/>
        )
      }} 
       />
      <Tab.Screen 
      name="Recent" 
      component={Recent}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name='bell' color={color} size={25}/>
        )
      }} 
       />
    </Tab.Navigator>

    </NavigationContainer>
  
  );
};

const styles = StyleSheet.create({
 
});

export default App;
