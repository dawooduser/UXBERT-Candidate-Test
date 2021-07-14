import React, {useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {getPopularMovies} from '../Http_Services'
import {localStorgageSetItem} from '../helper'
import Toast from '../modules/toast'
export default function SplashScreen({navigation}) {
    useEffect(() => {
        getPopularMovies(1).then(response => {
            debugger
            if (response.error) {
                Toast(response.message.toString())
               return navigation.navigate('Home')
            }
            localStorgageSetItem('popularMovies', response.data.results).then(res => {
                navigation.navigate('Home')
            })
        })
      }, []);
    return (
        <View style={style.Container}>
            <Text style={{fontSize: 20}}>UXBERT USABILITY Lab</Text>
            <Text style={{fontSize: 20}}>PROJECT SALMAN</Text>
        </View>
    )
}
const style = StyleSheet.create({
    Container: {justifyContent: 'center', alignItems: 'center', height: '100%'}
  })
