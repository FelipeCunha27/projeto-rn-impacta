import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
import Users from '../pages/users';
import Register from '../pages/register';

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Users' component={Users} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  );
}
