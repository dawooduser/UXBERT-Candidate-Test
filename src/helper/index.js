import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import Toast from '../modules/toast'
function httpResquest(method, endPoint, data, queries) {
    var url;
    const base_uri = "http://api.themoviedb.org/3"
    const api_key = "22be462e6d3de1dbab03d1ca50847b5a"
    debugger
    if (queries !== null & queries !== "" & queries !== undefined) {
        url = `${base_uri}/${endPoint}?api_key=${api_key}${queries}`
    } else {
        url = `${base_uri}/${endPoint}?api_key=${api_key}`
    }
    console.log({url})
    var config = {
        method,
        url,
    }
    if (method === "post") {
        config['data'] = data
    }
    return axios(config)
        .then((response) => {
            return response
        }, (error) => {
            debugger
            return {
                error: true,
                message: error.message
            };
        });
}

async function localStorgageSetItem(key, data) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
        Toast(error.message.toString())
        return false
    }
}
async function localStorgageGetItem(key) {
    try {
        var data = await AsyncStorage.getItem(key)
        if (data !== null) data = JSON.parse(data)
        return data
    } catch (error) {
        Toast(error.message.toString())
        return false
    }
}
function GetScreenWidth(per) {
    const onepercent = Dimensions.get('screen').width / 100;
    return onepercent * per;
  }
  function GetScreenHeight(per) {
    const onepercent = Dimensions.get('screen').height / 100;
    return onepercent * per;
  }
  

export {
    httpResquest,
    localStorgageSetItem,
    localStorgageGetItem,
    GetScreenWidth,
    GetScreenHeight
}