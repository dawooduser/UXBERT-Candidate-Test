import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from '../screens/Home'
import Search_Movies from '../screens/Search_Movies'
import Favourite from '../screens/Favourite'
import SplashScreen from '../screens/SplashScreen'
import MoviePage from '../screens/Movie_Page'

export default class MyStack extends React.Component {
    render() {
    return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="SplashScreen">
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search_Movies" component={Search_Movies} />
            <Stack.Screen name="Favourite" component={Favourite} />
            <Stack.Screen name="MoviePage" component={MoviePage} />
            
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
}