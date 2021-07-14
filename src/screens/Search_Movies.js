
import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../modules/Header';
import { localStorgageSetItem } from '../helper'
import Toast from '../modules/toast'
import List from '../modules/list'
import {
  getSearchMovies, getPopularMovies
} from '../Http_Services'

const SearchMovies = ({ navigation }) => {
  const [data, setData] = useState({title: 'popularMovies', data: []})
  var [page, setPage] = useState(1)
  const [searchtxt, setSearchtxt] = useState('')
  
  const [favouriteData, setFavouriteData] = useState([])

  useEffect(() => {
    AsyncStorage.multiGet(["popularMovies", "favouriteData"]).
      then((data) => {
        var popularMovies = data[0]
        var favouriteData = data[1]
        if (popularMovies[1] !== null) {
          popularMovies = JSON.parse(popularMovies[1])
          if (popularMovies.length !== 0) setData({title: 'popularMovies', data: [...popularMovies]})
        }
        if (favouriteData[1] !== null) {
          favouriteData = JSON.parse(favouriteData[1])
          if (favouriteData.length !== 0) setFavouriteData(favouriteData)
        }
      })
  }, [])
  const clickFavourity = useCallback(
    (data) => {
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
  function searchItem(txt, choose) {
    debugger
    if (choose === 'searchResult') {
    getSearchMovies(txt, page).then(res => {
      debugger
      if (res.error) {
        Toast(res.message.toString())
        return;
      }
      var arr = []
      if (page === 1) {
        arr = [...res.data.results]
      } else {
        arr = [...data.data, ...res.data.results]
      }
      setData({
        title: 'searchResult',
        data: arr
      })
    })
  } else {
    getPopularMovies(page).then(response => {
      debugger
      if (response.error) {
        Toast(response.message.toString())
        return;
      }
      debugger
      setData({
        title: 'popularMovies',
        data: [...data.data, ...response.data.results]
      })
    })
  }
  }
  return (
    <View style={style.home}>
      <Header title={'search'} iconName={'back'} search={true}
      backCallBack={() => navigation.pop()}
      callback={(txt) => {
        if (txt === '') return
        setPage(1)
        searchItem(txt, 'searchResult')
      }} />
      <List clickFavourity={clickFavourity} data={data.data} navigation={navigation} 
      pagiNationCallBack={() => {
        debugger
        setPage(++page)
        searchItem('', data.title)
      }}
      favouriteData={favouriteData} 
      />
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

export default SearchMovies;