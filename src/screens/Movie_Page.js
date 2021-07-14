import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { imageParentRoot } from '../helper/contains'
import FastImage from 'react-native-fast-image'
import Fontisto from 'react-native-vector-icons/Fontisto'

// 
const MoviePage = ({ navigation, route }) => {
  const [msgContain, setMsgContain] = useState(
    ``,
  );

  const [objectData, setObjectData] = useState({})
  useEffect(() => {
    const { data } = route.params;
    setObjectData(data)
    setMsgContain(`${imageParentRoot}${objectData.poster_path}`)
  }, [])
  const initiateWhatsApp = () => {
    let url = 'whatsapp://send?text=' + msgContain;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp is installed on your device');
      });
  };
  const sendMail = () => {
    let email = 'tahasalman001@hotmail.com';
    let subject = `Amazing Movie Name ${objectData.title}`;
    let body = `Check out this amazing movie name  ${objectData.title} ;) ${imageParentRoot}${objectData.poster_path}`;
    Linking.openURL(`mailto:${email}?subject=${subject}&body=${body}`);
  };



  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            style={styles.avatar}
            source={{ uri: `${imageParentRoot}${objectData.poster_path}` }} />
          <View style={styles.ContainerTitle}>
            <Text style={styles.ContainerTitleTitle}>{objectData.title}</Text>
          </View>
        </View>
      </View>

      <View style={styles.profileDetail}>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Popularity</Text>
          <Text style={styles.count}>{objectData.popularity}</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Rating</Text>
          <Text style={styles.count}>{objectData.vote_average}/10 ({objectData.vote_count})</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Release Date</Text>
          <Text style={styles.count}>{objectData.release_date}</Text>
        </View>
      </View>

      <View style={styles.overViewContainer}>
        <Text style={{ fontSize: 16 }}>{objectData.overview}</Text>
      </View>

      <View style={[styles.bodyContent, { flexDirection: 'row', justifyContent: 'center'}]}>
        <TouchableOpacity style={[styles.buttonContainer, {width: 40, marginBottom: 10, marginRight: 5}]}
          onPress={() => initiateWhatsApp()}
        >
          <Fontisto name='whatsapp' size={15} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, {width: 40, marginBottom: 10, marginLeft: 5}]}
          onPress={() => sendMail()}
        >
          <Fontisto name='email' size={15} />
        </TouchableOpacity>
        
      </View>
      <View style={[styles.bodyContent, {marginTop: 0}]}>
        <TouchableOpacity style={styles.buttonContainer}
          onPress={() => navigation.pop()}
        >
          <Text style={{color: '#FFFFFF'}}>Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
export default MoviePage

const styles = StyleSheet.create({
  header: {

  },
  headerContent: {
    alignItems: 'center',
  },
  ContainerTitle: {
    position: 'absolute',
    bottom: 0,
    // color: "#3399ff",
    backgroundColor: '#3399ff',
    opacity: 0.6,
    width: '100%'
  },
  ContainerTitleTitle: {
    textAlign: 'center',
    fontSize: 22,
    color: "#FFFFFF",
  },
  overViewContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  avatar: {
    width: '100%',
    height: 150,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  profileDetail: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: "#ffffff"
  },
  detailContent: {
    margin: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    color: "#3399ff"
  },
  count: {
    fontSize: 18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  buttonContainer: {
    // marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#3399ff",
  },
  description: {
    fontSize: 20,
    color: "#3399ff",
    marginTop: 10,
    textAlign: 'center'
  },
});

