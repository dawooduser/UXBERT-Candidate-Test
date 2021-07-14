import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
export default function Header({title, iconName, search, callback, backCallBack}) {
  const [text, setText] = useState('')
    return (
        <View style={style.container}>
        <TouchableOpacity onPress={() => {
          if (backCallBack !== undefined) {
            backCallBack()
          }
        }}><Feather name={iconName} size={40} /></TouchableOpacity>
        {search ? <View style={style.searchInputContainer}>
          <TextInput maxLength={15} placeholderTextColor={'#506e78'} style={style.input} 
        placeholder={'Search'}
        onChangeText={(txt) => setText(txt)}
        onSubmitEditing={() => callback(text)}
        />
        <TouchableOpacity
        onPress={() => callback(text)}
        style={style.submit}><Text>Submit</Text></TouchableOpacity>
        </View> : 
        <Text style={style.text}>{title}</Text>}
      </View>
    )
}

const style = StyleSheet.create({
    container: { flexDirection: 'row', width: '100%', alignItems: "center",},
    text: { marginLeft: 10, fontSize: 40 },
    searchInputContainer: {width: '100%', flexDirection: 'row', alignContent: 'center'},
    input: {
      borderBottomWidth: 0.5,
      width: '65%',
      fontSize: 20,
      color : "black"

    },
    inputPlaceinput: {},
    submit: {marginLeft: 10, justifyContent: 'center', alignContent: 'center', backgroundColor: 'pink', borderRadius: 10, paddingLeft: 10, paddingRight: 10,}
  })
