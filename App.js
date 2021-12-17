import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import InfoSummary from './src/Components/CreateMovie/InfoSummary';
import MovieInfo from './src/Components/CreateMovie/MovieInfo';
import Funding from './src/Components/Funding/Funding';
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
        <AppStack.Screen name='movieinfo' component={MovieInfo} options={{ gestureEnabled: false }} />
        <AppStack.Screen name='infosummary' component={InfoSummary} options={{ gestureEnabled: false }} />
        <AppStack.Screen name='fundingscreen' component={Funding} options={{ gestureEnabled: false }} />
      </AppStack.Navigator>
    </NavigationContainer>
  </Provider>
)


export default function App() {
  return (
    <AppNavigator />
  );
}
