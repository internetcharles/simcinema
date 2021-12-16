import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import Home from './src/Components/Home/Home';
import store from './src/Redux/store';

const AppStack = createStackNavigator();
const AppNavigator = () => (
  <Provider store={store}>
    <NavigationContainer>
      <AppStack.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName='home'>
        <AppStack.Screen name='home' component={Home} options={{ gestureEnabled: false }} />
      </AppStack.Navigator>
    </NavigationContainer>
  </Provider>
)


export default function App() {
  return (
    <AppNavigator />
  );
}
