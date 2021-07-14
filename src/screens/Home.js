import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import Home_Widget from '../modules/Home_Widget';
import Header from '../modules/Header';

import {
  searchMovieImagePath,
  favouriteMovieImagePath,
  titleSearchWidget,
  titleFavouriteWidget
} from '../helper/contains'
const Home = ({navigation}) => {
  function _navigation(name) {
    navigation.navigate(name)
  }
  return (
    <View style={style.home}>
      <Header title={'Home'} iconName={'home'} />
        <View style={style.homeBody} > 
        <Home_Widget callBack={() => _navigation('Search_Movies')} text={titleSearchWidget} imageUrl={searchMovieImagePath} />
        <Home_Widget callBack={() => _navigation('Favourite')} text={titleFavouriteWidget} imageUrl={favouriteMovieImagePath} />
        </View>
    </View>

  );
}

const style = StyleSheet.create({
  home: {
    flex: 1,
    padding: 20,
    height: '100%'
  },
  homeBody: {
    height: '70%', 
    justifyContent: 'space-around', 
    marginTop: 10
  }
})

export default Home;