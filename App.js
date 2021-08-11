import * as React from 'react';
import {View, Text} from 'react-native';
import Routes from './Src/navigations/routes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Src/Screens/Auth/Login';
import Signup from './Src/Screens/Auth/Signup';
import Dashboard from './Src/Screens/Home/Dashboard';
import StartBreakAndShift from './Src/Screens/Home/StartBreakAndShift';
import EventSchedule from './Src/Screens/Home/EventSchedule';
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

function App() {

  const Stack = createStackNavigator();

  return (
      // <Routes />
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

export default App;
