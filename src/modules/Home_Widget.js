import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image'

export default function Home_Widget({text, imageUrl, callBack}) {
    return (
        <TouchableOpacity
        onPress={() => callBack()}
        style={styles.widget}>
          <FastImage source={{ uri: imageUrl }}  style={styles.image} resizeMode={FastImage.resizeMode.stretch}/>
            <View style={styles.textContainer}>
              <Text style={styles.textBtn}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    widget: { borderWidth: 0.5, borderRadius: 10, height: '40%', width: '100%', },
    image: { width: '100%', height: '100%' },
    textBtn: {textAlign: 'right', fontSize: 30},
    textContainer: { position: 'absolute',  bottom: 0, backgroundColor: '#F6F6F6', opacity: 0.6, width: '100%'}
})