import React, {useEffect, useState, useCallback} from 'react';
import { Text, StyleSheet, View,  } from 'react-native';
import List from '../modules/list'
import { localStorgageGetItem, localStorgageSetItem } from '../helper'
import Header from '../modules/Header';
const Favourites = ({navigation}) => {
  const [data, setData] = useState([])
  const [favouriteData, setFavouriteData] = useState([])
  useEffect(() => {
    localStorgageGetItem('favouriteData').then(res => {
      if (res !== null && !res) {
        // setData(res)
        setFavouriteData(res)
      }
    }, [])
  })
  const clickFavourity = useCallback(
    (data) => {
      debugger
      var _favouriteData = [...favouriteData]
      const check = _favouriteData.filter(x => x.id === data.id)
      if (check.length === 0) {
        _favouriteData.push(data)
      } else {
        const getArr = _favouriteData.filter(x => x.id !== data.id)
        _favouriteData = [...getArr]
      }
      return localStorgageSetItem('favouriteData', _favouriteData).then(res => {
        setFavouriteData(_favouriteData)
      })
    }
  );
  return (
    <View style={style.home}>
      <Header title={'Favourites'} iconName={'heart'} />
      <List clickFavourity={clickFavourity} data={favouriteData} navigation={navigation} favouriteData={favouriteData} />
    </View>

  );
}

const style = StyleSheet.create({
  home: {
    flex: 1,
    padding: 20,
    height: '100%'
  },
})

export default Favourites;