import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Screens/Splash/Splash';
import Login from '../Screens/Auth/Login';
import Signup from '../Screens/Auth/Signup';
import Dashboard from '../Screens/Home/Dashboard';
import StartBreakAndShift from '../Screens/Home/StartBreakAndShift';
import EventSchedule from '../Screens/Home/EventSchedule';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: null,
        }} initialRouteName="login">
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="EventSchedule" component={EventSchedule} />

        <Stack.Screen
          name="StartBreakAndShift"
          component={StartBreakAndShift}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
