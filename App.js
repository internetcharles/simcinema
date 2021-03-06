import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import InfoSummary from './src/Components/CreateMovie/InfoSummary';
import MovieInfo from './src/Components/CreateMovie/MovieInfo';
import FilmingHome from './src/Components/Filming/FilmingHome';
import Funding from './src/Components/Funding/Funding';
import Home from './src/Components/Home/Home';
import MovieHome from './src/Components/Movie/MovieHome';
import ActorSelect from './src/Components/Select/ActorSelect';
import ActressSelect from './src/Components/Select/ActressSelect';
import AudioSelect from './src/Components/Select/AudioSelect';
import ComposerSelect from './src/Components/Select/ComposerSelect';
import SFXSelect from './src/Components/Select/SFXSelect';
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
        <AppStack.Screen name='actorselect' component={ActorSelect} options={{ gestureEnabled: false }} />
        <AppStack.Screen name='actressselect' component={ActressSelect} options={{ gestureEnabled: false }} />
        <AppStack.Screen name='composerselect' component={ComposerSelect} options={{ gestureEnabled: false }} />
        <AppStack.Screen name='sfxselect' component={SFXSelect} options={{ gestureEnabled: false }} />
        <AppStack.Screen name='audioselect' component={AudioSelect} options={{ gestureEnabled: false }} />
        <AppStack.Screen name='filming' component={FilmingHome} options={{ gestureEnabled: false }} />
        <AppStack.Screen name='moviehome' component={MovieHome} options={{ gestureEnabled: false }} />
      </AppStack.Navigator>
    </NavigationContainer>
  </Provider>
)


export default function App() {
  return (
    <AppNavigator />
  );
}
