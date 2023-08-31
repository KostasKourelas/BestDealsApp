import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Ebay from './screens/Ebay';
import Cosmos from './screens/Cosmos';
import Epapoutsia from './screens/Epapoutsia';
import Zakcret from './screens/Zakcret';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontWeight: "900",
          fontSize: 14
        },
        tabBarIconStyle: { display: "none" },
      }}>
        <Tab.Screen name="Zakcret" component={Zakcret} />
        <Tab.Screen name="e-papoutsia" component={Epapoutsia} />
        <Tab.Screen name="Cosmos" component={Cosmos} />
        {/* <Tab.Screen name="ebay" component={Ebay} /> */}
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
