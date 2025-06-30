import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Users from '../pages/users';
import Register from '../pages/register';

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName='Register'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Users' component={Users} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  );
}
