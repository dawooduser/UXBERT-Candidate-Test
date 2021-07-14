import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import FavBtn from './Fav_Btn'
import {imageParentRoot} from '../helper/contains'
import FastImage from 'react-native-fast-image'
const List = ({ data, navigation, favouriteData, clickFavourity, pagiNationCallBack }) => {
  // debugger
  function clickEventListener(data) {
    navigation.navigate(
      'MoviePage',
      { data },
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.contentList}
        columnWrapperStyle={styles.listContainer}
        data={data}
        onEndReachedThreshold={0}
        onEndReached={() => {
          if (pagiNationCallBack !== undefined) {
            pagiNationCallBack()
          }
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
        ListEmptyComponent={
          <Image
          source={require('../assets/nodata.png')} />
        }
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.card}
            key={index}
            >
              <FastImage
               resizeMode={FastImage.resizeMode.cover}
               style={styles.image} source={{ uri: `${imageParentRoot}${item.poster_path}` }} />
              <View style={styles.cardContent}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.name} >{item.title}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity 
                onPress={() => clickEventListener(item)}
                style={styles.followButton}>
                  <Text style={styles.followButtonText}>Detail</Text>
                </TouchableOpacity>
                <FavBtn callBack={clickFavourity} favouriteData={favouriteData} index={index} item={item} />
                </View>
              </View>
            </TouchableOpacity>
          )
        }} />
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#ebf0f7"
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    flexDirection: 'row',
    borderRadius: 20,
  },

  name: {
    fontSize: 18,
    flex: 1,
    flexWrap: 'wrap',
    alignSelf: 'center',
    color: "#3399ff",
    fontWeight: 'bold'
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: "#6666ff"
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  followButtonText: {
    fontSize: 12,
  },
});
